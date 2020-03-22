import React from 'react';

import {
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import './Section.css';

function Section(props) {
	const renderSectionContent = section => {
		return <div></div>; // TODO: Generate fields based on type
	};

	return (
		<ExpansionPanel defaultExpanded key={props.section.id}>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<div className='section-title'>{props.section.title}</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				{renderSectionContent(props.section)}
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
}

export default Section;
