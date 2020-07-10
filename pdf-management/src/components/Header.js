import React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { Menu, Print, Delete, Save, Edit } from "@material-ui/icons";
import { REPORT_MODE } from "../constants";
import { setMode, saveForm } from "../actions";

import { connect } from "react-redux";

import "../index.css";

class Header extends React.Component {
  onSaveClick = () => {
    this.props.saveForm(this.props.form);
  };

  renderButtons = () => {
    if (this.props.mode === REPORT_MODE.view) {
      return (
        <>
          <Button
            onClick={() => {
              this.props.setMode(REPORT_MODE.edit);
            }}
            key='edit'
            color='inherit'
            startIcon={<Edit />}
          >
            עבור למצב עריכה
          </Button>
          <Button key='print' color='inherit' onClick={this.props.onPrint}>
            <Print />
          </Button>
        </>
      );
    } else if (this.props.mode === REPORT_MODE.edit) {
      return (
        <>
          <Button
            // to change arrow func
            onClick={() => {
              this.props.setMode(REPORT_MODE.view);
            }}
            color='inherit'
            key='cancel'
            startIcon={<Delete />}
          >
            ביטול
          </Button>
          <Button
            onClick={this.onSaveClick}
            key='save'
            color='inherit'
            startIcon={<Save />}
          >
            שמירה
          </Button>
        </>
      );
    }
  };

  render() {
    return (
      <AppBar className='report-header' position='fixed'>
        <Toolbar style={{ backgroundColor: "#192e4d" }}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={() => console.log("menu")}
          >
            <Menu />
          </IconButton>
          <div className='header-title'>
            {this.props.form != null ? this.props.form.name : ""}
          </div>
          <div style={{ position: "absolute", left: "3vw" }}>
            {this.renderButtons()}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ formReducer }) => {
  return { ...formReducer };
};
export default connect(mapStateToProps, { setMode, saveForm })(Header);
