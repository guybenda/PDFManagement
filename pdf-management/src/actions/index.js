import { SET_FORM, EDIT_FORM_SECTIONS, EDIT_FORM_PERIOD, SET_MODE, SAVE_FORM } from './constants';
import { FORMS } from '../mockData';

export const setForm = (id) => {

  // Call API - need to add redux thun - dispatch
  const form = FORMS.find(form => form.id === parseInt(id));
  return {
    type: SET_FORM,
    payload: form
  }
}

export const saveForm = (form) => {
  // Call API - need to add redux thun - dispatch
}

export const editSections = (sectionId, fieldId, value) => {
  return {
    type: EDIT_FORM_SECTIONS,
    payload: {sectionId, fieldId, value}
  }
}

export const editPeriod = (period) => {
  return {
    type: EDIT_FORM_PERIOD,
    payload: period
  }
}

export const setMode = (mode) => {
  return {
    type: SET_MODE,
    payload: mode
  }
}



