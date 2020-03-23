import React from 'react';

import { TableCell, TableRow, TableHead, Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

function TableHeader(props) {
	let headerColumns = props.columns.map(column => (
		<TableCell key={column.id}>{column.name}</TableCell>
	));

	if (props.onAdd)
		headerColumns.push(
			<TableCell key='addButton'>
				<Button onClick={props.onAdd}>
					<AddIcon />
				</Button>
			</TableCell>
		);

	return (
		<TableHead>
			<TableRow>{headerColumns}</TableRow>
		</TableHead>
	);
}

export default TableHeader;
