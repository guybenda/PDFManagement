import React from 'react';
import ReportForm from './ReportForm';
class ReportFormView extends React.Component{
    render(){
        return <ReportForm {...this.props}/>
    }
}

export default ReportFormView;