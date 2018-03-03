import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './Main'; // Undecorated version.

function setup(props) {
  return shallow(<Main {...props} />);
}

const component = '<Main />';

test(`${component} renders`, () => {
  const wrapper = setup({
    actions: {}
  });
  expect(wrapper.find('Switch')).toHaveLength(1);
});
