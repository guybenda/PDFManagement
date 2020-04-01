import React from 'react';

import ReportContext from '../../ReportContext';
import PrintPage from './PrintPage';
import FormGrid from './FormGrid';

import './PrintView.css';

class PrintView extends React.Component {
	splitContentToPages() {
		//TODO
	}

	render() {
		let { period } = this.props;
		let { form } = this.context;

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
			<>
				<div className='print-page-first'>
					<img
						src={process.env.PUBLIC_URL + '/200px-IsraeliNavy.png'}
						alt='חיל הים'
					/>
					<br />
					<div className='print-title'>{form.name}</div>
					<div className='print-title-period'>{periodText}</div>
				</div>
				<PrintPage header='- סופר סודי -' footer='עמוד 1'>
					<FormGrid>
						<div
							style={{
								gridRow: 'span 5',
								backgroundColor: 'red'
							}}
						></div>
					</FormGrid>
				</PrintPage>
				<PrintPage>al</PrintPage>
			</>
		);
	}
}

PrintView.contextType = ReportContext;

export default PrintView;
