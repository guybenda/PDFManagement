import DynamicTableField from './DynamicTableField';
import SelectField from './SelectField';
import StaticTableField from './StaticTableField';
import TextField from './TextField';
import Divider from './Divider';
import Label from './Label';
import NumberField from './NumberField';
import DateField from './DateField';

export {
	DynamicTableField,
	SelectField,
	StaticTableField,
	TextField,
	Divider,
	Label,
	NumberField,
	DateField
};

export const FIELD_TO_COMPONENT = {
	TEXT: TextField,
	SELECT: SelectField,
	TABLE_DYNAMIC: DynamicTableField,
	TABLE_STATIC: StaticTableField,
	DIVIDER: Divider,
	LABEL: Label,
	NUMBER: NumberField,
	DATE: DateField
};

export const FULL_WIDTH_FIELDS = [
	'TABLE_DYNAMIC',
	'TABLE_STATIC',
	'DIVIDER',
	'LABEL'
];

export const DATA_FIELDS = [
	'TEXT',
	'SELECT',
	'TABLE_DYNAMIC',
	'TABLE_STATIC',
	'NUMBER',
	'DATE'
];
