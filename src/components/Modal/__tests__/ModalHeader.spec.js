jest.unmock('../ModalHeader');

import React from 'react';
import { shallow } from 'enzyme';
import ModalHeader from '../ModalHeader';

describe('<ModalHeader />', () => {
  let mounted = null;
  let props = {};

  const child = (<div className="foobar" />);

  const context = { assetBasePath: '/assets', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      label: 'foo',
      title: 'bar',
      tagline: 'baz',
    };

    mounted = shallow(
      <ModalHeader {...props}>{child}</ModalHeader>,
      options);
  });

  it('renders a close-button by default', () => {
    expect(mounted.find('.slds-modal__close').length).toBe(1);
  });

  it('onClickClose triggers when close buttin was clicked', () => {
    const closeCallback = jest.fn();
    const wrapper = mount(<ModalHeader onClickClose={closeCallback} />, options);
    wrapper.find('.button.modal__close').simulate('click');
    expect(closeCallback).toBeCalled();
  });

  it('renders title and tagline', () => {
    expect(mounted.find('h2').first().text()).toBe(props.title);
    expect(mounted.find('.slds-m-top--x-small').first().text()).toBe(props.tagline);
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders empty headers', () => {
    mounted.setProps({ title: undefined, tagline: undefined, children: undefined });
    expect(mounted.find('.slds-modal__header').hasClass('slds-modal__header--empty')).toBeTruthy();
  });

  it('renders a title-ID when there is a title', () => {
    expect(mounted.find(`#${props.label}`).first().text()).toBe(props.title);
  });

  it('renders in error-theme if it is a prompt', () => {
    mounted.setProps({ prompt: true });
    expect(mounted.find('.slds-modal__header').hasClass('slds-theme--error')).toBeTruthy();
    expect(mounted.find('.slds-modal__header').hasClass('slds-theme--alert-texture')).toBeTruthy();
  });

  it('hides the close button if it is uncloseable', () => {
    mounted.setProps({ uncloseable: true });
    expect(mounted.find('.slds-modal__close').length).toBe(0);
  });
});
