import React from 'react';
import Frame from './Frame';
import {shallow} from 'enzyme';

it('should render span with class "spare" for 5 & 5', () => {
  const wrapper = shallow(<Frame rollOne={5} rollTwo={5} score={50}/>);
  expect(wrapper.containsMatchingElement(<span className="spare"/>)).toBeTruthy();
});

it('should not render span with class "spare" for 4 & 5', () => {
  const wrapper = shallow(<Frame rollOne={4} rollTwo={5} score={50}/>);
  expect(wrapper.containsMatchingElement(<span className="spare"/>)).toBeFalsy();
});


it('should render span with class "strike" for 10 & 0', () => {
  const wrapper = shallow(<Frame rollOne={10} rollTwo={0} score={50}/>);
  expect(wrapper.containsMatchingElement(<span className="strike"/>)).toBeTruthy();
});

it('should not render span with class "strike" for 4 & 5', () => {
  const wrapper = shallow(<Frame rollOne={4} rollTwo={5} score={50}/>);
  expect(wrapper.containsMatchingElement(<span className="strike"/>)).toBeFalsy();
});


it('should render "-" if roll is 0', () => {
  const wrapper = shallow(<Frame rollOne={0} rollTwo={0} score={50}/>);
  expect(wrapper.find('span').at(1).text()).toEqual("-");
});