import {
  SET_FORM,
  EDIT_FORM_SECTIONS,
  EDIT_FORM_PERIOD,
  SET_MODE,
  SAVE_FORM
} from "./actionTypes";
import { REPORT_MODE } from "../constants";
import { FORMS } from "../mockData";

export const getForm = (id) => {
  // Call API - need to add redux thun - dispatch
  const form = FORMS.find((form) => form.id === parseInt(id));
  return {
    type: SET_FORM,
    payload: form
  };
};

export const saveForm = (formToSave) => {
  console.log("save form");
  const form = FORMS.find((form) => form.id === parseInt(formToSave.id));
  return {
    type: SAVE_FORM,
    payload: form
  };
  // Call API - need to add redux thun - dispatch
};

export const editSection = (sectionId, fieldId, value) => {
  return {
    type: EDIT_FORM_SECTIONS,
    payload: { sectionId, fieldId, value }
  };
};

export const editPeriod = (period) => {
  return {
    type: EDIT_FORM_PERIOD,
    payload: period
  };
};

export const toggleEditMode = (currMode) => {
  const newMode =
    currMode === REPORT_MODE.view ? REPORT_MODE.edit : REPORT_MODE.view;
  return {
    type: SET_MODE,
    payload: newMode
  };
};
