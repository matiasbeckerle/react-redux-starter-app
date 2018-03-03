import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage'; // Undecorated version.

function setup(props) {
  return shallow(<LoginPage {...props} />);
}

const component = '<LoginPage />';

test(`${component} renders`, () => {
  const wrapper = setup({
    actions: {}
  });
  expect(wrapper.find('section')).toHaveLength(1);
});
