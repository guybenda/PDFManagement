import React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { Menu as MenuIcon, Print as PrintIcon } from "@material-ui/icons";
import { REPORT_MODE } from "../constants";
import { toggleEditMode, saveForm } from "../actions";
import { Delete, Save, Edit } from "@material-ui/icons";

import { connect } from "react-redux";

import "../index.css";

class Header extends React.Component {
  renderButtons = () => {
    if (this.props.mode === REPORT_MODE.view) {
      return (
        <>
          <Button
            onClick={() => {
              this.props.toggleEditMode(this.props.mode, this.props.form);
            }}
            key='edit'
            color='inherit'
            startIcon={<Edit />}
          >
            עבור למצב עריכה
          </Button>
          <Button key='print' color='inherit' onClick={this.props.onPrint}>
            <PrintIcon />
          </Button>
        </>
      );
    } else if (this.props.mode === REPORT_MODE.edit) {
      return (
        <>
          <Button
            onClick={this.toggleMode}
            color='inherit'
            key='cancel'
            startIcon={<Delete />}
          >
            ביטול
          </Button>
          <Button
            onClick={this.props.saveForm}
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
            <MenuIcon />
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
export default connect(mapStateToProps, { toggleEditMode, saveForm })(Header);
