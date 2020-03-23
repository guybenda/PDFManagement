import React from 'react';

import {} from '@material-ui/core';
import {} from '@material-ui/icons';

import {
	DynamicTableField,
	SelectField,
	StaticTableField,
	TextField,
	Divider
} from './Fields/Fields';

import './Field.css';

const FIELD_TO_COMPONENT = {
	TEXT: TextField,
	SELECT: SelectField,
	TABLE_DYNAMIC: DynamicTableField,
	TABLE_STATIC: StaticTableField,
	DIVIDER: Divider
};

function Field(props) {
	let { type, ...fieldProps } = props.field;

	let CurrentField = FIELD_TO_COMPONENT[type];

	if (!CurrentField) return null;

	return (
		<div className='field'>
			<CurrentField
				{...fieldProps}
				onChangeData={props.onChangeData}
				data={props.data}
			/>
		</div>
	);
}

export default Field;
