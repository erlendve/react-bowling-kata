import React from 'react';
import App from './App';
import {shallow, mount} from 'enzyme';
import ScoreBoard from './ScoreBoard';
import RollButtons from './RollButtons';

function setup() {
  return shallow(<App />);
}

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders a ScoreBoard component', () => {
  const wrapper = setup();
  expect(wrapper.find(ScoreBoard)).toBeDefined();
});

it('renders a RollButtons component', () => {
  const wrapper = setup();
  expect(wrapper.find(RollButtons)).toBeDefined();
});