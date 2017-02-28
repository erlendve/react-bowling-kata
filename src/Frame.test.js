import React from 'react';
import {shallow} from 'enzyme';
import Frame from './frame';

it('renders a score from props', () => {
  const wrapper = shallow(<Frame score={3} rollTwo={1} rollOne={1}></Frame>)
  expect(wrapper.find('p').text()).toEqual("3");
});

it('renders a score from props', () => {
  const wrapper = shallow(<Frame rollOne={6} rollTwo={2}></Frame>)
  expect(wrapper.find('span').first().text()).toEqual("6");
});