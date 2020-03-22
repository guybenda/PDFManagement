import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import ReportContext from '../ReportContext.js';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<AppBar position='static'>
					<Toolbar className='header-toolbar'>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={() => console.log(1)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h5' className='header-title'>
							{this.context.name}
						</Typography>
						<Button color='inherit'>לחצן?</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Header.contextType = ReportContext;

export default Header;
