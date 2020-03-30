import React from 'react';

import PeriodField from './Fields/PeriodField';

import './ReportTitle.css';

class ReportTitle extends React.Component {
	onChangePeriod = start => period => {
		this.props.onChangePeriod(period, start);
	};

	render() {
		return (
			<div className='report-title'>
				<h1>דו"ח חודשי </h1>
				<div className='report-title-period'>
					<PeriodField
						data={this.props.period.start}
						onChangeData={this.onChangePeriod(true)}
					/>
				</div>
				<h1> - </h1>
				<div className='report-title-period'>
					<PeriodField
						data={this.props.period.end}
						onChangeData={this.onChangePeriod(false)}
						minDate={this.props.period.start}
					/>
				</div>
			</div>
		);
	}
}

export default ReportTitle;
