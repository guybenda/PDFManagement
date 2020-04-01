import React from 'react';

import moment from 'moment';

import { KeyboardDatePicker } from '@material-ui/pickers';

import './TextField.css';

class DateField extends React.Component {
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
					<div className='field-print-title'>
						{this.props.noMargin ? '' : this.props.name}
					</div>
					<div>{moment(this.props.data).format('l')}</div>
				</>
			);

		return (
			<KeyboardDatePicker
				autoOk
				disableToolbar
				variant='inline'
				format='DD/MM/YYYY'
				InputAdornmentProps={{ position: 'start' }}
				fullWidth
				label={this.props.noMargin ? '' : this.props.name}
				inputVariant={this.props.noMargin ? 'standard' : 'outlined'}
				value={this.props.data || moment()}
				onChange={this.handleChange}
			/>
		);
	}
}

export default DateField;
