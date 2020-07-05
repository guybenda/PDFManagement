import React from 'react';
import { TextareaAutosize } from '@material-ui/core';
import {REPORT_MODE} from '../../constants';
import './TextField.css';
import {editSections} from '../../actions';
import {connect} from 'react-redux';

class TextAreaField extends React.Component {
	handleChange = e => {
		// Check if the field is in table 
		if (this.props.handleChange){
			this.props.handleChange(e.target.value, this.props.id,this.props.sectionId);
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
			<TextareaAutosize
				style={{width:"8rem"}}
				disabled={this.props.mode === REPORT_MODE.view ? true : false}
				label={this.props.noMargin ? '' : this.props.name}
				variant={this.props.noMargin ? 'standard' : 'outlined'}
				value={this.props.value || ''}
				onChange={this.handleChange}
			/>
		);
	}
}

export default connect(null,{editSections})(TextAreaField);

