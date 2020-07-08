import {
  SET_FORM,
  EDIT_FORM_SECTIONS,
  EDIT_FORM_PERIOD,
  SET_MODE,
  SAVE_FORM
} from "./actionTypes";
import { REPORT_MODE } from "../constants";
import { FORMS } from "../mockData";
import { getFormFromMock, saveFormInMock } from "../api/ReportActionsAPI";

export const getForm = (id) => async (dispatch) => {
  const form = await getFormFromMock(id);
  dispatch({
    type: SET_FORM,
    payload: form
  });
};

export const saveForm = (formToSave) => async (dispatch) => {
  console.log("save form");
  // handle if false
  if (saveFormInMock(formToSave))
    dispatch({
      type: SAVE_FORM,
      payload: { form: formToSave, mode: REPORT_MODE.view }
    });
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

export const toggleEditMode = (currMode, form) => {
  let newMode = REPORT_MODE.view;
  let editModeForm = null;
  if (currMode === REPORT_MODE.view) {
    newMode = REPORT_MODE.edit;
    editModeForm = form;
  }

  return {
    type: SET_MODE,
    payload: { mode: newMode, editModeForm }
  };
};
