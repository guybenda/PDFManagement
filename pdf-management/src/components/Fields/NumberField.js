import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";
import { REPORT_MODE } from "../../constants";
import "./TextField.css";
import { editSections } from "../../actions";
import { connect } from "react-redux";

class NumberField extends React.Component {
  handleChange = (e) => {
    // Check if the field is in table
    if (this.props.handleChange) {
      this.props.handleChange(
        e.target.value,
        this.props.id,
        this.props.sectionId
      );
    } else {
      this.props.editSections(
        this.props.sectionId,
        this.props.id,
        e.target.value
      );
    }
  };

  render() {
    if (this.props.print)
      return (
        <>
          {!this.props.noMargin && (
            <div className='field-print-title'>{this.props.name}:</div>
          )}
          <div>{this.props.data}</div>
        </>
      );

    return (
      <div>
        <MuiTextField
          type='number'
          //fullWidth
          style={{ width: this.props.isTable ? "10vw" : "15vw" }}
          size={this.props.isTable ? "small" : "medium"}
          disabled={this.props.mode === REPORT_MODE.view ? true : false}
          label={this.props.noMargin ? "" : this.props.name}
          variant={this.props.noMargin ? "standard" : "outlined"}
          value={this.props.value || ""}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(null, { editSections })(NumberField);
