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