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

it('renders a <ScoreBoard/> component', () => {
  const wrapper = setup();
  expect(wrapper.find(ScoreBoard)).toBeDefined();
});

it('renders a <RollButtons/> component', () => {
  const wrapper = setup();
  expect(wrapper.find(RollButtons)).toBeDefined();
});

it('should add "0" roll to rolls state when button "1" is clicked', () => {
  const wrapper = mount(<App/>);
  wrapper.find('button').first().simulate('click');

  expect(wrapper.state().rolls).toEqual([0]);
});

it('should add a roll "4" to rolls state when button "4" is clicked', () => {
  const wrapper = mount(<App/>);
  wrapper.find('button').at(4).simulate('click');

  expect(wrapper.state().rolls).toEqual([4]);
});

it('should disable Roll buttons 5-10 after rolling down 6 pins', () => {
  const wrapper = mount(<App/>);
  wrapper.find('button').at(6).simulate('click');
  const disabledButtons = wrapper.find('button').map(n => n.prop('disabled'));

  expect(disabledButtons).toEqual([false, false, false, false, false, true, true, true, true, true, true]);
});

it('should have no disabled buttons after second roll', () => {
  const wrapper = mount(<App/>);
  wrapper.find('button').at(6).simulate('click');
  wrapper.find('button').at(2).simulate('click');
  expect(wrapper.find('button').everyWhere(n => !n.prop('disabled'))).toEqual(true);
});

it('should have no disabled buttons after first roll is strike', () => {
  const wrapper = mount(<App/>);
  wrapper.find('button').at(10).simulate('click');
  expect(wrapper.find('button').everyWhere(n => !n.prop('disabled'))).toEqual(true);
});