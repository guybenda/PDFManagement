import React from 'react';
import { Container } from '@material-ui/core';

import ReportContext from '../ReportContext';
import Section from './Section';

import './ReportForm.css';

class ReportForm extends React.Component {
	state = {
		data: null
	};

	/*componentDidUpdate() {
		console.log('UPDATE!!!');
	}*/

	componentDidMount() {
		// Create empty data structure for every field
		let data = this.context.sections.reduce(
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

		this.setState({ data });
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
		return (
			<ReportContext.Consumer>
				{report => (
					<Container maxWidth='lg' className='report-form-container'>
						<h1>{report.name}</h1>
						<form>{this.renderForm(report)}</form>
					</Container>
				)}
			</ReportContext.Consumer>
		);
	}
}

ReportForm.contextType = ReportContext;

export default ReportForm;
