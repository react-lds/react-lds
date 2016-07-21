jest.unmock('../Input');

import React from 'react';
import { mount } from 'enzyme';
import Input from '../Input';

describe('<Input />', () => {
  let props = {};
  let mounted = null;

  beforeEach(() => {
    props = {
      value: '',
      mounted: null,
      onChange: jest.fn(),
      iconRightOnClick: jest.fn(),
      iconLeft: undefined,
      iconRight: undefined,
      placeholder: 'Type in something',
      id: 'input-id',
      type: 'text',
      label: 'some label',
    };

    mounted = mount(
      <Input {...props} />,
      { context: { assetBasePath: '/' }, childContextTypes: { assetBasePath: React.PropTypes.string } });
  });

  it('renders the id', () => {
    expect(mounted.find(`#${props.id}`).length).toEqual(1);
  });

  it('onChange handler works', () => {
    const input = mounted.find('input');
    const event = { target: { value: 'foo' } };
    input.simulate('change', event);

    expect(props.onChange.mock.calls[0][0].target.value).toEqual('foo');
  });

  it('renders the value', () => {
    mounted.setProps({ value: 'foo' });
    expect(mounted.find('input').props().value).toEqual('foo');
  });

  it('renders the label', () => {
    expect(mounted.find('div.form-element label').text()).toEqual(props.label);
    expect(mounted.find(`label[htmlFor="${props.id}"]`).length).toBe(1);
  });

  it('renders the placeholder', () => {
    expect(mounted.find('input').props().placeholder).toEqual(props.placeholder);
  });

  it('renders the type', () => {
    const type = 'email';
    mounted.setProps({ type });
    expect(mounted.find('input').props().type).toEqual(type);
  });

  it('renders single iconLeft', () => {
    const iconLeft = 'rainbow';
    mounted.setProps({ iconLeft });
    const formElement = mounted.find('.form-element__control');

    expect(formElement.hasClass('input-has-icon')).toBeTruthy();
    expect(formElement.hasClass('input-has-icon--right')).toBeFalsy();
    expect(formElement.hasClass('input-has-icon--left')).toBeTruthy();
    expect(formElement.hasClass('input-has-icon--left-right')).toBeFalsy();
  });

  it('renders single iconRight', () => {
    const iconRight = 'rainbow';
    mounted.setProps({ iconRight });
    const formElement = mounted.find('.form-element__control');

    expect(formElement.hasClass('input-has-icon')).toBeTruthy();
    expect(formElement.hasClass('input-has-icon--right')).toBeTruthy();
    expect(formElement.hasClass('input-has-icon--left')).toBeFalsy();
    expect(formElement.hasClass('input-has-icon--left-right')).toBeFalsy();
  });

  it('renders iconLeft AND iconRight', () => {
    const iconRight = 'rainbow';
    const iconLeft = 'unicorn';
    mounted.setProps({ iconRight, iconLeft });
    const formElement = mounted.find('.form-element__control');

    expect(formElement.hasClass('input-has-icon')).toBeTruthy();
    expect(formElement.hasClass('input-has-icon--right')).toBeFalsy();
    expect(formElement.hasClass('input-has-icon--left')).toBeFalsy();
    expect(formElement.hasClass('input-has-icon--left-right')).toBeTruthy();
  });

  it('iconRightOnClick handler works and renders surrounding button', () => {
    const iconRight = 'rainbow';
    mounted.setProps({ iconRight });
    const button = mounted.find('.form-element__control button');
    button.simulate('click');

    expect(props.iconRightOnClick.mock.calls.length).toEqual(1);
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('.form-element').hasClass('is-required')).toBeTruthy();
    expect(mounted.find('.form-element__label abbr.required').length).toBe(1);
    expect(mounted.find('input').props().required).toBeTruthy();
  });

  it('renders disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.find('input').props().disabled).toBeTruthy();
  });

  it('renders error', () => {
    const error = 'something went wrong';
    mounted.setProps({ error });
    expect(mounted.find('div.form-element__help').text()).toEqual(error);
    expect(mounted.find('div.form-element').hasClass('has-error')).toBeTruthy();
  });

  it('renders errorIcon if set', () => {
    mounted.setProps({ error: 'shit', errorIcon: true });
    expect(mounted.find('div.form-element__control IconSVG').first().props().icon).toEqual('warning');
  });
});
