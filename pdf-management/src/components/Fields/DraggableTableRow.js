import React from 'react';

import { TableRow, TableCell, TextField, Button } from '@material-ui/core';
import {
	DragHandle as DragHandleIcon,
	Delete as DeleteIcon
} from '@material-ui/icons';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => (
	<TableCell>
		<DragHandleIcon />
	</TableCell>
));

const SortableRow = SortableElement(({ value }) => (
	<TableRow>
		{value}
		<DragHandle />
	</TableRow>
));

class DraggableTableRow extends React.Component {
	handleChange = id => e => {
		this.props.onChangeData(this.props.index, id, e.target.value);
	};

	render() {
		return (
			<SortableRow
				index={this.props.index}
				value={this.props.columns.map(cell => (
					<TableCell key={cell.id}>
						<TextField
							value={this.props.data[cell.id]}
							onChange={this.handleChange(cell.id)}
						/>
					</TableCell>
				))}
			/>
		);
	}
}

export default DraggableTableRow;
