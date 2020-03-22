// Dropdown-select data
const SELECT_TEST = ['בדיקה 1', 'בדיקה 2', 'בדיקה 3'];

// List of reports
const reports = [
	{
		id: 0,
		name: 'דו"ח חודשי 917',
		sections: [
			// Sections of single report
			{
				id: 'TEST1',
				title: 'מקטע 1',
				fields: [
					// Fields of section
					{
						id: 'TEST_FIELD1',
						name: 'בדיקה 1',
						type: 'text'
					},
					{
						id: 'TEST_FIELD2',
						name: 'בדיקה 2',
						type: 'select',
						values: SELECT_TEST
					},
					{
						id: 'TEST_TABLE',
						name: 'טבלה 1',
						type: 'table-dynamic',
						fields: ['test1', 'test2', 'test3']
					}
				]
			}
		]
	},
	{
		id: 1,
		name: 'דו"ח חודשי 918',
		sections: []
	}
];

export { reports };
