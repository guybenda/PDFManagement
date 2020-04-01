import React from 'react';

import './FormGrid.css';

function FormGrid(props) {
	return <div className='print-form'>{props.children}</div>;
}

export default FormGrid;
