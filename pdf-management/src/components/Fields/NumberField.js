import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";
import { REPORT_MODE } from "../../constants";
import { editSection } from "../../actions";
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
      this.props.editSection(
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
        <div className="form-field-label">{this.props.noMargin ? "" : this.props.name}</div>
        <MuiTextField
          type='number'
          //fullWidth
          className={this.props.noMargin ? "no-margin-field" : "form-field"}
          size={this.props.noMargin ? "small" : "medium"}
          disabled={this.props.mode === REPORT_MODE.view ? true : false}
          variant={this.props.noMargin ? "standard" : "outlined"}
          value={this.props.value || ""}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(null, { editSection })(NumberField);
