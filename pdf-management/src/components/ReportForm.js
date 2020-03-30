import React from 'react';
import { Container } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from '@date-io/moment';

import Section from './Section';
import Header from './Header';
import ReportContext from '../ReportContext';
import ReportTitle from './ReportTitle';
import { DATA_FIELDS } from './Fields/Fields';

import { saveReport } from '../api/ReportActions';

import './ReportForm.css';

class ReportForm extends React.Component {
	state = {
		data: null,
		period: {
			start: null,
			end: null
		},
		loading: true
	};

	componentDidMount() {
		// Create empty data structure for every field
		let data = this.createInitialData(this.context.form.sections);

		let period = {
			start: moment(),
			end: moment()
		};

		this.setState({ data, period, loading: false });
	}

	createInitialData(sections) {
		const isInputField = field => DATA_FIELDS.some(f => f === field);

		return sections.reduce(
			(allSections, section) =>
				(allSections = {
					...allSections,
					[section.id]: section.fields.reduce((allFields, field) => {
						if (isInputField(field.type))
							return { ...allFields, [field.id]: null };
						return allFields;
					}, {})
				}),
			{}
		);
	}

	validateData(data) {
		let sections = Object.keys(data).reduce((sections, sectionKey) => {
			let section = data[sectionKey];

			return {
				...sections,
				[sectionKey]: Object.keys(section).reduce((result, key) => {
					let current = section[key];
					if (
						typeof current === 'string' ||
						typeof current === 'number' ||
						typeof current === 'boolean'
					) {
						return { ...result, [key]: current };
					}

					if (current instanceof moment) {
						return { ...result, [key]: current.toISOString() };
					}

					if (Array.isArray(current)) {
						return {
							...result,
							[key]: this.validateTable(current)
						};
					}

					return result;
				}, {})
			};
		}, {});

		return sections;
	}

	validateTable(table) {
		return table; //TODO
	}

	onChangeData = (section, field) => value => {
		this.setState(({ data }) => {
			let sections = { ...data };
			sections[section] = { ...sections[section] };

			sections[section][field] = value;

			return { data: sections };
		});
		console.log(this.state);
	};

	// second parameter is true if start period
	onChangePeriod = (newPeriod, isStart) => {
		this.setState(({ period: prevPeriod }) => {
			let start = moment(isStart ? newPeriod : prevPeriod.start);
			let end = moment.max(start, isStart ? prevPeriod.end : newPeriod);

			return {
				period: {
					start,
					end
				}
			};
		});
	};

	onSave = () => {
		let reportData = {
			period: {
				start: this.state.period.start.format('YYYY-MM'),
				end: this.state.period.end.format('YYYY-MM')
			},
			data: this.validateData(this.state.data)
		};

		saveReport(this.context.form.id, reportData);
	};

	renderForm() {
		if (!this.state.data) return null; //TODO: loader
		return this.context.form.sections.map(section => (
			<Section
				key={section.id}
				section={section}
				data={this.state.data[section.id]}
				onChangeData={this.onChangeData}
			/>
		));
	}

	render() {
		if (!this.context.form) return null;

		return (
			<>
				<Header onSave={this.onSave} />
				{!this.state.loading && (
					<Container maxWidth='lg' className='report-form-container'>
						<MuiPickersUtilsProvider utils={MomentUtils}>
							<ReportTitle
								onChangePeriod={this.onChangePeriod}
								period={this.state.period}
							/>
							<form>{this.renderForm()}</form>
						</MuiPickersUtilsProvider>
					</Container>
				)}
			</>
		);
	}
}

ReportForm.contextType = ReportContext;

export default ReportForm;
