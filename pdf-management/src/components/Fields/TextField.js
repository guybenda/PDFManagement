import React from 'react';

import { TextField as MuiTextField } from '@material-ui/core';
import {} from '@material-ui/icons';

import './TextField.css';

class TextField extends React.Component {
	componentDidMount() {
		this.props.onChangeData('');
	}

	handleChange = e => {
		this.props.onChangeData(e.target.value);
	};

	render() {
		return (
			<MuiTextField
				fullWidth
				id={this.props.id}
				label={this.props.name}
				variant='outlined'
				value={this.props.value}
				onChange={this.handleChange}
			/>
		);
	}
}

export default TextField;
