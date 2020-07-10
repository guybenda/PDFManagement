import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";
import { REPORT_MODE } from "../../constants";

class NumberField extends React.Component {
  handleNumberChange = (e) => {
    this.props.handleChange(e.target.value);
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
        <div className='form-field-label'>
          {this.props.noMargin ? "" : this.props.name}
        </div>
        <MuiTextField
          type='number'
          //fullWidth
          className={this.props.noMargin ? "no-margin-field" : "form-field"}
          size={this.props.noMargin ? "small" : "medium"}
          disabled={this.props.disabled}
          variant={this.props.noMargin ? "standard" : "outlined"}
          value={this.props.value || ""}
          onChange={this.handleNumberChange}
        />
      </div>
    );
  }
}

export default NumberField;
