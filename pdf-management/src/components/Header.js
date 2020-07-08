import React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { Menu as MenuIcon, Print as PrintIcon } from "@material-ui/icons";
import ReportActionButtons from "./ReportActionButtons";

import { setMode } from "../actions";
import { connect } from "react-redux";

import "./Header.css";

class Header extends React.Component {
  render() {
    let buttons = [
      <ReportActionButtons />,
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
          <Toolbar className='header-toolbar'>
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
  return { form: formReducer.form };
};
export default connect(mapStateToProps)(Header);
