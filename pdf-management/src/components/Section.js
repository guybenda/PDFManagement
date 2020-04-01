import React from 'react';

import {
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import Field from './Field';
import { FULL_WIDTH_FIELDS } from './Fields/Fields';

import './Section.css';

function Section(props) {
	let index = 0;
	const fieldGroups = props.section.fields.reduce((groups, field) => {
		let fieldComponent = (
			<Field
				key={field.id}
				field={field}
				data={props.data[field.id]}
				onChangeData={props.onChangeData(props.section.id, field.id)}
			/>
		);

		if (!FULL_WIDTH_FIELDS.includes(field.type)) {
			if (!groups[index]) groups[index] = [];
			groups[index].push(fieldComponent);
		} else {
			groups[index + 1] = [fieldComponent];
			index += 2;
		}

		return groups;
	}, []);

	return (
		<ExpansionPanel
			className='section'
			defaultExpanded
			key={props.section.id}
		>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<div className='section-title'>{props.section.title}</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<div className='section-contents'>
					{fieldGroups.map((group, index) => (
						<div className='section-group' key={index}>
							{group}
						</div>
					))}
				</div>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
}

export default Section;
