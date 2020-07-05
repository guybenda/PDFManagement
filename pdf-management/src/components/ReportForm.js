import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { getForm, savaReport, saveReport } from '../api/ReportActions';
import './ReportForm.css';
import { FIELDS_COMPONENTS, REPORT_MODE } from '../constants'
import ReportTitle from './ReportTitle';
import ReportAction from './ReportAction';
import { connect } from 'react-redux';
import {  saveForm,setForm } from '../actions'
class ReportForm extends React.Component {
	state = {}
	componentDidMount() {
		this.props.setForm(this.props.id)
	}

	getField(sectionId, field) {
		let FieldComp = FIELDS_COMPONENTS[field.type];
		return <FieldComp mode={this.props.mode} sectionId={sectionId} {...field} />
	}

	getTitle(title) {
		return (<div>{title}</div>)
	}

	renderFormData(formData) {
		return (
			<div>
				{this.getTitle(formData.name)}
				{formData.sections.map(section => {
					return (

					<div>
						<ExpansionPanel
							className='section'
							defaultExpanded
							key={section.id}
						>
							<ExpansionPanelSummary expandIcon={<ExpandMore />}>
								<div className='section-title'>{section.title}</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<div className='section-contents'>
									{section.fields.map(field => {
										return this.getField(section.id, field)
									})}
								</div>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</div>)
				})
				}
			</div>)
	}



	render() {
		if (!this.props.form) return null;

		return (
			<div className="report-container">
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<div className="report-header-container">
						<ReportTitle mode={this.props.mode}/>
						<ReportAction/> 
					</div>
					{this.renderFormData(this.props.form)}
				</MuiPickersUtilsProvider>
			</div>
		);
	}

}

const mapStateToProps = ({ formReducer }) => {
	return { ...formReducer }
}

export default connect(mapStateToProps, { saveForm,setForm })(ReportForm);
