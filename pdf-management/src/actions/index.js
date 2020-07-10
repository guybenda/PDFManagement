import {
  SET_FORM,
  EDIT_FORM_SECTIONS,
  EDIT_FORM_PERIOD,
  SET_MODE,
  SAVE_FORM,
  ADD_TABLE_ROW
} from "./actionTypes";
import { REPORT_MODE } from "../constants";
import { FORMS } from "../mockData";
import { getFormFromMock, saveFormInMock } from "../api/ReportActionsAPI";

export const getForm = (id) => async (dispatch) => {
  const form = await getFormFromMock(id);
  dispatch({
    type: SET_FORM,
    payload: { form }
  });
};

export const saveForm = (formToSave) => async (dispatch) => {
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

export const addTableRow = (sectionId, tableId) => {
  return {
    type: ADD_TABLE_ROW,
    payload: { sectionId, tableId }
  };
};

// period = {'start' : ""}
export const editPeriod = (period) => {
  return {
    type: EDIT_FORM_PERIOD,
    payload: period
  };
};

export const setMode = (mode) => {
  return {
    type: SET_MODE,
    payload: { mode }
  };
};
