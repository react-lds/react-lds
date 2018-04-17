import React from 'react';
import { mount } from 'enzyme';

import { getUniqueHash } from '../../../utils';
import Textarea from '../Textarea';

describe('<Textarea />', () => {
  let props = {};
  let mounted = null;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      placeholder: 'Type in something',
      id: 'textarea-id',
      label: 'some label',
    };

    mounted = mount(<Textarea {...props} />);
  });

  it('renders the component and attaches the id', () => {
    const textarea = mounted.find(Textarea);
    expect(textarea.length).toEqual(1);
    expect(textarea.prop('id')).toEqual(props.id);
  });

  it('attaches an onChange handler', () => {
    const textarea = mounted.find('textarea');
    const event = { target: { value: 'foo' } };
    textarea.simulate('change', event);

    expect(props.onChange.mock.calls[0][0].target.value).toEqual('foo');
  });

  it('renders the placeholder', () => {
    expect(mounted.find('textarea').props().placeholder).toEqual(props.placeholder);
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('textarea').props().required).toBeTruthy();
  });

  it('renders disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.find('textarea').props().disabled).toBeTruthy();
  });

  it('hides the label', () => {
    mounted.setProps({ hideLabel: true });
    expect(mounted.find('label.slds-assistive-text').length).toBe(1);
  });

  it('labels the textarea with an error', () => {
    mounted.setProps({ error: 'shit' });
    const hash = getUniqueHash('shit', props.id);
    expect(mounted.find('textarea').prop('aria-describedby')).toEqual(hash);
  });

  it('hides the error message', () => {
    mounted.setProps({ error: 'shit', hideErrorMessage: true });
    expect(mounted.find('.slds-form-element__help').length).toEqual(0);
    expect(mounted.find('textarea').prop('aria-describedby')).toEqual(null);
  });

  it('renders a readOnly-version', () => {
    mounted.setProps({ readOnly: true });
    expect(mounted.find('textarea').length).toBe(0);
    expect(mounted.find('.slds-form-element__static p').text()).toEqual(props.placeholder);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('textarea').hasClass('foo')).toBeTruthy();
    expect(mounted.find('textarea').prop('data-test')).toEqual('bar');
  });
});
