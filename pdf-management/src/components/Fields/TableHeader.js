import React from 'react';

import { TableCell, TableRow, TableHead, Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

import './TableHeader.css';

function TableHeader(props) {
	let headerColumns = props.columns.map(column => (
		<TableCell key={column.id} component={props.cellComponent}>
			{column.name}
		</TableCell>
	));

	if (props.onAdd)
		headerColumns.push(
			<TableCell
				key='addButton'
				className='table-add-cell'
				component={props.cellComponent}
			>
				<Button
					onClick={props.onAdd}
					className='table-header-add-button'
				>
					<AddIcon />
				</Button>
			</TableCell>,
			<TableCell
				key='placeholder'
				className='table-add-cell'
				component={props.cellComponent}
			></TableCell>
		);

	return (
		<TableHead component={props.component}>
			<TableRow component={props.rowComponent}>{headerColumns}</TableRow>
		</TableHead>
	);
}

export default TableHeader;
