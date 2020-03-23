import React from 'react';

import { TextField as MuiTextField } from '@material-ui/core';
import {} from '@material-ui/icons';

import './TextField.css';

function TextField(props) {
	return (
		<>
			<MuiTextField id={props.id} label={props.name} variant='outlined' />
		</>
	);
}

export default TextField;
