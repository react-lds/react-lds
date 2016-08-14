jest.unmock('../ModalHeader');

import React from 'react';
import { mount } from 'enzyme';
import ModalHeader from '../ModalHeader';

describe('<ModalHeader />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/assets' };
  const childContextTypes = { assetBasePath: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      label: 'foo',
      title: 'bar',
      tagline: 'baz',
    };

    mounted = mount(
      <ModalHeader {...props}>
        <div className="foobar" />
      </ModalHeader>,
      options);
  });

  it('renders a close-button by default', () => {
    expect(mounted.find('.button.modal__close').length).toBe(1);
  });

  it('onClickClose triggers when close buttin was clicked', () => {
    const closeCallback = jest.fn();
    const wrapper = mount(<ModalHeader onClickClose={closeCallback} />, options);
    wrapper.find('.button.modal__close').simulate('click');
    expect(closeCallback).toBeCalled();
  });

  it('renders title and tagline', () => {
    expect(mounted.find('h2').first().text()).toBe(props.title);
    expect(mounted.find('p.m-top--x-small').first().text()).toBe(props.tagline);
  });

  it('renders children', () => {
    expect(mounted.find('.foobar').length).toBe(1);
  });

  it('renders empty headers', () => {
    mounted.setProps({ title: undefined, tagline: undefined, children: undefined });
    expect(mounted.find('.modal__header').hasClass('modal__header--empty')).toBeTruthy();
  });

  it('renders a title-ID when there is a title', () => {
    expect(mounted.find(`#${props.label}`).first().text()).toBe(props.title);
  });

  it('renders in error-theme if it is a prompt', () => {
    mounted.setProps({ prompt: true });
    expect(mounted.find('.modal__header').hasClass('theme--error')).toBeTruthy();
    expect(mounted.find('.modal__header').hasClass('theme--alert-texture')).toBeTruthy();
  });

  it('hides the close button if it is uncloseable', () => {
    mounted.setProps({ uncloseable: true });
    expect(mounted.find('.button.modal__close').length).toBe(0);
  });
});
