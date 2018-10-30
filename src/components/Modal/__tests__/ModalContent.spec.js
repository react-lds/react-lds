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

  it('allows to collapse padding', () => {
    const testPadding = (cmp, truthy) => {
      const test = expect(cmp.find('.slds-modal__content').hasClass('slds-p-around_medium'));
      return truthy ? test.toBeTruthy() : test.toBeFalsy();
    };

    const mounted = getComponent({ collapsePadding: false });
    testPadding(mounted, true);
    mounted.setProps({ collapsePadding: true });
    testPadding(mounted, false);
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
