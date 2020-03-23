import React from 'react';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import {} from '@material-ui/icons';

import './SelectField.css';

class SelectField extends React.Component {
	componentDidMount() {
		this.props.onChangeData('');
	}

	handleChange = e => {
		this.props.onChangeData(e.target.value);
	};

	render() {
		return (
			<Autocomplete
				id={this.props.id}
				options={this.props.values}
				getOptionLabel={option => option}
				//style={{ width: 300 }}
				renderInput={params => (
					<TextField
						{...params}
						label={this.props.name}
						variant='outlined'
					/>
				)}
				value={this.props.value}
				onChange={this.handleChange}
			/>
		);
	}
}

export default SelectField;
