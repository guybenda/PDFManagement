import { FORMS, REPORTS,UNITS } from '../mockData';

export const getForm = async formId => {
	console.log(FORMS)
	let form = FORMS.find(form => form.id === parseInt(formId));

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
	//TODO i guess?
	console.log(report);
	return true;
};

export const saveDraft = async (formId, report) => {
	console.log(report);
	return true;
};

export const getUnits = () =>{
	  return UNITS    
}
