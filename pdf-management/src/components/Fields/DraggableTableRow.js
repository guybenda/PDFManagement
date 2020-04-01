import React from 'react';

import { TableRow, TableCell } from '@material-ui/core';
import {
	DragHandle as DragHandleIcon,
	Delete as DeleteIcon
} from '@material-ui/icons';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

import Field from '../Field';

import './DraggableTableRow.css';

const DragHandle = SortableHandle(() => (
	<TableCell className='table-cell-drag'>
		<div className='table-row-drag-handle'>
			<DragHandleIcon />
		</div>
	</TableCell>
));

const SortableRow = SortableElement(({ value, onDelete }) => (
	<TableRow>
		{value}
		<DragHandle />
		<TableCell className='table-cell-delete'>
			<div className='table-row-drag-handle'>
				<DeleteIcon
					className='table-row-delete-icon'
					onClick={onDelete}
				/>
			</div>
		</TableCell>
	</TableRow>
));

class DraggableTableRow extends React.Component {
	handleChange = id => value => {
		this.props.onChangeData(this.props.index, id, value);
	};

	render() {
		let totalWeight = this.props.columns.reduce(
			(sum, curr) => sum + +curr.weight,
			0
		);

		let rowContent = this.props.columns.map(cell => (
			<TableCell
				key={cell.id}
				style={{
					width: `${100 * (cell.weight / totalWeight)}%`
				}}
			>
				<Field
					field={cell}
					data={this.props.data[cell.id]}
					onChangeData={this.handleChange(cell.id)}
					noMargin
				/>
			</TableCell>
		));

		if (this.props.print) return <TableRow>{rowContent}</TableRow>;

		return (
			<SortableRow
				index={this.props.index}
				onDelete={this.props.onDelete}
				print={this.props.print}
				value={rowContent}
			/>
		);
	}
}

export default DraggableTableRow;
