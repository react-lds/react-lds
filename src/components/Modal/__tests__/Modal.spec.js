jest.unmock('../Modal');

import React from 'react';
import { mount } from 'enzyme';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';

describe('<Modal>', () => {
  const context = { assetBasePath: '/assets' };
  const childContextTypes = {
    assetBasePath: React.PropTypes.string,
  };
  const options = { context, childContextTypes };

  it('should render the correct markup', () => {
    const wrapper = mount(<Modal><div className="foo" /></Modal>, options);
    expect(wrapper.find('.modal').find('.modal__container').length).toBe(1);

    const modalProps = wrapper.find('.modal').props();
    expect(modalProps.role).toBe('dialog');
    expect(modalProps['aria-hidden']).toBe('true');
  });

  it('should be openable', () => {
    const wrapper = mount(<Modal open><div className="foo" /></Modal>, options);
    expect(wrapper.find('.modal').hasClass('fade-in-open')).toBeTruthy();
    expect(wrapper.find('.modal').props()['aria-hidden']).toBe('false');
  });

  it('should accept and pass label and description', () => {
    const wrapper = mount(
      <Modal label="foo" description="bar">
        <ModalHeader />
        <div className="foo" />
      </Modal>, options
    );

    const modalProps = wrapper.find('.modal').props();
    const modalContainerProps = wrapper.find('.modal__container').props();
    const modalHeaderProps = wrapper.find(ModalHeader).first().props();

    expect(modalProps['aria-labelledby']).toBe('foo');
    expect(modalProps['aria-describedby']).toBe('bar');
    expect(modalContainerProps.id).toBe('bar');
    expect(modalHeaderProps.label).toBe('foo');
    expect(modalHeaderProps.prompt).toBeFalsy();
  });

  it('should accept a dialog', () => {
    const wrapper = mount(
      <Modal dialog><div className="foo" /></Modal>, options
    );
    const modalContainerProps = wrapper.find('.modal__container').props();
    expect(modalContainerProps.tabIndex).toBe('0');
    expect(modalContainerProps.role).toBe('document');
  });

  it('should accept and pass prompt', () => {
    const wrapper = mount(
      <Modal prompt>
        <ModalHeader />
        <div className="foo" />
      </Modal>, options
    );
    expect(wrapper.find('.modal').props().role).toBe('alertdialog');

    const modalHeaderProps = wrapper.find(ModalHeader).first().props();
    const modalContainerProps = wrapper.find('.modal__container').props();
    expect(modalContainerProps.tabIndex).toBe('0');
    expect(modalContainerProps.role).toBe('document');

    expect(modalHeaderProps.prompt).toBe(true);
    expect(modalHeaderProps.uncloseable).toBe(true);
  });
});
