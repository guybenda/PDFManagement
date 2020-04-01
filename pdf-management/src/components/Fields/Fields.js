import DynamicTableField from './DynamicTableField';
import SelectField from './SelectField';
import StaticTableField from './StaticTableField';
import TextField from './TextField';
import Divider from './Divider';
import Label from './Label';
import NumberField from './NumberField';
import DateField from './DateField';

/*export {
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
];*/

export default {
	TEXT: {
		COMP: TextField,
		FULL_WIDTH: false,
		HAS_DATA: true,
		PRINT_HEIGHT: 2
	},
	SELECT: {
		COMP: SelectField,
		FULL_WIDTH: false,
		HAS_DATA: true,
		PRINT_HEIGHT: 2
	},
	TABLE_DYNAMIC: {
		COMP: DynamicTableField,
		FULL_WIDTH: true,
		HAS_DATA: true,
		PRINT_HEIGHT: null
	},
	TABLE_STATIC: {
		COMP: StaticTableField,
		FULL_WIDTH: true,
		HAS_DATA: true,
		PRINT_HEIGHT: null
	},
	DIVIDER: {
		COMP: Divider,
		FULL_WIDTH: true,
		HAS_DATA: false,
		PRINT_HEIGHT: 2
	},
	LABEL: {
		COMP: Label,
		FULL_WIDTH: true,
		HAS_DATA: false,
		PRINT_HEIGHT: 2
	},
	NUMBER: {
		COMP: NumberField,
		FULL_WIDTH: false,
		HAS_DATA: true,
		PRINT_HEIGHT: 2
	},
	DATE: {
		COMP: DateField,
		FULL_WIDTH: false,
		HAS_DATA: true,
		PRINT_HEIGHT: 2
	}
};
