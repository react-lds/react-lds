import React from 'react';
import { mount } from 'enzyme';

import { getUniqueHash } from '../../../utils';
import Input from '../Input';

describe('<Input />', () => {
  let props = {};
  let mounted = null;

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

    mounted = mount(<Input {...props} />);
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
    expect(formElement.hasClass('slds-input-has-icon_right')).toBeFalsy();
    expect(formElement.hasClass('slds-input-has-icon_left')).toBeTruthy();
    expect(formElement.hasClass('slds-input-has-icon_left-right')).toBeFalsy();
  });

  it('renders single iconRight', () => {
    const iconRight = 'rainbow';
    mounted.setProps({ iconRight });
    const formElement = mounted.find('.slds-form-element__control');

    expect(formElement.hasClass('slds-input-has-icon')).toBeTruthy();
    expect(formElement.hasClass('slds-input-has-icon_right')).toBeTruthy();
    expect(formElement.hasClass('slds-input-has-icon_left')).toBeFalsy();
    expect(formElement.hasClass('slds-input-has-icon_left-right')).toBeFalsy();
  });

  it('renders iconLeft AND iconRight', () => {
    const iconRight = 'rainbow';
    const iconLeft = 'unicorn';
    mounted.setProps({ iconRight, iconLeft });
    const formElement = mounted.find('.slds-form-element__control');

    expect(formElement.hasClass('slds-input-has-icon')).toBeTruthy();
    expect(formElement.hasClass('slds-input-has-icon_right')).toBeFalsy();
    expect(formElement.hasClass('slds-input-has-icon_left')).toBeFalsy();
    expect(formElement.hasClass('slds-input-has-icon_left-right')).toBeTruthy();
  });

  it('renders a spinner', () => {
    mounted.setProps({ showSpinner: true });
    const formElement = mounted.find('.slds-form-element__control');

    expect(formElement.find('Spinner').length).toBe(1);
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

  it('renders a bare input', () => {
    mounted.setProps({ bare: true });
    expect(mounted.find('.slds-input')).toHaveLength(0);
    expect(mounted.find('.slds-input_bare')).toHaveLength(1);
  });

  it('labels the input with an error', () => {
    mounted.setProps({ error: 'shit' });
    const hash = getUniqueHash('shit', props.id);
    expect(mounted.find('input').prop('aria-describedby')).toEqual(hash);
  });

  it('hides the error message', () => {
    mounted.setProps({ error: 'shit', errorMessage: false });
    expect(mounted.find('.slds-form-element__help').length).toEqual(0);
    expect(mounted.find('input').prop('aria-describedby')).toEqual(null);
  });

  it('applies hideLabel to the label', () => {
    mounted.setProps({ hideLabel: true });
    expect(mounted.find('FormElementLabel').prop('hideLabel')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('input').hasClass('foo')).toBeTruthy();
    expect(mounted.find('input').prop('data-test')).toEqual('bar');
  });

  it('applies readOnly to input if set', () => {
    mounted.setProps({ readOnly: true });
    expect(mounted.find('input').props().readOnly).toBeTruthy();
  });
});
