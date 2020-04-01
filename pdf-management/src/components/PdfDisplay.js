import React from 'react';

import {} from '@material-ui/core';
import {} from '@material-ui/icons';

import ReportContext from '../ReportContext';
import Header from './Header';

import { getReport } from '../api/ReportActions';

import './PdfDisplay.css';

class PdfDisplay extends React.Component {
	state = {
		report: null,
		loading: true
	};

	async componentDidMount() {
		console.log(this.props);
		let { reportID } = this.props.match.params;

		let report = await getReport(this.context.form.id, +reportID);

		this.setState({
			report,
			loading: false
		});
	}

	render() {
		if (this.state.loading) return null;
		return (
			<>
				<Header />
				{JSON.stringify(this.state.report)}
			</>
		);
	}
}

PdfDisplay.contextType = ReportContext;

export default PdfDisplay;
