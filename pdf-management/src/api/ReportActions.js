import { FORMS, REPORTS } from '../mockData';

export const getForm = async formID => {
	let form = FORMS.find(form => form.id === formID);

	if (!form) return null;

	return form;
};

export const getReports = async formID => {
	if (!(await getForm(formID))) return null;

	return REPORTS[formID];
};

export const getReport = async (formID, reportID) => {
	if (!(await getForm(formID))) return null;

	let report = REPORTS[formID].find(report => (report.id = reportID));

	if (!report) return null;

	return report;
};

export const saveReport = async (formID, report) => {
	console.log(report);

	return true;
};
