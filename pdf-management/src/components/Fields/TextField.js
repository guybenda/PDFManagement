import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";
import { REPORT_MODE } from "../../constants";
import { editSection } from "../../actions";
import { connect } from "react-redux";

class TextField extends React.Component {
  handleTextChange = (e) => {
    this.props.handleChange(e.target.value);
  };

  render() {
    return (
      <div>
        <div className='form-field-label'>
          {this.props.noMargin ? "" : this.props.name}
        </div>
        <MuiTextField
          disabled={this.props.disabled}
          className={this.props.noMargin ? "no-margin-field" : "form-field"}
          variant={this.props.noMargin ? "standard" : "outlined"}
          value={this.props.value || ""}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}

export default TextField;
