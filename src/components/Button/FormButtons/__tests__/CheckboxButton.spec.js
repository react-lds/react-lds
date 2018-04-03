import React from 'react';
import { shallow } from 'enzyme';
import CheckboxButton from '../CheckboxButton';

const getComponent = (props = {}) => shallow(
  <CheckboxButton
    checked
    id="foo"
    label="bar"
    {...props}
  />
);

describe('<StatefulButton />', () => {
  it('applies rest props and additional classes to input', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('input');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders checked', () => {
    const mounted = getComponent();
    expect(mounted.find('input').prop('checked')).toBeTruthy();
    expect(mounted.find('input').prop('value')).toEqual('on');
  });

  it('renders unchecked', () => {
    const mounted = getComponent({ checked: false });
    expect(mounted.find('input').prop('checked')).not.toBeTruthy();
    expect(mounted.find('input').prop('value')).toEqual('off');
  });

  it('renders a label', () => {
    const mounted = getComponent();
    expect(mounted.find('label .slds-assistive-text').text()).toEqual('bar');
  });

  it('links label to input', () => {
    const mounted = getComponent();
    expect(mounted.find('label').prop('htmlFor')).toEqual(mounted.find('input').prop('id'));
  });
});
