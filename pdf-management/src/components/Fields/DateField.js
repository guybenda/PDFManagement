import React from 'react';

import moment from 'moment';

import { KeyboardDatePicker } from '@material-ui/pickers';

import { REPORT_MODE } from '../../constants';
import {editSection} from '../../actions';
import {connect} from 'react-redux';
class DateField extends React.Component {
	componentDidMount() {
		if (!this.props.value) {
			this.props.onChangeData(moment());
		}
	}

	handleChange = date => {
		// Check if the field is in table 
		if (this.props.handleChange){
			this.props.handleChange(date,this.props.id,this.props.sectionId);
		} else {
			this.props.editSection(this.props.sectionId,this.props.id,date);
		}
	};

	

	render() {
		// if (this.props.print)
		// 	return (
		// 		<>
		// 			{!this.props.noMargin && (
		// 				<div className='field-print-title'>
		// 					{this.props.name}:
		// 				</div>
		// 			)}
		// 			<div>{moment(this.props.data).format('l')}</div>
		// 		</>
		// 	);

		return (
			<KeyboardDatePicker
				disabled={this.props.mode === REPORT_MODE.view ? true : false}
				autoOk
				disableToolbar
				variant='inline'
				format='DD/MM/YYYY'
				size={this.props.noMargin ? 'small' : 'medium'}
				InputAdornmentProps={{ position: 'start' }}
				fullWidth
				label={this.props.noMargin ? '' : this.props.name}
				inputVariant={this.props.noMargin ? 'standard' : 'outlined'}
				value={this.props.value || moment()}
				onChange={this.handleChange}
			/>
		);
	}
}

export default connect(null,{editSection})(DateField);
