import React from 'react';

import moment from 'moment';

import { DatePicker } from '@material-ui/pickers';

import './PeriodField.css';

class PeriodField extends React.Component {
	componentDidMount() {
		if (!this.props.value) {
			this.props.onChangeData(moment());
		}
	}

	handleChange = date => {
		this.props.onChangeData(date);
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
				//disableToolbar
				views={['year', 'month']}
				openTo='month'
				variant='inline'
				minDate={this.props.minDate}
				maxDate={this.props.maxDate}
				//format='DD/MM/YYYY'
				//InputAdornmentProps={{ position: 'start' }}
				fullWidth
				label={this.props.noMargin ? '' : this.props.name}
				inputVariant={this.props.noMargin ? 'standard' : 'outlined'}
				value={this.props.data || moment()}
				onChange={this.handleChange}
			/>
		);
	}
}

export default PeriodField;
