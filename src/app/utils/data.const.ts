export const MY_TEST_CONSTANT = [{
    name: 'Category 1',
    checked: false,
    value: 'cat_1',
    children: [
      {
        name: 'Sub Item 1',
        checked: true,
        value: 'sub_cat_1',
      },
      {
        name: 'Sub Item 2',
        checked: false,
        value: 'sub_cat_2',
      },
      {
        name: 'Sub Item 3',
        checked: false,
        value: 'sub_cat_3',
        children: [
          {
            name: 'Sub Sub item 1',
            checked: false,
            value: 'sub_sub_cat_1'
          },
          {
            name: 'Sub Sub item 2',
            checked: false,
            value: 'sub_sub_cat_2'
          },
          {
            name: 'Sub Sub item 3',
            checked: true,
            value: 'sub_sub_cat_3'
          }
        ]
      },
      {
        name: 'Sub Item 4',
        checked: false,
        value: 'sub_cat_4',
      },
      {
        name: 'Sub Item 5',
        checked: false,
        value: 'sub_cat_5',
      },
    ]
  },
  {
  name: 'Category 2',
    checked: false,
    value: 'cat_2',
    children: []
}
];