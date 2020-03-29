import React from 'react';
import { LoginComponent } from '../../components/LoginComponent';
import {shallow} from 'enzyme';

let signIn, wrapper;

beforeEach(() => {
  signIn = jest.fn();
  wrapper = shallow(<LoginComponent signIn={signIn} />)
});

test('Should login Login Component correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('Should call login function on signin button click', () => {
  wrapper.find('button').simulate('click');
  expect(signIn).toHaveBeenCalled();
})