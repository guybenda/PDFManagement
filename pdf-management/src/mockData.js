// Dropdown-select data
const SELECT_TEST = [
  { id: 1, title: "ניסיון 1" },
  { id: 2, title: "ניסיון 2" },
  { id: 3, title: "ניסיון 3" }
];

export const UNITS = [
  {
    id: 1,
    name: "קבוצה א",
    forms: [
      { id: 0, name: 'דו"ח חודשי 917' },
      { id: 1, name: 'דו"ח חודשי 916' },
      { id: 2, name: 'דו"ח חודשי 915' }
    ]
  },
  { id: 2, name: "קבוצה ב", forms: [] },
  { id: 3, name: "קבוצה ג", forms: [] },
  { id: 4, name: "קבוצה ד", forms: [] },
  { id: 5, name: "קבוצה ה", forms: [] }
];

// List of reports
export const FORMS = [
  {
    id: 0,
    name: 'דו"ח חודשי 917',
    sections: [
      // Sections of single report
      {
        id: "TEST1",
        title: "מקטע 1",
        fields: [
          // Fields of section
          {
            id: "TEST_FIELD1",
            name: "בדיקה 1",
            type: "TEXT"
          },
          {
            id: "TEST_FIELD2",
            name: "בדיקה 2",
            type: "SELECT",
            values: SELECT_TEST
          },
          {
            id: "TEST_DIVIDER",
            type: "DIVIDER"
          },
          {
            id: "TEST_LABEL",
            name: "טקסט חופשי",
            type: "LABEL"
          },
          {
            id: "TEST_FIELD3",
            name: "בדיקה 3",
            type: "NUMBER"
          },
          {
            id: "TEST_TABLE",
            name: "טבלה 1",
            type: "TABLE_DYNAMIC",
            fields: [
              {
                id: "TEST_FIELD10",
                name: "בדיקה 1",
                weight: 3,
                type: "TEXT"
              },
              {
                id: "TEST_FIELD20",
                name: "בדיקה 2",
                weight: 1,
                type: "SELECT",
                values: SELECT_TEST
              },
              {
                id: "TEST_FIELD30",
                name: "בדיקה 3",
                weight: 1,
                type: "DATE"
              }
            ]
          }
        ]
      },
      {
        id: "TEST2",
        title: "מקטע 2",
        fields: [
          {
            id: "TEST_FIELD4",
            name: "בדיקה 1",
            type: "TEXT"
          }
        ]
      }
    ]
  },
  {
    id: 1,
    name: 'דו"ח חודשי 918',
    sections: []
  },
  {
    id: 2,
    name: "שם כלשהו",
    period: {
      start: "2020-07",
      end: "2020-08"
    },
    sections: [
      // Sections of single report
      {
        id: "TEST1",
        title: "מקטע 1",
        fields: [
          // Fields of section
          {
            id: "TEST_FIELD1",
            name: "tal",
            type: "TEXT",
            value: "הערך שלי"
          },
          {
            id: "TEST_FIELD2",
            name: "בדיקה 2 טקסט ארוך מאוד כדי לראות איך זה נראה",
            type: "SELECT",
            values: SELECT_TEST,
            value: 1
          },
          {
            id: "TEST_DIVIDER",
            type: "DIVIDER"
          },
          {
            id: "TEST_LABEL",
            name: "טקסט חופשי",
            type: "LABEL"
          },
          {
            id: "TEST_FIELD3",
            name: "בדיקה 3",
            type: "NUMBER",
            value: 3
          },
          {
            id: "TEST_DIVIDER2",
            type: "DIVIDER"
          },
          {
            id: "TEST_TABLE",
            name: "טבלה 1",
            type: "TABLE_DYNAMIC",
            fields: [
              {
                id: "TEST_FIELD1",
                name: "בדיקה 1",
                weight: 3,
                type: "TEXT_AREA"
              },
              {
                id: "TEST_FIELD2",
                name: "בדיקה 2",
                weight: 1,
                type: "SELECT",
                values: SELECT_TEST
              },
              {
                id: "TEST_FIELD3",
                name: "בדיקה 1",
                weight: 3,
                type: "NUMBER"
              },
              {
                id: "TEST_FIELD4",
                name: "בדיקה 1",
                weight: 3,
                type: "DATE"
              },
              {
                id: "TEST_FIELD5",
                name: "בדיקה 1",
                weight: 3,
                type: "TEXT_AREA"
              },

              {
                id: "TEST_FIELD6",
                name: "בדיקה 1",
                weight: 3,
                type: "TEXT_AREA"
              },
              {
                id: "TEST_FIELD7",
                name: "בדיקה 1",
                weight: 3,
                type: "TEXT_AREA"
              }
            ],
            value: [
              {
                index: 0,
                TEST_FIELD1: "dddd",
                TEST_FIELD2: 2,
                TEST_FIELD3: 4565,
                TEST_FIELD4: Date.now(),
                TEST_FIELD5: "dddd",
                TEST_FIELD6: "dddd",
                TEST_FIELD7: "dddd"
              },
              {
                index: 1,
                TEST_FIELD1: "dddd",
                TEST_FIELD2: 2,
                TEST_FIELD3: 5654,
                TEST_FIELD4: Date.now(),
                TEST_FIELD5: "dddd",
                TEST_FIELD6: "dddd",
                TEST_FIELD7: "dddd"
              }
            ]
          }
        ]
      },
      {
        id: "TEST2",
        title: "מקטע 2",
        fields: [
          {
            id: "TEST_FIELD4",
            name: "בדיקה 1",
            type: "TEXT"
          }
        ]
      }
    ]
  }
];

export const REPORTS = {
  0: [
    {
      id: 0,
      period: {
        start: "2020-03",
        end: "2020-08"
      },
      data: {
        TEST1: {
          TEST_FIELD1: "בדיקה קל קל קל",
          TEST_FIELD2: "בדיקה 2",
          TEST_FIELD3: 42,
          TEST_TABLE: [
            {
              TEST_FIELD10: "asf87ahf78dn",
              TEST_FIELD20: "בדיקה 3",
              TEST_FIELD30: new Date().toISOString()
            }
          ]
        },
        TEST2: {
          TEST_FIELD4: "AAAAAAAAAAAAAA"
        }
      }
    }
  ],
  1: []
};


// uniqe field id per section