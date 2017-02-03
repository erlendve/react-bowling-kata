import React from 'react';
import ScoreBoard from './ScoreBoard';
import Frame from './Frame';
import {shallow} from 'enzyme';

function setup() {
  var wrapper = shallow(<ScoreBoard />);
  return wrapper;
}

it('should render ten Frame components', () => {
  var wrapper = shallow(<ScoreBoard/>)
  expect(wrapper.find(Frame).length).toEqual(10);
});