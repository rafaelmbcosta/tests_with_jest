import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdatper from 'enzyme-adapter-react-16';
import CountComponentFunction from './CountComponentFunction';

Enzyme.configure({ adapter: new EnzymeAdatper() });

test.only('component is rendering', () => {
  const wrapper = shallow(<CountComponentFunction />)
  console.log(wrapper.debug());
  const countComponentWrapper = wrapper.find("[data-test='count-component-function']")
  expect(countComponentWrapper.length).toBe(2);
})

test('renders increment button', () => {

})

test('render counter', () => {

})

test('counter starts at 0', () => {

})

test('clicking button increments counter display', () => {

})