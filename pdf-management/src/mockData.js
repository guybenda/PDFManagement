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
						type: 'TEXT'
					},
					{
						id: 'TEST_FIELD2',
						name: 'בדיקה 2',
						type: 'SELECT',
						values: SELECT_TEST
					},
					/*{
						id: 'TEST_DIVIDER',
						type: 'DIVIDER'
					},*/
					{
						id: 'TEST_FIELD3',
						name: 'בדיקה 3',
						type: 'TEXT'
					},
					{
						id: 'TEST_TABLE',
						name: 'טבלה 1',
						type: 'TABLE_DYNAMIC',
						fields: [
							{
								id: 'TEST_FIELD10',
								name: 'בדיקה 1',
								type: 'TEXT'
							},
							{
								id: 'TEST_FIELD20',
								name: 'בדיקה 2',
								type: 'SELECT',
								values: SELECT_TEST
							},
							{
								id: 'TEST_FIELD30',
								name: 'בדיקה 3',
								type: 'TEXT'
							}
						]
					}
				]
			},
			{
				id: 'TEST2',
				title: 'מקטע 2',
				fields: [
					{
						id: 'TEST_FIELD4',
						name: 'בדיקה 1',
						type: 'TEXT'
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
