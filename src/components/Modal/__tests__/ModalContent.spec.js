import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from '../ModalContent';

const sampleChild = <p>Sample</p>;

const getComponent = (props = {}) => shallow(
  <ModalContent {...props}>
    {sampleChild}
  </ModalContent>
);

describe('<ModalContent />', () => {
  it('renders children', () => {
    const mounted = getComponent();
    expect(mounted.contains(sampleChild)).toBeTruthy();
  });

  it('applies extra classNames and rest properties', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('.slds-modal__content');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('applies the id', () => {
    const mounted = getComponent({ id: 'foo' });
    expect(mounted.find('.slds-modal__content').prop('id')).toEqual('foo');
  });
});
