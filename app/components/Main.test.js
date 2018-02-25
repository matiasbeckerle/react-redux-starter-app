import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

function setup(props) {
  return shallow(<Main {...props} />);
}

test('<Main /> renders', () => {
  const wrapper = setup();
  expect(wrapper.find('h1')).toHaveLength(1);
});
