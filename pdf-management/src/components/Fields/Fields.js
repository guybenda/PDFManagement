import DynamicTableField from './DynamicTableField';
import SelectField from './SelectField';
import StaticTableField from './StaticTableField';
import TextField from './TextField';
import Divider from './Divider';
import Label from './Label';

export {
	DynamicTableField,
	SelectField,
	StaticTableField,
	TextField,
	Divider,
	Label
};

export const FIELD_TO_COMPONENT = {
	TEXT: TextField,
	SELECT: SelectField,
	TABLE_DYNAMIC: DynamicTableField,
	TABLE_STATIC: StaticTableField,
	DIVIDER: Divider,
	LABEL: Label
};

export const FULL_WIDTH_FIELDS = [
	'TABLE_DYNAMIC',
	'TABLE_STATIC',
	'DIVIDER',
	'LABEL'
];
