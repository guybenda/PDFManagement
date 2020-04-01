import React from 'react';

import './PrintPage.css';

export default function PrintPage(props) {
	return (
		<div className='print-page'>
			<div className='print-page-header'>{props.header}</div>
			<div className='print-page-content'>{props.children}</div>
			<div className='print-page-footer'>{props.footer}</div>
		</div>
	);
}
