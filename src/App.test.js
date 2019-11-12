import React from 'react';
import {App} from './App';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

/*
describe('input field', () => {
  it('test input field', () => {
    const onChange = jest.fn();
    const props = {
      value: 'Hello world',
      onChange
    };
    const wrapper = mount(<input {...props} />);
    wrapper.find('input').simulate('change', {
      target: {
        value: 'This is just for test'
      }
    });
    expect(onChange).toHaveBeenCalledWith('This is just for test');
  });
});
*/

it('dsf', () => {
  const state = {mirror: ''};
  const wrapper = shallow(<App {...state} />);
  wrapper
    .find('textarea')
    .simulate('change', {target: {value: 'Your new Value'}});
  expect(wrapper.state('mirror')).toBe('Your new Value');
});
