import {
  SET_FORM,
  EDIT_FORM_SECTIONS,
  ADD_TABLE_ROW,
  EDIT_FORM_PERIOD,
  SET_MODE,
  SAVE_FORM
} from "../actions/actionTypes";
import { cloneDeep } from "lodash";
import { REPORT_MODE } from "../constants";

const INITIAL_STATE = {
  formInitialState: null,
  form: null,
  mode: REPORT_MODE.view
};

export const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        ...action.payload
      };
    case EDIT_FORM_PERIOD:
      return {
        ...state,
        form: { ...state.form, period: action.payload }
      };
    case EDIT_FORM_SECTIONS:
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
    case ADD_TABLE_ROW:
      return {
        ...state,
        form: {
          ...state.form,
          sections: state.form.sections.map((section) => {
            if (section.id === action.payload.sectionId) {
              section.fields = section.fields.map((field) => {
                if (field.id === action.payload.tableId) {
                  // append to array or create if table is empty
                  field.value ? field.value.push({}) : (field.value = [{}]);
                  console.log("reducer - field.value", field.value);
                }
                return field;
              });
            }
            return section;
          })
        }
      };
    case SET_MODE:
      console.log(state);
      // if switching to edit mode
      if (action.payload.mode === REPORT_MODE.edit) {
        console.log({
          ...state,
          ...action.payload,
          formInitialState: cloneDeep(state.form)
        });
        // save copy in case of cancel changes
        return {
          ...state,
          ...action.payload,
          formInitialState: cloneDeep(state.form)
        };
      } else if (action.payload.mode === REPORT_MODE.view) {
        console.log({
          ...state,
          ...action.payload,
          form: { ...state.formInitialState }
        }); // cancel changes
        return {
          ...state,
          ...action.payload,
          form: { ...state.formInitialState }
        };
      }

    case SAVE_FORM:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
