import React from "react";

import moment from "moment";

import { KeyboardDatePicker } from "@material-ui/pickers";

import { REPORT_MODE } from "../../constants";

class DateField extends React.Component {
  handleDateChange = (date) => {
    this.props.handleChange(date._d);
  };

  render() {
    return (
      <div>
        <div className='form-field-label'>
          {this.props.noMargin ? "" : this.props.name}
        </div>
        <KeyboardDatePicker
          disabled={this.props.disabled}
          autoOk
          disableToolbar
          variant='inline'
          format='DD/MM/YYYY'
          className={this.props.noMargin ? "no-margin-field" : "form-field"}
          InputAdornmentProps={{ position: "start" }}
          inputVariant={this.props.noMargin ? "standard" : "outlined"}
          value={this.props.value || moment()}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default DateField;
