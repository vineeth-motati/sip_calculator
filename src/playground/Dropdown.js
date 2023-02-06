import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// const options = ['one', 'two', 'three'];
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' },
  {
    type: 'group',
    name: 'group1',
    items: [
      { value: 'three', label: 'Three', className: 'myOptionClassName' },
      { value: 'four', label: 'Four' },
    ],
  },
  {
    type: 'group',
    name: 'group2',
    items: [
      { value: 'five', label: 'Five' },
      { value: 'six', label: 'Six' },
    ],
  },
];
const defaultOption = options[0];
const temp = (
  <div>
    <Dropdown
      options={options}
      onChange={null}
      value={defaultOption}
      placeholder="Select an option"
    />
  </div>
);

ReactDOM.render(temp, document.getElementById('app'));
