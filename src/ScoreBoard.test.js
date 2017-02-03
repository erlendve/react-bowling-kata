import React from 'react';
import ScoreBoard from './ScoreBoard';
import Frame from './Frame';
import {shallow} from 'enzyme';

function setup(rolls) {
  var wrapper = shallow(<ScoreBoard rolls={rolls} />);
  return wrapper;
}

it('should render ten Frame components', () => {
  var wrapper = setup([]);
  expect(wrapper.find(Frame).length).toEqual(10);
});

it('should send a roll to the first frame', () => {
  var wrapper = setup([1]);
  expect(wrapper.find(Frame).first().props().rollOne).toEqual(1);
});

it('should not render "Game Score = NaN" when rolls array is incomplete' , () => {
  var wrapper = setup([1]);
  expect(wrapper.find('h1').text()).not.toEqual('Game Score = NaN');
});

function rollMany(n, pins) {
  let rolls = [];
  for(let i=0; i< n; i++)
    rolls.push(pins);

  return rolls;
}

describe('knows the scores to display for',  () => {
  it('a game of gutter balls', () => {
    var wrapper = setup(rollMany(20, 0));
    expect(wrapper.find('h1').text()).toEqual('Game Score = 0');
  });

  it('a game of all ones', () => {
    var wrapper = setup(rollMany(20, 1));
    expect(wrapper.find('h1').text()).toEqual('Game Score = 20');
  });

  it('a game with a spare + 3 pins next roll', () => {
    var wrapper = setup([5, 5, 3, ...rollMany(17, 0)]);
    expect(wrapper.find('h1').text()).toEqual('Game Score = 16');
  });

  it('a game with a spare + 3 pins nest roll', () => {
    var wrapper = setup([5, 5, 3, ...rollMany(17, 0)]);
    expect(wrapper.find(Frame).first().props().score).toEqual(13);
  });

  it('a game with a strike + 3 + 6 pins nest rolls', () => {
    var wrapper = setup([10, 3, 6, ...rollMany(17, 0)]);
    expect(wrapper.find(Frame).first().props().score).toEqual(19);
  });

  it('a perfect game', () => {
    var wrapper = setup(rollMany(12, 10));
    expect(wrapper.find(Frame).last().props().score).toEqual(300);
    expect(wrapper.find('h1').text()).toEqual('Game Score = 300');
  });
});
