import { FORMS, REPORTS, UNITS, saveForm } from "../mockData";

export const getFormFromMock = async (formId) => {
  const form = FORMS.find((form) => form.id === parseInt(formId));

  if (!form) return null;

  return form;
};

// export const getReports = async formID => {
// 	if (!(await getForm(formID))) return null;

// 	return REPORTS[formID];
// };

// export const getReport = async (formID, reportID) => {
// 	if (!(await getForm(formID))) return null;

// 	let report = REPORTS[formID].find(report => (report.id = reportID));

// 	if (!report) return null;

// 	return report;
// };

export const saveFormInMock = async (formToSave) => {
  return await saveForm(formToSave);
};

// export const saveDraft = async (formId, report) => {
// 	console.log(report);
// 	return true;
// };

export const getUnits = () => {
  return UNITS;
};
