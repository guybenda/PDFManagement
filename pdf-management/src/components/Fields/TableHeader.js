import React from 'react';

import { TableCell, TableRow, TableHead, Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

import './TableHeader.css';

function TableHeader(props) {
	let totalWeight = props.columns.reduce(
		(sum, curr) => sum + +curr.weight,
		0
	);

	let headerColumns = props.columns.map(column => (
		<TableCell
			key={column.id}
			style={{ width: `${100 * (column.weight / totalWeight)}%` }}
		>
			{column.name}
		</TableCell>
	));

	if (props.onAdd)
		headerColumns.push(
			<TableCell key='addButton' className='table-add-cell'>
				<Button
					onClick={props.onAdd}
					className='table-header-add-button'
				>
					<AddIcon />
				</Button>
			</TableCell>,
			<TableCell key='placeholder' className='table-add-cell'></TableCell>
		);

	return (
		<TableHead>
			<TableRow>{headerColumns}</TableRow>
		</TableHead>
	);
}

export default TableHeader;
