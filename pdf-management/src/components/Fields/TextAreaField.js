import React from "react";
import { TextareaAutosize } from "@material-ui/core";
import { REPORT_MODE } from "../../constants";

class TextAreaField extends React.Component {
  handleTextAreaChange = (e) => {
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

    // handle when not in table
    return (
      <div>
        <div className='form-field-label'>
          {this.props.noMargin ? "" : this.props.name}
        </div>
        <TextareaAutosize
          rowsMin={this.props.noMargin ? 1 : 3}
          rowsMax={this.props.noMargin ? 3 : 7}
          className={this.props.noMargin ? "no-margin-field" : "form-field"}
          disabled={this.props.disabled}
          variant={this.props.noMargin ? "standard" : "outlined"}
          value={this.props.value || ""}
          onChange={this.handleTextAreaChange}
        />
      </div>
    );
  }
}

export default TextAreaField;
