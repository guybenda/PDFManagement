import React from 'react';

import { TableRow, TableCell, TextField, Button } from '@material-ui/core';
import {
	DragHandle as DragHandleIcon,
	Delete as DeleteIcon
} from '@material-ui/icons';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

import './DraggableTableRow.css';

const DragHandle = SortableHandle(({ cellComponent }) => (
	<TableCell component={cellComponent}>
		<DragHandleIcon />
	</TableCell>
));

const SortableRow = SortableElement(
	({ value, onDelete, rowComponent, cellComponent }) => (
		<TableRow component={rowComponent}>
			{value}
			<DragHandle cellComponent={cellComponent} />
			<TableCell component={cellComponent}>
				<DeleteIcon onClick={onDelete} />
			</TableCell>
		</TableRow>
	)
);

class DraggableTableRow extends React.Component {
	handleChange = id => e => {
		this.props.onChangeData(this.props.index, id, e.target.value);
	};

	render() {
		return (
			<SortableRow
				index={this.props.index}
				onDelete={this.props.onDelete}
				rowComponent={this.props.rowComponent}
				cellComponent={this.props.cellComponent}
				value={this.props.columns.map(cell => (
					<TableCell
						key={cell.id}
						component={this.props.cellComponent}
					>
						<TextField
							value={this.props.data[cell.id]}
							onChange={this.handleChange(cell.id)}
							fullWidth
						/>
					</TableCell>
				))}
			/>
		);
	}
}

export default DraggableTableRow;
