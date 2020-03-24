import React from 'react';

import {} from '@material-ui/core';
import {} from '@material-ui/icons';

import { FIELD_TO_COMPONENT, FULL_WIDTH_FIELDS } from './Fields/Fields';

import './Field.css';

function Field(props) {
	let { type, ...fieldProps } = props.field;

	let CurrentField = FIELD_TO_COMPONENT[type];

	if (!CurrentField) return null;

	let classes = FULL_WIDTH_FIELDS.includes(type)
		? 'field full-width'
		: 'field';

	return (
		<div className={props.noMargin ? '' : classes}>
			<CurrentField
				{...fieldProps}
				onChangeData={props.onChangeData}
				data={props.data}
				noMargin={props.noMargin}
			/>
		</div>
	);
}

export default Field;
