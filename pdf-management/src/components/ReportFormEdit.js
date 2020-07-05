import React from 'react';
import ReportForm from './ReportForm';
class ReportFormEdit extends React.Component{

    render(){
       return (
               <ReportForm {...this.props}/>
       )
    }
}

export default ReportFormEdit;