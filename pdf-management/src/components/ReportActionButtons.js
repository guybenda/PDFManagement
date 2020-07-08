import React from "react";
import { Button } from "@material-ui/core";
import { REPORT_MODE } from "../constants";
import { Delete, Save, Edit } from "@material-ui/icons";
import { connect } from "react-redux";
import { setMode, saveForm } from "../actions";

class ReportActionButtons extends React.Component {
  toggleMode = () => {
    console.log("toggle mode ", this.props.mode);
    const newMode =
      this.props.mode === REPORT_MODE.view
        ? REPORT_MODE.edit
        : REPORT_MODE.view;
    this.props.setMode(newMode);
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
          <Button
            onClick={this.toggleMode}
            color='inherit'
            key='cancel'
            // endIcon={<Delete />}
          >
            ביטול
          </Button>
          <Button
            onClick={this.props.saveForm}
            key='save'
            color='inherit'
            // endIcon={<Save />}
          >
            שמירה
          </Button>
        </>
      );
    }
  }
}

const mapStateToProps = ({ formReducer }) => {
  return { mode: formReducer.mode };
};

export default connect(mapStateToProps, { setMode, saveForm })(
  ReportActionButtons
);
