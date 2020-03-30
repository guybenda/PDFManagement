// Dropdown-select data
const SELECT_TEST = ['בדיקה 1', 'בדיקה 2', 'בדיקה 3'];

// List of reports
export const FORMS = [
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
					{
						id: 'TEST_DIVIDER',
						type: 'DIVIDER'
					},
					{
						id: 'TEST_LABEL',
						name: 'טקסט חופשי',
						type: 'LABEL'
					},
					{
						id: 'TEST_FIELD3',
						name: 'בדיקה 3',
						type: 'NUMBER'
					},
					{
						id: 'TEST_TABLE',
						name: 'טבלה 1',
						type: 'TABLE_DYNAMIC',
						fields: [
							{
								id: 'TEST_FIELD10',
								name: 'בדיקה 1',
								weight: 3,
								type: 'TEXT'
							},
							{
								id: 'TEST_FIELD20',
								name: 'בדיקה 2',
								weight: 1,
								type: 'SELECT',
								values: SELECT_TEST
							},
							{
								id: 'TEST_FIELD30',
								name: 'בדיקה 3',
								weight: 1,
								type: 'DATE'
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

export const REPORTS = {
	0: [
		{
			id: 0,
			period: {
				start: '2020-03',
				end: '2020-03'
			},
			data: {
				TEST1: {
					TEST_FIELD1: 'בדיקה קל קל קל',
					TEST_FIELD2: 'בדיקה 2',
					TEST_FIELD3: 42,
					TEST_TABLE: [
						{
							TEST_FIELD10: 'asf87ahf78dn',
							TEST_FIELD20: 'בדיקה 3',
							TEST_FIELD30: new Date().toISOString()
						}
					]
				},
				TEST2: {
					TEST_FIELD4: 'AAAAAAAAAAAAAA'
				}
			}
		}
	],
	1: []
};
