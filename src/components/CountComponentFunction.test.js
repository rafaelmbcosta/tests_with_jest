import { findByTestAttr, setupFunction } from './testHelper.js'
import Enzyme from 'enzyme';
import EnzymeAdatper from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdatper() });

test('component is rendering', () => {
  const wrapper = setupFunction();
  const countComponentWrapper = findByTestAttr(wrapper, 'count-component-function')
  expect(countComponentWrapper.length).toBe(1);
})

test('renders increment button', () => {
  const wrapper = setupFunction();
  const button = findByTestAttr(wrapper, 'increment-button-function');
  expect(button.length).toBe(1);
})

test('render counter', () => {
  const wrapper = setupFunction();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display-function');
  expect(counterDisplay.length).toBe(1);
})

test('counter starts at 0', () => {
  const wrapper = setupFunction();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display-function');
  expect(counterDisplay.text()).toContain("Here goes to counter: 0");
})

test('clicking button increments counter display', () => {
  const wrapper = setupFunction();
  // find and click button
  let counterDisplay = findByTestAttr(wrapper, 'counter-display-function');
  expect(counterDisplay.text()).toContain("Here goes to counter: 0");
  // click button
  const button = findByTestAttr(wrapper, 'increment-button-function');
  button.simulate('click');
  //find counterDisplay
  counterDisplay = findByTestAttr(wrapper, 'counter-display-function');
  expect(counterDisplay.text()).toContain(`Here goes to counter: 1`);

})