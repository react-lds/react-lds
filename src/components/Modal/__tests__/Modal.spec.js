import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';
import ModalContent from '../ModalContent';
import ModalFooter from '../ModalFooter';
import ModalHeader from '../ModalHeader';

const getComponent = (props = {}) => shallow(
  <Modal
    id="modal"
    onClose={() => {}}
    {...props}
  >
    <ModalContent>foo</ModalContent>
    <ModalFooter />
  </Modal>
);

describe('<Modal />', () => {
  it('applies extra classNames and rest properties', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('.slds-modal');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders as closed', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-modal').hasClass('slds-fade-in-open')).toBeFalsy();
    expect(mounted.find('.slds-backdrop').hasClass('slds-backdrop_open')).toBeFalsy();
    expect(mounted.find('FocusTrap').prop('active')).toBeFalsy();
  });

  it('renders as open', () => {
    const mounted = getComponent({ open: true });
    expect(mounted.find('.slds-modal').hasClass('slds-fade-in-open')).toBeTruthy();
    expect(mounted.find('.slds-backdrop').hasClass('slds-backdrop_open')).toBeTruthy();
    expect(mounted.find('FocusTrap').prop('active')).toBeTruthy();
  });

  it('renders with a different transitionStyle', () => {
    const mounted = getComponent({ open: true, transitionStyle: 'slide-up-open' });
    expect(mounted.find('.slds-modal').hasClass('slds-slide-up-open')).toBeTruthy();
  });

  it('links ModalHeader with aria-labelledby', () => {
    const mounted = getComponent({ title: 'foo' });
    expect(mounted.find('.slds-modal').prop('aria-labelledby')).toEqual(mounted.find(ModalHeader).prop('id'));
  });

  it('links ModalContent with aria-describeby', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-modal').prop('aria-describedby')).toEqual(mounted.find(ModalContent).prop('id'));
  });
});
