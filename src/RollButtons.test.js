import React, {Component} from 'react';
import RollBoard from './RollButtons';
import {mount} from 'enzyme';



it('calls onClick method in App when Roll Button is clicked', () => {
  const wrapper = mount(<RollBoard onClick={jest.fn()}/>);
  wrapper.find('button').first().simulate('click');
  expect(wrapper.props().onClick).toBeCalled();
});