import React from 'react';
import {shallow} from 'enzyme';
import Roll from './Roll';
import RollBoard from './RollButtons';

it('renders eleven <Roll /> components', () => {
  const wrapper = shallow(<RollBoard onClick={() => {}}/>);
  expect(wrapper.find(Roll).length).toEqual(11);
});

it('renders 6 deactivated Roll components when 6 pins are down', () => {
  const wrapper = shallow(<RollBoard onClick={() => {}} pinsDown= {6}/>);
  expect(wrapper.find({deActivated: true}).length).toEqual(6);
});

it('renders 2 deactivated Roll components when 2 pins are down', () => {
  const wrapper = shallow(<RollBoard onClick={() => {}} pinsDown= {2}/>);
  expect(wrapper.find({deActivated: true}).length).toEqual(2);
});
