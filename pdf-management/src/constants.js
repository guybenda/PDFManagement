import DateField from "./components/Fields/DateField";
import Divider from "./components/Fields/Divider";
import TextField from "./components/Fields/TextField";
import Label from "./components/Fields/Label";
import NumberField from "./components/Fields/NumberField";
import DynamicTableField from "./components/Fields/DynamicTableField";
import SelectField from "./components/Fields/SelectField";
import TextAreaField from "./components/Fields/TextAreaField";

export const REPORT_MODE = { edit: "edit", view: "view" }; //, print: "print"
export const FIELDS_COMPONENTS = {
  DATE: DateField,
  DIVIDER: Divider,
  TEXT: TextField,
  LABEL: Label,
  NUMBER: NumberField,
  TABLE_DYNAMIC: DynamicTableField,
  SELECT: SelectField,
  TEXT_AREA: TextAreaField
};
