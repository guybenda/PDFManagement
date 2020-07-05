import React from 'react';
import {Button} from '@material-ui/core'
import { REPORT_MODE } from '../constants';

import {connect} from 'react-redux';
import {setMode} from '../actions'
class ReportAction extends React.Component {
    toggleMode = () =>{
        const newMode = this.props.mode === REPORT_MODE.view ? REPORT_MODE.edit : REPORT_MODE.view;
        this.props.setMode(newMode);
    }
    renderButtons=()=>{
        if (this.props.mode === REPORT_MODE.view){
            return (<Button onClick={this.toggleMode}  variant="contained" color="secondary">עבור למצב עריכה</Button>);
        } else{
           return (<div>
           <Button onClick={this.toggleMode}  variant="contained" color="primary">ביטול</Button>
           <Button onClick={this.props.saveReport}  variant="contained" color="secondary">שמור טופס</Button>
           </div>)
        }

    }

    render() {
		return this.renderButtons();
	}
}

const mapStateToProps=({formReducer})=>{
    return ({mode:formReducer.mode})
}

export default connect(mapStateToProps,{setMode})(ReportAction);
