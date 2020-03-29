import { shallow } from 'enzyme';
import React from 'react';
import { Header } from '../../components/Header';

let logout, wrapper;

beforeEach(() => {
  logout = jest.fn();
  wrapper = shallow(<Header logout={logout} />);
})

test('Should render test correctly', () => {
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe("Expensify");
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('Should call logout function when clicked on signout button', () => {
  wrapper.find('button').simulate('click');
  expect(logout).toHaveBeenCalled();
})
