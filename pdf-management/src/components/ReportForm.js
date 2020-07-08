import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "./ReportForm.css";
import { FIELDS_COMPONENTS, REPORT_MODE } from "../constants";
import ReportTitle from "./ReportTitle";
import { connect } from "react-redux";
import { saveForm, getForm } from "../actions";

class ReportForm extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getForm(this.props.match.params.id);
  }

  getField(sectionId, field) {
    let FieldComp = FIELDS_COMPONENTS[field.type];
    return (
      <FieldComp mode={this.props.mode} sectionId={sectionId} {...field} />
    );
  }

  renderFormData(formData) {
    return (
      <div>
        {formData.sections.map((section) => {
          return (
              <ExpansionPanel
                className='section'
                defaultExpanded
                key={section.id}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    {section.title}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className='section-contents'>
                    {section.fields.map((field, index) => {
                      return this.getField(section.id, field);
                    })}
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
          );
        })}
      </div>
    );
  }

  render() {
    if (!this.props.form) return null;

    return (
      <div className='report-container'>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div className='report-header-container'>
            <ReportTitle mode={this.props.mode} />
          </div>
          {this.renderFormData(this.props.form)}
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ formReducer }) => {
  return { ...formReducer };
};

export default connect(mapStateToProps, { saveForm, getForm })(ReportForm);
