import React from 'react';
import { Container } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import Section from './Section';
import Header from './Header';

import { reports } from '../mockData.js';

import './ReportForm.css';

class ReportForm extends React.Component {
	state = {
		report: null,
		data: null
	};

	componentDidMount() {
		let { reportID } = this.props.match.params;
		let report = reports.find(report => report.id === +reportID);

		// Create empty data structure for every field
		let data = report.sections.reduce(
			(allSections, section) =>
				(allSections = {
					...allSections,
					[section.id]: section.fields.reduce(
						(allFields, field) =>
							(allFields = { ...allFields, [field.id]: null }),
						{}
					)
				}),
			{}
		);

		this.setState({ data, report });
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

	renderForm(report) {
		if (!this.state.data) return null; //TODO: loader
		return report.sections.map(section => (
			<Section
				key={section.id}
				section={section}
				data={this.state.data[section.id]}
				onChangeData={this.onChangeData}
			/>
		));
	}

	render() {
		if (!this.state.report) return null;

		return (
			<>
				<Header report={this.state.report} />
				<Container maxWidth='lg' className='report-form-container'>
					<h1>{this.state.report.name}</h1>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<form>{this.renderForm(this.state.report)}</form>
					</MuiPickersUtilsProvider>
				</Container>
			</>
		);
	}
}

export default ReportForm;
