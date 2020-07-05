import React from 'react';

import { Divider as MuiDivider } from '@material-ui/core';
import {} from '@material-ui/icons';

function Divider(props) {
	if (props.print) return 'TODO';
	return <MuiDivider style={{marginTop:"1em", width:"100%"}}/>;
}

export default Divider;
