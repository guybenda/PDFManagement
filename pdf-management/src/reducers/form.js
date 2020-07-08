import {
  SET_FORM,
  EDIT_FORM_SECTIONS,
  EDIT_FORM_PERIOD,
  SET_MODE,
  SAVE_FORM
} from "../actions/actionTypes";

import { REPORT_MODE } from "../constants";

const INITIAL_STATE = {
  editModeForm: null,
  form: null,
  mode: REPORT_MODE.view
};

export const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        form: action.payload
      };
    case EDIT_FORM_PERIOD:
      return {
        ...state,
        form: { ...state.form, period: action.payload }
      };
    case EDIT_FORM_SECTIONS:
      // move logic to actions
      return {
        ...state,
        form: {
          ...state.form,
          sections: state.form.sections.map((section) => {
            if (section.id === action.payload.sectionId) {
              section.fields = section.fields.map((field) => {
                if (field.id === action.payload.fieldId) {
                  field.value = action.payload.value;
                }
                return field;
              });
            }
            return section;
          })
        }
      };
    case SET_MODE:
      return {
        ...state,
        ...action.payload
      };

    case SAVE_FORM:
      return {
        ...state,
        mode: REPORT_MODE.view
      };
    default:
      return state;
  }
};
