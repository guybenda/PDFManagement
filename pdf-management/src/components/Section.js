import React from 'react';

import {
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import Field from './Field';

import './Section.css';

function Section(props) {
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
					{props.section.fields.map(field => (
						<Field
							key={field.id}
							field={field}
							data={props.data[field.id]}
							onChangeData={props.onChangeData(
								props.section.id,
								field.id
							)}
						/>
					))}
				</div>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
}

export default Section;
