import React from 'react';
import { Container } from '@material-ui/core';

import ReportContext from '../ReportContext';
import Section from './Section';

import './ReportForm.css';

class ReportForm extends React.Component {
	renderForm(report) {
		return report.sections.map(section => (
			<Section key={section.id} section={section} />
		));
	}

	render() {
		return (
			<ReportContext.Consumer>
				{report => (
					<Container maxWidth='lg' className='report-form-container'>
						<h1>{report.name}</h1>
						{this.renderForm(report)}
					</Container>
				)}
			</ReportContext.Consumer>
		);
	}
}

ReportForm.contextType = ReportContext;

export default ReportForm;
