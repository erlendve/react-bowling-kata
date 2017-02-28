import React from 'react';
import ScoreBoard from './ScoreBoard';
import Frame from './Frame';
import {shallow, mount} from 'enzyme';

it('should render ten Frame components', () => {
  const wrapper = shallow(<ScoreBoard rolls={[3, 5]}/>);
  expect(wrapper.find(Frame).length).toEqual(10);
});

it('should display score for roll 3 and 5 and display in first frame', () => {
  const wrapper = mount(<ScoreBoard rolls={[3, 5]}/>);
  // console.log(wrapper.debug());
  expect(wrapper.find(Frame).first().find('p').text()).toEqual("8");
});

it('should display score for roll 4 and 5 in second frame', () => {
  const wrapper = mount(<ScoreBoard rolls={[3, 5, 4, 5]}/>);
  // console.log(wrapper.debug());
  expect(wrapper.find(Frame).at(1).find('p').text()).toEqual("17");
});

it('should not display NaN', () => {
  const wrapper = mount(<ScoreBoard rolls={[3, 5, 4, 5]}/>);
  // console.log(wrapper.debug());
  expect(wrapper.find(Frame).at(3).find('p').text()).not.toEqual("NaN");
});

it('should display score for roll 3 and 1 in fourth frame', () => {
  const wrapper = mount(<ScoreBoard rolls={[3, 5, 4, 5, 8, 0, 3, 1]}/>);
  expect(wrapper.find(Frame).at(3).find('p').text()).toEqual("29");
});

it('should display frames for roll 3 first frame', () => {
  const wrapper = mount(<ScoreBoard rolls={[3, 1]}/>);
  expect(wrapper.find(Frame).at(0).find('span').at(0).text()).toEqual("3");
});

it('should display frames for roll 1 as second roll in first frame', () => {
  const wrapper = shallow(<ScoreBoard rolls={[3, 1]}/>);
  expect(wrapper.find(Frame).at(0).props().rollTwo).toEqual(1);
});

it('should display frames for roll 2 as second roll in first frame', () => {
  const wrapper = shallow(<ScoreBoard rolls={[3, 2]}/>);
  expect(wrapper.find(Frame).at(0).props().rollTwo).toEqual(2);
});

it('should display correct frames for rolls [3,3,4,5] in four first frames', () => {
  const wrapper = mount(<ScoreBoard rolls={[3,3,4,5]}/>);
  expect(wrapper.find(Frame).at(0).find('span').at(0).text()).toEqual("3");
  expect(wrapper.find(Frame).at(0).find('span').at(1).text()).toEqual("3");
  expect(wrapper.find(Frame).at(1).find('span').at(0).text()).toEqual("4");
  expect(wrapper.find(Frame).at(1).find('span').at(1).text()).toEqual("5");
});

it('should display score for frame 2 for roles [3,3,4,5]', () => {
  const wrapper = mount(<ScoreBoard rolls={[3,3,4,5]}/>);
  expect(wrapper.find(Frame).at(1).find('p').text()).toEqual("15");
});

it('should not display game score = 133', () => {
  const wrapper = shallow(<ScoreBoard rolls={[]}/>);
  expect(wrapper.find('h1').text()).not.toEqual("Game Score = 133");
});

it('should not display score for third frame for roles [3,3,4,5]', () => {
  const wrapper = mount(<ScoreBoard rolls={[3,3,4,5]}/>);
  expect(wrapper.find(Frame).at(2).find('p').text()).toEqual("");
});