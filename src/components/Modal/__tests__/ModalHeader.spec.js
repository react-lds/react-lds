jest.unmock('../ModalHeader');

import React from 'react';
import { mount } from 'enzyme';
import ModalHeader from '../ModalHeader';

describe('<ModalHeader>', () => {
  const context = { assetBasePath: '/assets' };
  const childContextTypes = {
    assetBasePath: React.PropTypes.string,
  };

  const options = { context, childContextTypes };

  it('should render a close-button by default', () => {
    const wrapper = mount(<ModalHeader title="foo" />, options);
    expect(wrapper.find('.button.modal__close').length).toBe(1);
  });

  it('onClickClose triggers when close buttin was clicked', () => {
    const closeCallback = jest.fn();
    const wrapper = mount(<ModalHeader onClickClose={closeCallback} />, options);
    wrapper.find('.button.modal__close').simulate('click');
    expect(closeCallback).toBeCalled();
  });

  it('should render title and tagline', () => {
    const wrapper = mount(<ModalHeader title="foo" tagline="bar" />, options);
    expect(wrapper.find('h2').first().text()).toBe('foo');
    expect(wrapper.find('p.m-top--x-small').first().text()).toBe('bar');
  });

  it('should render children', () => {
    const wrapper = mount(<ModalHeader><div className="foobar" /></ModalHeader>, options);
    expect(wrapper.find('.foobar').length).toBe(1);
  });

  it('should add --empty if the header is empty', () => {
    const wrapper = mount(<ModalHeader />, options);
    expect(wrapper.find('.modal__header').hasClass('modal__header--empty')).toBeTruthy();
  });

  it('should render a title-ID when there is a title', () => {
    const wrapper = mount(<ModalHeader title="foo" label="bar" />, options);
    expect(wrapper.find('#bar').first().text()).toBe('foo');
  });

  it('should render in error-theme if it is a prompt', () => {
    const wrapper = mount(<ModalHeader prompt />, options);
    expect(wrapper.find('.modal__header').hasClass('theme--error')).toBeTruthy();
    expect(wrapper.find('.modal__header').hasClass('theme--alert-texture')).toBeTruthy();
  });

  it('should hide the close button if it is uncloseable', () => {
    const wrapper = mount(<ModalHeader uncloseable />, options);
    expect(wrapper.find('.button.modal__close').length).toBe(0);
  });
});
