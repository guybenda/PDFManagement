import React from 'react';

import './Label.css';

export default function Label(props) {
	if (props.print) return 'TODO';

	return <div className='label'>{props.name}</div>;
}
