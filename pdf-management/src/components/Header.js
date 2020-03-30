import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import ReportContext from '../ReportContext';

import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<ReportContext.Consumer>
					{({ form }) => (
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
								<div className='header-title'>{form.name}</div>
								<Button
									color='inherit'
									onClick={this.props.onSave}
								>
									שמירה
								</Button>
							</Toolbar>
						</AppBar>
					)}
				</ReportContext.Consumer>
			</div>
		);
	}
}

export default Header;
