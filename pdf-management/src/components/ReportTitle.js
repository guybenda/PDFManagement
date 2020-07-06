import React from 'react';

import PeriodField from './Fields/PeriodField';

import './ReportTitle.css';
import {connect} from 'react-redux';
import {editPeriod} from '../actions';
import moment from 'moment';

class ReportTitle extends React.Component {

	handleTimeChange = (time,date) =>{
		const period = this.props.period;
		period[time] = moment(date).format('YYYY-MM');
		this.props.editPeriod(period);
	}

	render() {
		return (
			<div className='report-title'>
				<h1>דו"ח חודשי </h1>
				<div className='report-title-period'>
					<PeriodField
						// mode={this.props.mode}
						value={this.props.period.start}
						handleTimeChange={this.handleTimeChange}
						// time='start'
						// maxDate={this.props.period.end}
					/>
				</div>
				<h1> - </h1>
				<div className='report-title-period'>
					<PeriodField
						// time='end'
						value={this.props.period.end}
						// mode={this.props.mode}
						handleTimeChange={this.handleTimeChange}
						minDate={this.props.period.start}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps =({formReducer })=>{
	return {period:formReducer.form.period}
}
export default connect(mapStateToProps,{editPeriod})(ReportTitle);
