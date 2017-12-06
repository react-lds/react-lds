import React from 'react';
import { mount } from 'enzyme';

import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import ModalContent from '../ModalContent';

describe('<Modal />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(
      <Modal>
        <ModalHeader />
        <ModalContent id="bar" className="foo">
          Content
        </ModalContent>
      </Modal>
    );
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-modal').find('.slds-modal__container').length).toBe(1);

    const modalProps = mounted.find('.slds-modal').props();
    expect(modalProps.role).toBe('dialog');
    expect(modalProps['aria-hidden']).toBeTruthy();
  });

  it('renders opened', () => {
    mounted.setProps({ open: true });
    expect(mounted.find('.slds-modal').hasClass('slds-fade-in-open')).toBeTruthy();
    expect(mounted.find('.slds-modal').prop('aria-hidden')).toBeFalsy();
  });

  it('renders and passes label and description', () => {
    mounted.setProps({ label: 'foo', descriptionId: 'bar' });
    const modalProps = mounted.find('.slds-modal').props();
    const modalContentProps = mounted.find(ModalContent).first().props();
    const modalHeaderProps = mounted.find(ModalHeader).first().props();

    expect(modalProps['aria-labelledby']).toBe('foo');
    expect(modalProps['aria-describedby']).toBe('bar');
    expect(modalContentProps.id).toBe('bar');
    expect(modalHeaderProps.label).toBe('foo');
    expect(modalHeaderProps.prompt).toBeFalsy();
  });

  it('renders as a dialog', () => {
    mounted.setProps({ dialog: true });

    const modalContainerProps = mounted.find('.slds-modal__container').props();
    expect(modalContainerProps.tabIndex).toBe('0');
    expect(modalContainerProps.role).toBe('document');
  });

  it('renders and passes prompt', () => {
    mounted.setProps({ prompt: true });
    expect(mounted.find('.slds-modal').props().role).toBe('alertdialog');

    const modalHeaderProps = mounted.find(ModalHeader).first().props();
    const modalContainerProps = mounted.find('.slds-modal__container').props();
    expect(modalContainerProps.tabIndex).toBe('0');
    expect(modalContainerProps.role).toBe('document');

    expect(modalHeaderProps.prompt).toBe(true);
    expect(modalHeaderProps.uncloseable).toBe(true);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-modal').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-modal').prop('data-test')).toEqual('bar');
  });

  it('renders as large flavor', () => {
    mounted.setProps({ large: true });
    expect(mounted.find('.slds-modal').hasClass('slds-modal_large')).toBeTruthy();
  });
});
