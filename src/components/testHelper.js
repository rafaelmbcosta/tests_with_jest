import React from 'react';
import CountComponentClass from './CountComponentClass';
import CountComponentFunction from './CountComponentFunction';
import { shallow } from 'enzyme';

/**
 * Factory function to create a ShallowWrapper for the app component
 * @function setup
 * @param {object} props -- Component props specific for this setup
 * @param {object} state -- Initial Setup
 * @returns {shallow}
 *
 */
export function setupClass( props = {}, state = null ){
  const wrapper = shallow(<CountComponentClass {...props} />);
  if (state) { wrapper.setState(state) }
  return wrapper;
}

export function setupFunction( props = {}, state = null ){
  const wrapper = shallow(<CountComponentFunction {...props} />);
  if (state) { wrapper.setState(state) }
  return wrapper;
}

/**
 * Return ShallowWrapper cointaining node(s) with the given test-data-value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test atribute for search
 */

export function findByTestAttr(wrapper, val) {
  return wrapper.find(`[data-test="${val}"]`);
}
