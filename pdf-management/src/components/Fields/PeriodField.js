import React from 'react';

import moment from 'moment';

import { DatePicker } from '@material-ui/pickers';
import {REPORT_MODE} from '../../constants';
import './PeriodField.css';

class PeriodField extends React.Component {

	handleChange = date => {
		this.props.handlePeriodChange(this.props.time,date);
	};

	render() {
		if (this.props.print)
			return (
				<>
					{!this.props.noMargin && (
						<div className='field-print-title'>
							{this.props.name}:
						</div>
					)}
					<div>{moment(this.props.data).format('MMMM YYYY')}</div>
				</>
			);

		return (
			<DatePicker
				autoOk
				disabled={this.props.mode === REPORT_MODE.view ? true : false}
				views={['year', 'month']}
				openTo='month'
				variant='inline'
				minDate={this.props.minDate}
				maxDate={this.props.maxDate}
				fullWidth={false}
				label={this.props.noMargin ? '' : this.props.name}
				value={this.props.value || moment()}
				onChange={this.handleChange}
			/>
		);
	}
}

export default PeriodField;
