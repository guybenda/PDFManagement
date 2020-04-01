import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Menu as MenuIcon, Print as PrintIcon } from '@material-ui/icons';

import ReportContext from '../ReportContext';

import './Header.css';

class Header extends React.Component {
	render() {
		let buttons = [
			<Button key='print' color='inherit' onClick={this.props.onPrint}>
				<PrintIcon />
			</Button>
		];

		if (this.props.mode === 'edit') {
			buttons.unshift(
				<Button key='edit' color='inherit' onClick={this.props.onSave}>
					שמירה
				</Button>
			);
		}

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
								{buttons}
							</Toolbar>
						</AppBar>
					)}
				</ReportContext.Consumer>
			</div>
		);
	}
}

export default Header;
