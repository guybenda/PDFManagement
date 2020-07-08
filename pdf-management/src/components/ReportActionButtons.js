import React from "react";
import { Button } from "@material-ui/core";
import { REPORT_MODE } from "../constants";
import { Edit } from "@material-ui/icons";

class ReportActionButtons extends React.Component {
  toggleMode = () => {
    this.props.toggleEditMode(this.props.mode);
  };

  render() {
    if (this.props.mode === REPORT_MODE.view) {
      return (
        <Button
          onClick={this.toggleMode}
          key='edit'
          color='inherit'
          startIcon={<Edit />}
        >
          עבור למצב עריכה
        </Button>
      );
    } else {
      return (
        <>
          <Button onClick={this.toggleMode} color='inherit' key='cancel'>
            ביטול
          </Button>
          <Button onClick={this.props.saveForm} key='save' color='inherit'>
            שמירה
          </Button>
        </>
      );
    }
  }
}

export default ReportActionButtons;
