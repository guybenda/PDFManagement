import React from 'react';

import ReportContext from '../../ReportContext';
import PrintPage from './PrintPage';
import FormGrid from './FormGrid';
import FIELDS from '../Fields/Fields';

import './PrintView.css';
import Field from '../Field';

const PAGE_SIZE = 25;
const TITLE_HEIGHT = 4;
const HEADER = '- סופר סודי -';
const FOOTER = page => `עמוד ${page}`;

// Split array into groups
const splitArray = (array, chunk_size) =>
	Array(Math.ceil(array.length / chunk_size))
		.fill()
		.map((_, index) => index * chunk_size)
		.map(begin => array.slice(begin, begin + chunk_size));

class PrintView extends React.Component {
	splitContentToPages() {
		let { data } = this.props;
		let { form } = this.context;

		let pages = [];

		let currentPage = [];
		let currentPageSize = 0;

		const pushPage = () => {
			pages.push(currentPage);
			currentPage = [];
			currentPageSize = 0;
		};

		const createField = (field, data, size) => (
			<Field
				key={field.id}
				field={field}
				data={data}
				print
				style={{ gridRow: `span ${size}` }}
			/>
		);

		for (let section of form.sections) {
			let isFirstField = true;
			let title = (
				<>
					<div key='_placeholder' />
					<div key={section.id} className='print-section-title'>
						{section.title}
					</div>
				</>
			);

			//TODO make this less ugly
			for (let field of section.fields) {
				let remainingSpace = PAGE_SIZE - currentPageSize;

				let fieldHeight = FIELDS[field.type].PRINT_HEIGHT;
				let fieldData = data[section.id][field.id];

				if (!fieldData) continue;

				if (fieldHeight === null) {
					let actualTableLength = fieldData.length;
					let tableLength = fieldData.length;

					if (isFirstField) tableLength += TITLE_HEIGHT;

					if (remainingSpace < tableLength + 1) {
						let firstTableData = data.slice(0, tableLength - 1);
						let tableDataSplit = splitArray(
							data.slice(tableLength - 1),
							PAGE_SIZE - 1
						);

						currentPage.push(
							createField(
								field,
								firstTableData,
								actualTableLength
							)
						);

						for (const tableDataPage of tableDataSplit) {
							currentPage.push(
								createField(
									field,
									tableDataPage,
									data.length + 1
								)
							);

							pushPage();
						}
					} else {
						currentPage.push(
							createField(field, fieldData, tableLength + 1)
						);

						currentPageSize += tableLength + 1;
					}
				} else {
					let actualHeight = fieldHeight;
					if (isFirstField) fieldHeight += TITLE_HEIGHT;

					if (remainingSpace < fieldHeight) pushPage();

					if (isFirstField) currentPage.push(title);

					currentPage.push(
						createField(field, fieldData, actualHeight)
					);

					currentPageSize += fieldHeight;
				}

				isFirstField = false;
			}
		}

		while (currentPageSize < PAGE_SIZE) {
			currentPage.push(
				<div
					key={'SHIT' + currentPageSize}
					style={{ borderColor: 'black', borderWidth: '1px' }}
				>
					ek
				</div>
			);
			currentPageSize++;
		}

		if (currentPageSize > 0) pages.push(currentPage);

		return pages;
	}

	renderCoverPage() {
		let { period } = this.props;

		let periodText;

		if (period.start.year() === period.end.year()) {
			if (period.start.month() === period.end.month()) {
				periodText = period.start.format('MMMM YYYY');
			} else {
				periodText = `${period.start.format(
					'MMMM'
				)} - ${period.end.format('MMMM YYYY')}`;
			}
		} else {
			periodText = `${period.start.format(
				'MMMM YYYY'
			)} - ${period.end.format('MMMM YYYY')}`;
		}

		return (
			<PrintPage header='- סופר סודי -'>
				<div className='print-page-first'>
					<img
						src={process.env.PUBLIC_URL + '/200px-IsraeliNavy.png'}
						alt='חיל הים'
					/>
					<br />
					<div className='print-title'>{this.context.form.name}</div>
					<div className='print-title-period'>{periodText}</div>
				</div>
			</PrintPage>
		);
	}

	render() {
		console.log('PRINT IS RENDERING!!!');

		return (
			<>

				{this.renderCoverPage()}

				{this.splitContentToPages().map((page, index) => (
					<PrintPage
						key={index}
						header={HEADER}
						footer={FOOTER(index + 1)}
					>
						<FormGrid>{page}</FormGrid>
					</PrintPage>
				))}
			</>
		);
	}
}

PrintView.contextType = ReportContext;

export default PrintView;
