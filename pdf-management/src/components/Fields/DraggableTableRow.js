import React from 'react';

import { TableRow, TableCell } from '@material-ui/core';
import {
	DragHandle as DragHandleIcon,
	Delete as DeleteIcon
} from '@material-ui/icons';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import './DraggableTableRow.css';
import {FIELDS_COMPONENTS} from '../../constants';

const DragHandle = SortableHandle(() => (
	<TableCell style={{width:"3rem"}}>
			<DragHandleIcon />
	</TableCell>
));

const SortableRow = SortableElement(({ value,index }) => (
	<TableRow key={index}>	
		<DragHandle />
		<TableCell style={{width:"3rem"}}>
				<DeleteIcon		
					// onClick={onDelete}
				/>
		</TableCell>
		{value}
	</TableRow>
));

class DraggableTableRow extends React.Component {
	handleChange = (value,fieldId) => {
		this.props.handleChangeRow(this.props.index,fieldId,value)
	};

	render() {

		let rowContent = Object.keys(this.props.columns).map(cellName =>{			
			if (cellName==="index") return ;
			let FieldComp = FIELDS_COMPONENTS[this.props.fields[cellName].type]
			return (
			<TableCell
				key={cellName}
			>
				<FieldComp isTable={true} noMargin mode={this.props.mode} value={this.props.columns[cellName]}
				 {...this.props.fields[cellName]} handleChange={this.handleChange}/>
			</TableCell>
		)});

		return (
			<SortableRow
				index={this.props.index}
				value={rowContent}
			/>
		);
	}
}

export default DraggableTableRow;
