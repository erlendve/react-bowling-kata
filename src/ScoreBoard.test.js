import React from 'react';
import ScoreBoard from './ScoreBoard';
import Frame from './Frame';
import {shallow} from 'enzyme';

it('should render ten Frame components', () => {
  var wrapper = shallow(<ScoreBoard/>)
  expect(wrapper.find(Frame).length).toEqual(10);
});