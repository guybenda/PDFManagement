import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ReportContext from '../ReportContext';
import ReportForm from './ReportForm';
import PdfDisplay from './PdfDisplay';
import { getForm } from '../api/ReportActions';

class Report extends React.Component {
	state = {
		form: null,
		report: null
	};

	async componentDidMount() {
		let { formID } = this.props.match.params;

		let form = await getForm(+formID);

		this.setState({
			form
		});
	}

	render() {
		let { path } = this.props.match;

		if (!this.state.form) return null;

		return (
			<ReportContext.Provider value={this.state}>
				<Switch>
					<Route path={`${path}/edit`}>
						<ReportForm />
					</Route>
					<Route path={`${path}/view`}>
						<PdfDisplay />
					</Route>
				</Switch>
			</ReportContext.Provider>
		);
	}
}

export default Report;
