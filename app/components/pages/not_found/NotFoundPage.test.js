import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

function setup(props) {
  return shallow(<NotFoundPage {...props} />);
}

const component = '<NotFoundPage />';

test(`${component} renders`, () => {
  const wrapper = setup();
  expect(wrapper.find('h1')).toHaveLength(1);
});
