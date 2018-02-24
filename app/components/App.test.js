import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

function setup(props) {
  return shallow(<App {...props} />);
}

test('<App /> renders', () => {
  const wrapper = setup();
  expect(wrapper.find('h1')).toHaveLength(1);
});
