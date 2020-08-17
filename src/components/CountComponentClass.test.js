import Enzyme from 'enzyme';
import EnzymeAdatper from 'enzyme-adapter-react-16';
import { setupClass, findByTestAttr } from './testHelper.js'

Enzyme.configure({ adapter: new EnzymeAdatper() });

test('component is rendering', () => {
  const wrapper = setupClass();
  const appComponent = findByTestAttr(wrapper, 'count-component-class');
  expect(appComponent.length).toBe(1);
})

test('renders increment button', () => {
  const wrapper = setupClass();
  const button = findByTestAttr(wrapper, 'increment-button-class');
  expect(button.length).toBe(1);
})

test('render counter', () => {
  const wrapper = setupClass();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display-class');
  expect(counterDisplay.length).toBe(1);
})

test('counter starts at 0', () => {
  const wrapper = setupClass();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
  const counterDisplay = findByTestAttr(wrapper, 'counter-display-class');
  expect(counterDisplay.text()).toContain("Here goes to counter 0");

})

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setupClass(null, { counter });
  // find and click button
  const button = findByTestAttr(wrapper, 'increment-button-class');
  button.simulate('click');
  //find counterDisplay
  const counterDisplay = findByTestAttr(wrapper, 'counter-display-class');
  expect(counterDisplay.text()).toContain(`Here goes to counter ${counter + 1}`);
})

test('presence of decrement button', () => {
  const wrapper = setupClass();
  const button = findByTestAttr(wrapper, 'decrement-button-class');
  expect(button.length).toBe(1);
})

test('click button should decrease value', () => {
  const counter = 4;
  const wrapper = setupClass(null,  { counter: counter });
  const button = findByTestAttr(wrapper, 'decrement-button-class');
  button.simulate('click');
  const countDisplay = findByTestAttr(wrapper, 'counter-display-class' )
  expect(countDisplay.text()).toContain(`Here goes to counter ${counter - 1}`);
})

test('presence of the alert', () => {
  const wrapper = setupClass();
  const alert = findByTestAttr(wrapper, 'alert-text-class');
  expect(alert.length).toBe(1);
})

test('cannot be lower than 0', () => {
  const counter = 0;
  const wrapper = setupClass(null, { counter: counter, error: false})
  const button = findByTestAttr(wrapper, 'decrement-button-class')
  button.simulate('click');
  const alert = findByTestAttr(wrapper, 'alert-text-class');
  expect(alert.text()).toContain('Cannot be lower than 0');
})

test('when clicking increase, error message disapears', () => {
  const wrapper = setupClass(null, {counter: -1, error: true});
  const button = findByTestAttr(wrapper, 'increment-button-class');
  let alert = findByTestAttr(wrapper, 'alert-text-class');
  expect(alert.text()).toContain('Cannot be lower than 0');
  button.simulate('click');
  alert = findByTestAttr(wrapper, 'alert-text-class');
  expect(alert.text()).toContain("");
})