/*  ./src/components/{Component}/{Component}/___tests/{Component}.spec.js */
import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../..';

import VerticalNavigationOverflow from '../VerticalNavigationOverflow';

const getComponent = (props = {}) => shallow(
  <VerticalNavigationOverflow
    id="foo"
    isOpen={false}
    title="bar"
    onToggle={() => {}}
    {...props}
  >
    <div className="test">Sample child</div>
  </VerticalNavigationOverflow>
);

describe('<VerticalNavigationOverflow />', () => {
  it('passes aria-describedby to child elements', () => {
    const mounted = getComponent();
    expect(mounted.find('.test').prop('aria-describedby')).toEqual('foo');
  });

  it('renders open', () => {
    const mounted = getComponent({ isOpen: true });
    expect(mounted.find('.slds-show').exists()).toBeTruthy();
  });

  it('calls onToggle on Button click', () => {
    const mockFn = jest.fn();
    const mounted = getComponent({ onToggle: mockFn });
    mounted.find(Button).simulate('click');
    expect(mockFn).toBeCalled();
  });
});
