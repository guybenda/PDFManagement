import React from 'react';

import {} from '@material-ui/core';
import {} from '@material-ui/icons';

import FIELDS from './Fields/Fields';

import './Field.css';

class Field extends React.Component {
	shouldComponentUpdate = nextProps => {
		let c = this.temp(nextProps);
		if (c) console.log(`${this.props.field.type}: ${nextProps.data}`);
		return c;
	};

	temp = nextProps => {
		const { data } = nextProps;

		if (!Array.isArray(data) || !Array.isArray(this.props.data)) {
			return data !== this.props.data;
		}

		for (const key in data) {
			if (data[key] !== this.props.data[key]) return true;
		}

		return false;
	};

	dummy() {}

	render() {
		let { type, ...fieldProps } = this.props.field;

		let CurrentField = FIELDS[type].COMP;

		if (!CurrentField) return null;

		let classes = FIELDS[type].FULL_WIDTH ? 'field full-width' : 'field';

		return (
			<div
				className={
					this.props.noMargin || this.props.print ? '' : classes
				}
				style={this.props.style}
			>
				<CurrentField
					{...fieldProps}
					onChangeData={this.props.onChangeData || this.dummy}
					data={this.props.data}
					noMargin={this.props.noMargin}
					print={this.props.print}
				/>
			</div>
		);
	}
}

export default Field;
