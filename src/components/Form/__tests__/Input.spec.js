import React from 'react';
import { mount } from 'enzyme';

import Input from '../Input';

describe('<Input />', () => {
  let props = {};
  let mounted = null;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      value: '',
      onChange: jest.fn(),
      iconRightOnClick: jest.fn(),
      iconLeft: undefined,
      iconRight: undefined,
      placeholder: 'Type in something',
      id: 'input-id',
      type: 'text',
      label: 'some label',
    };

    mounted = mount(<Input {...props} />, options);
  });

  it('renders the id', () => {
    expect(mounted.find(`#${props.id}`).length).toEqual(1);
  });

  it('attaches an onChange handler', () => {
    const input = mounted.find('input');
    const event = { target: { value: 'foo' } };
    input.simulate('change', event);

    expect(props.onChange.mock.calls[0][0].target.value).toEqual('foo');
  });

  it('renders the value', () => {
    mounted.setProps({ value: 'foo' });
    expect(mounted.find('input').props().value).toEqual('foo');
  });

  it('renders the placeholder', () => {
    expect(mounted.find('input').props().placeholder).toEqual(props.placeholder);
  });

  it('renders the type', () => {
    const type = 'email';
    mounted.setProps({ type });
    expect(mounted.find('input').props().type).toEqual(type);
  });

  it('renders a single iconLeft', () => {
    const iconLeft = 'rainbow';
    mounted.setProps({ iconLeft });
    const formElement = mounted.find('.slds-form-element__control');

    expect(formElement.hasClass('slds-input-has-icon')).toBeTruthy();
    expect(formElement.hasClass('slds-input-has-icon--right')).toBeFalsy();
    expect(formElement.hasClass('slds-input-has-icon--left')).toBeTruthy();
    expect(formElement.hasClass('slds-input-has-icon--left-right')).toBeFalsy();
  });

  it('renders single iconRight', () => {
    const iconRight = 'rainbow';
    mounted.setProps({ iconRight });
    const formElement = mounted.find('.slds-form-element__control');

    expect(formElement.hasClass('slds-input-has-icon')).toBeTruthy();
    expect(formElement.hasClass('slds-input-has-icon--right')).toBeTruthy();
    expect(formElement.hasClass('slds-input-has-icon--left')).toBeFalsy();
    expect(formElement.hasClass('slds-input-has-icon--left-right')).toBeFalsy();
  });

  it('renders iconLeft AND iconRight', () => {
    const iconRight = 'rainbow';
    const iconLeft = 'unicorn';
    mounted.setProps({ iconRight, iconLeft });
    const formElement = mounted.find('.slds-form-element__control');

    expect(formElement.hasClass('slds-input-has-icon')).toBeTruthy();
    expect(formElement.hasClass('slds-input-has-icon--right')).toBeFalsy();
    expect(formElement.hasClass('slds-input-has-icon--left')).toBeFalsy();
    expect(formElement.hasClass('slds-input-has-icon--left-right')).toBeTruthy();
  });

  it('iconRightOnClick handler works and renders surrounding button', () => {
    const iconRight = 'rainbow';
    mounted.setProps({ iconRight });
    const button = mounted.find('.slds-form-element__control button');
    button.simulate('click');

    expect(props.iconRightOnClick.mock.calls.length).toEqual(1);
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('input').props().required).toBeTruthy();
  });

  it('renders disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.find('input').props().disabled).toBeTruthy();
  });

  it('renders errorIcon if set', () => {
    mounted.setProps({ error: 'shit', errorIcon: true });
    expect(mounted.find('div.slds-form-element__control IconSVG').first().props().icon).toEqual('warning');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('input').hasClass('foo')).toBeTruthy();
    expect(mounted.find('input').prop('data-test')).toEqual('bar');
  });
});
