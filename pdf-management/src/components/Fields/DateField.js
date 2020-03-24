import React from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers';

import './TextField.css';

class DateField extends React.Component {
	componentDidMount() {
		if (!this.props.value) {
			this.props.onChangeData(new Date().valueOf());
		}
	}

	handleChange = date => {
		this.props.onChangeData(date.valueOf());
	};

	render() {
		return (
			<KeyboardDatePicker
				autoOk
				disableToolbar
				variant='inline'
				format='DD/MM/YYYY'
				InputAdornmentProps={{ position: 'start' }}
				fullWidth
				id={this.props.id}
				label={this.props.noMargin ? '' : this.props.name}
				inputVariant={this.props.noMargin ? 'standard' : 'outlined'}
				value={this.props.data || new Date().valueOf()}
				onChange={this.handleChange}
			/>
		);
	}
}

export default DateField;
