import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import {findByTestAttr} from '../../test/testUtils'
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory funcion
 * @function setup
 * @param {object} props
 * @returns { ShallowWrapper }
 */

const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
}

test('Render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})


test("renders no text when 'success' props is false", () => {
  const wrapper = setup({ success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
})

test("renders non-empty congrats message when 'success'", () => {
  const wrapper = setup({ success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0)
})