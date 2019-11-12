import React from 'react';
import {App} from './App';
import {configure, shallow} from 'enzyme';
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

// https://scriptverse.academy/tutorials/jasmine-spy-matchers.html
it('test', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<App onChange={onChange} />);
  wrapper.find('textarea').simulate('change', 'test');
  expect(onChange.mock.calls[0][0]).toBe('test');
});
