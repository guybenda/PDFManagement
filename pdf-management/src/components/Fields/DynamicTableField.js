import React from 'react';

import { TableContainer, Table, TableBody, TableCell, TableRow, TableHead, Button } from '@material-ui/core';
import { SortableContainer } from 'react-sortable-hoc';

import DraggableTableRow from './DraggableTableRow';
import './DynamicTableField.css';
import {connect} from 'react-redux';
import {editSections} from '../../actions'
import Label from './Label';

const SortableTable = SortableContainer(({ children }) => {
	return <TableBody>{children}</TableBody>;
});
class DynamicTableField extends React.Component {
	convertFields = () => {
		return this.props.fields.reduce((result,field)=>{
			result[field.id] = field
			return result;
		},{});
	}
	handleChangeRow = (rowIndex,fieldId, value) =>{
		let newData = this.props.value.map((row)=>{
			if(row.index === rowIndex){
				row[fieldId] = value;
				return row
			}
			return row;
		});

		this.props.editSections(this.props.sectionId,this.props.id,newData)
	}
	renderBody = () =>{
		const fieldsConverted = this.convertFields();
		return this.props.value.map((item)=>{
			return (<DraggableTableRow handleChangeRow={this.handleChangeRow}
									   columns={item}
									   index={item.index}
									   fields={fieldsConverted}
									   mode={this.props.mode}/>)})
	}

	inSortEnd = ({oldIndex, newIndex}) =>{
		// TODO - ask about saving the table! !
		
		// let op = newIndex > oldIndex ? 1 : -1;
		// let newData = this.props.value.map((row)=>{
		// 	if(row.index === oldIndex){
		// 		row.index = newIndex;
		// 		return row;
		// 	} else if(row.index > newIndex){}
		// });

	}
	renderHeader = () => {
		return (
			<TableRow>
				<TableCell>גרירה</TableCell>
				<TableCell>מחיקה</TableCell>
				{this.props.fields.map((field) => (
					<TableCell key={field.id}>
						{field.name}
					</TableCell>
				))}
			</TableRow>)
	}

	onAddRow =  ()=>{        
		const newVal = this.props.value;
		newVal.push({});		  
		this.props.editSections(this.props.sectionId,this.props.id,newVal)
	}
	renderTable = () => {
		return (                
			<>
			<div className="table-header"> 
			<Label name={this.props.name}/>
			<Button onClick={this.onAddRow} className="button-add-row" variant="contained" color="primary">הוסף שורה</Button>
			</div>
			<TableContainer style={{overflowX:"auto",width:"100%"}}>
				<Table>
					<TableHead>
						{this.renderHeader()}
					</TableHead>	
						<SortableTable useDragHandle onSortEnd={this.onSortEnd}>
							{this.renderBody()}
						</SortableTable>		
				</Table>
			</TableContainer>
			</>

		)
	}

	render() {
		return this.renderTable()
	}
}

export default connect(null,{editSections})(DynamicTableField);
