import React from 'react';

import {} from '@material-ui/core';
import {} from '@material-ui/icons';
import {
	PDFViewer,
	Page,
	Text,
	View,
	Document,
	StyleSheet
} from '@react-pdf/renderer';

import Header from './Header';

import './PdfDisplay.css';

class PdfDisplay extends React.Component {
	render() {
		return (
			<>
				<Header />
				<PDFViewer>
					<Document>
						<Page size='A4'></Page>
					</Document>
				</PDFViewer>
			</>
		);
	}
}

export default PdfDisplay;
