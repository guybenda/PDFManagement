import React from 'react';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import {} from '@material-ui/icons';

import './SelectField.css';

class SelectField extends React.Component {
	componentDidMount() {
		if (!this.props.value) {
			this.props.onChangeData('');
		}
	}

	handleChange = e => {
		this.props.onChangeData(e.target.textContent);
	};

	render() {
		if (this.props.print)
			return (
				<>
					<div className='field-print-title'>
						{this.props.noMargin ? '' : this.props.name}
					</div>
					<div>{this.props.data}</div>
				</>
			);

		return (
			<Autocomplete
				options={this.props.values}
				getOptionLabel={option => option}
				//style={{ width: 300 }}
				renderInput={params => (
					<TextField
						{...params}
						label={this.props.noMargin ? '' : this.props.name}
						variant={this.props.noMargin ? 'standard' : 'outlined'}
					/>
				)}
				value={this.props.value}
				onChange={this.handleChange}
			/>
		);
	}
}

export default SelectField;
