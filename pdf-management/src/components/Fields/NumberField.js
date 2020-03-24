import React from 'react';

import { TextField as MuiTextField } from '@material-ui/core';
import {} from '@material-ui/icons';

import './TextField.css';

class NumberField extends React.Component {
	componentDidMount() {
		if (!this.props.value) {
			this.props.onChangeData('');
		}
	}

	handleChange = e => {
		this.props.onChangeData(e.target.value);
	};

	render() {
		return (
			<MuiTextField
				type='number'
				fullWidth
				id={this.props.id}
				label={this.props.noMargin ? '' : this.props.name}
				variant={this.props.noMargin ? 'standard' : 'outlined'}
				value={this.props.data || ''}
				onChange={this.handleChange}
			/>
		);
	}
}

export default NumberField;