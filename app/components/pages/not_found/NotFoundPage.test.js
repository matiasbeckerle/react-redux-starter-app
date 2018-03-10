import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

function setup(props) {
  return shallow(<NotFoundPage {...props} />);
}

const component = '<NotFoundPage />';

test(`${component} renders itself`, () => {
  const wrapper = setup();

  expect(wrapper.find('section')).toHaveLength(1);

  const title = wrapper.find('h1');
  expect(title).toHaveLength(1);
  expect(title.text()).toBe('React+Redux starter app');

  const subtitle = wrapper.find('h2');
  expect(subtitle).toHaveLength(1);
  expect(subtitle.text()).toBe('Page not found');

  const goBackHome = wrapper.find('Link');
  expect(goBackHome).toHaveLength(1);
  expect(goBackHome.props().to).toBe('/');
});
