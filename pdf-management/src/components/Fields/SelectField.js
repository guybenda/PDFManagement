import React from 'react';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import {} from '@material-ui/icons';

import './SelectField.css';

function SelectField(props) {
	return (
		<Autocomplete
			id={props.id}
			options={props.values}
			getOptionLabel={option => option}
			//style={{ width: 300 }}
			renderInput={params => (
				<TextField {...params} label={props.name} variant='outlined' />
			)}
		/>
	);
}

export default SelectField;
