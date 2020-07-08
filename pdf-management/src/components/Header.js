import React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { Menu as MenuIcon, Print as PrintIcon } from "@material-ui/icons";
import ReportActionButtons from "./ReportActionButtons";
import { toggleEditMode, saveForm } from "../actions";

import { connect } from "react-redux";

import "../index.css";

class Header extends React.Component {
  render() {
    let buttons = [
      <ReportActionButtons
        toggleEditMode={this.props.toggleEditMode}
        saveForm={this.props.saveForm}
        mode={this.props.mode}
      />,
      <Button key='print' color='inherit' onClick={this.props.onPrint}>
        <PrintIcon />
      </Button>
    ];

    // if (this.props.mode === "edit") {
    //   buttons.unshift(
    //     <Button key='edit' color='inherit' onClick={this.props.onSave}>
    //       שמירה
    //     </Button>
    //   );
    // }

    return (
      <div>
        <AppBar position='fixed'>
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
            <div style={{ position: "absolute", left: 0 }}>{buttons}</div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = ({ formReducer }) => {
  return { ...formReducer };
};
export default connect(mapStateToProps, { toggleEditMode, saveForm })(Header);
