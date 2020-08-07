import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdatper from 'enzyme-adapter-react-16';
import CountComponentClass from './CountComponentClass';

Enzyme.configure({ adapter: new EnzymeAdatper() });


test('component is rendering', () => {
  const wrapper = shallow(<CountComponentClass />)
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
})

test('renders increment button', () => {

})

test('render counter', () => {

})

test('counter starts at 0', () => {

})

test('clicking button increments counter display', () => {

})