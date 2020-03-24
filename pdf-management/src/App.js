import React from 'react';

import ReportContext from './ReportContext';
import Header from './components/Header';
import ReportForm from './components/ReportForm';

import { reports } from './mockData.js';
import moment from 'moment';
import 'moment/locale/he';

moment.locale('he');

function App() {
	return (
		<ReportContext.Provider value={reports[0]}>
			<Header />
			<ReportForm />
		</ReportContext.Provider>
	);
}

export default App;
