import React from 'react';

import {
	TableContainer,
	Table,
	TableBody,
	Paper,
	TextField,
	Button
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { SortableContainer } from 'react-sortable-hoc';

import DraggableTableRow from './DraggableTableRow';
import Tableheader from './TableHeader';

import './DynamicTableField.css';

const arrayMove = (arr, fromIndex, toIndex) => {
	let newArray = [...arr];
	let element = arr[fromIndex];
	newArray.splice(fromIndex, 1);
	newArray.splice(toIndex, 0, element);

	return newArray;
};

const SortableTable = SortableContainer(({ children }) => {
	return <TableBody>{children}</TableBody>;
});

class DynamicTableField extends React.Component {
	componentDidMount() {
		if (!this.props.data) {
			this.props.onChangeData([]);
		}
	}

	createRow() {
		return this.props.fields.reduce(
			(allFields, field) =>
				(allFields = { ...allFields, [field.id]: '' }),
			{ key: new Date().valueOf() }
		);
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		let newRows = arrayMove(this.props.data, oldIndex, newIndex);
		this.props.onChangeData(newRows);
	};

	handleChange = (index, id, value) => {
		let newRows = [...this.props.data];
		newRows[index] = { ...newRows[index] };

		newRows[index][id] = value;

		this.props.onChangeData(newRows);
	};

	onAddRow = e => {
		this.props.onChangeData([...this.props.data, this.createRow()]);
	};

	render() {
		return (
			<TableContainer component={Paper}>
				<Table aria-label='simple table'>
					<Tableheader
						columns={this.props.fields}
						onAdd={this.onAddRow}
					/>
					<SortableTable onSortEnd={this.onSortEnd} useDragHandle>
						{this.props.data &&
							this.props.data.map((row, index) => (
								<DraggableTableRow
									key={`item-${row.key}`}
									index={index}
									columns={this.props.fields}
									data={this.props.data[index]}
									onChangeData={this.handleChange}
								/>
							))}
					</SortableTable>
				</Table>
			</TableContainer>
		);
	}
}

export default DynamicTableField;
