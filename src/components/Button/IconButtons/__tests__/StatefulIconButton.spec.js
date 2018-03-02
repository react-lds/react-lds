import React from 'react';
import { shallow } from 'enzyme';
import StatefulIconButton from '../StatefulIconButton';
import IconButton from '../IconButton';

const getComponent = (props = {}) => shallow(<StatefulIconButton {...props} />);

describe('<StatefulIconButton />', () => {
  it('applies rest props and additional classes', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find(IconButton);
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders as selected', () => {
    const mounted = getComponent({ selected: true });
    expect(mounted.find(IconButton).hasClass('slds-is-selected')).toBeTruthy();
    expect(mounted.find(IconButton).prop('aria-pressed')).toBeTruthy();
  });
});
