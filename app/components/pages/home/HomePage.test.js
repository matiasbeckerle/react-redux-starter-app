import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

function setup(props) {
  return shallow(<HomePage {...props} />);
}

const component = '<HomePage />';

test(`${component} renders itself`, () => {
  const wrapper = setup();

  expect(wrapper.find('section')).toHaveLength(1);

  const title = wrapper.find('h1');
  expect(title).toHaveLength(1);
  expect(title.text()).toBe('React+Redux starter app');

  const subtitle = wrapper.find('h2');
  expect(subtitle).toHaveLength(1);
  expect(subtitle.text()).toBe('Home');
});
