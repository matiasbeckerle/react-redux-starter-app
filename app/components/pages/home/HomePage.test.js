import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

function setup(props) {
  return shallow(<HomePage {...props} />);
}

const component = '<HomePage />';

test(`${component} renders`, () => {
  const wrapper = setup();
  expect(wrapper.find('h1')).toHaveLength(1);
});
