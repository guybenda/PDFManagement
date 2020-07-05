import React from 'react';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import {} from '@material-ui/icons';
import {REPORT_MODE} from '../../constants';
import './SelectField.css';
import {editSections} from '../../actions';
import {connect} from 'react-redux';

class SelectField extends React.Component {

	handleChange = (e,newVal) => {
		// Check if the field is in table 
		if (this.props.handleChange){
			this.props.handleChange(newVal,this.props.id,this.props.sectionId);
		} else {
			this.props.editSections(this.props.sectionId,this.props.id,newVal);
		}
	};

	getOptionById(value){
		const id = value.id || value
		return this.props.values.filter(option=>option.id===id)[0]
	}

	render() {
		const value = this.getOptionById(this.props.value);
		if (this.props.print)
			return (
				<>
					{!this.props.noMargin && (
						<div className='field-print-title'>
							{this.props.name}:
						</div>
					)}
					<div>{this.props.data}</div>
				</>
			);
		return (
			<Autocomplete
				options={this.props.values}
				onChange={this.handleChange}
				getOptionLabel={option => option.title}
				value={value}		
				size={this.props.isTable ? 'small' : 'medium'}
				style={{width: "8rem"}}
				disabled={this.props.mode === REPORT_MODE.view ? true : false}
				renderInput={params => (
					<TextField
						{...params}
						label={this.props.noMargin ? '' : this.props.name}
						variant={this.props.noMargin ? 'standard' : 'outlined'}
					/>
				)}
			/>
		);
	}
}

export default connect(null,{editSections})(SelectField);
