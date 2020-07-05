import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';
import {REPORT_MODE} from '../../constants';
import './TextField.css';
import {editSections} from '../../actions';
import {connect} from 'react-redux'

class NumberField extends React.Component {

	handleChange = e => {
		// Check if the field is in table 
		if (this.props.handleChange){
			this.props.handleChange(e.target.value,this.props.id,this.props.sectionId);
		} else {
			this.props.editSections(this.props.sectionId,this.props.id,e.target.value);
		}
	};

	render() {
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
			<MuiTextField
				type='number'
				//fullWidth
				size={this.props.isTable ? 'small' : 'medium'}
				disabled={this.props.mode === REPORT_MODE.view ? true : false}
				// style={{margin:"1em 0 0 1em"}}
				label={this.props.noMargin ? '' : this.props.name}
				variant={this.props.noMargin ? 'standard' : 'outlined'}
				value={this.props.value || ''}
				onChange={this.handleChange}
			/>
		);
	}
}

export default connect(null,{editSections})(NumberField);

