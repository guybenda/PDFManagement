import React from 'react';
import { REPORT_MODE } from '../constants'
import ReportFormView from './ReportFormView';
import ReportFormEdit from './ReportFormEdit';
import { Button } from '@material-ui/core';
class ReportFormContainer extends React.Component {
    state = {
        mode: REPORT_MODE.view
    }

    toggleMode = () => {
        this.setState(prev=>(prev.mode === REPORT_MODE.view ? { mode: REPORT_MODE.edit } : { mode: REPORT_MODE.view }))
    }
    renderForm = () => {
        if (this.state.mode === REPORT_MODE.view)
            return <ReportFormView id={this.props.match.params.id} mode={REPORT_MODE.view}/>
        else
            return <ReportFormEdit id={this.props.match.params.id} mode={REPORT_MODE.edit}/>
    }
    render() {
        return (
            this.renderForm()
        );
    }
}

export default ReportFormContainer;