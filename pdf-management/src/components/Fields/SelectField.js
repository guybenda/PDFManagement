import React from "react";

import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import {} from "@material-ui/icons";
import { REPORT_MODE } from "../../constants";

class SelectField extends React.Component {
  handleSelectChange = (e, newVal) => {
    this.props.handleChange(newVal.id);
  };

  getOptionById(value) {
    // if undefined first value as default
    return (
      this.props.values.find((option) => option.id === value) ||
      this.props.values[0]
    );
  }

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
        <Autocomplete
          options={this.props.values}
          onChange={this.handleSelectChange}
          getOptionLabel={(option) => option.title}
          value={this.getOptionById(this.props.value)}
          className={this.props.noMargin ? "no-margin-field" : "form-field"}
          size={this.props.noMargin ? "small" : "medium"}
          disabled={this.props.disabled}
          renderInput={(params) => (
            <TextField
              {...params}
              variant={this.props.noMargin ? "standard" : "outlined"}
            />
          )}
        />
      </div>
    );
  }
}

export default SelectField;
