import { FORMS, REPORTS, UNITS, saveForm } from "../mockData";

export const getFormFromMock = async (formId) => {
  const form = FORMS.find((form) => form.id === parseInt(formId));

  if (!form) return null;

  return form;
};


export const saveFormInMock = async (formToSave) => {
  return await saveForm(formToSave);
};


export const getUnits = () => {
  return UNITS;
};
