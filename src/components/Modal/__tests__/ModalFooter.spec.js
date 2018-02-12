import React from 'react';
import { shallow } from 'enzyme';
import ModalFooter from '../ModalFooter';
import { Button } from '../../../';

const sampleChild = <p>Sample</p>;

const getComponent = (props = {}) => shallow(
  <ModalFooter closeButtonLabel="foo" {...props}>
    {sampleChild}
  </ModalFooter>
);

describe('<ModalFooter />', () => {
  it('renders additional children', () => {
    const mounted = getComponent({ children: sampleChild });
    expect(mounted.contains(sampleChild)).toBeTruthy();
  });

  it('applies extra classNames and rest properties', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('.slds-modal__footer');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders a button that binds onClose', () => {
    const mockFn = jest.fn();
    const mounted = getComponent({ onClose: mockFn });
    const buttonEl = mounted.find(Button);
    buttonEl.simulate('click');
    expect(mockFn).toHaveBeenCalled();
    expect(buttonEl.prop('children')).toEqual('foo');
  });

  it('renders a directional variant', () => {
    const mounted = getComponent({ directional: true });
    expect(mounted.find('.slds-modal__footer').hasClass('slds-modal__footer_directional')).toBeTruthy();
  });
});
