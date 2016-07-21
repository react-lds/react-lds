jest.unmock('../Textarea');

import React from 'react';
import { mount } from 'enzyme';
import Textarea from '../Textarea';

describe('<Textarea />', () => {
  let props = {};
  let mounted = null;

  beforeEach(() => {
    props = {
      mounted: null,
      onChange: jest.fn(),
      placeholder: 'Type in something',
      id: 'textarea-id',
      label: 'some label',
    };

    mounted = mount(
      <Textarea {...props} />,
      { context: { assetBasePath: '/' }, childContextTypes: { assetBasePath: React.PropTypes.string } });
  });

  it('renders the id', () => {
    expect(mounted.find(`#${props.id}`).length).toEqual(1);
  });

  it('renders the label', () => {
    expect(mounted.find('div.form-element label').text()).toEqual(props.label);
    expect(mounted.find(`label[htmlFor="${props.id}"]`).length).toBe(1);
  });

  it('onChange handler works', () => {
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
    expect(mounted.find('.form-element').hasClass('is-required')).toBeTruthy();
    expect(mounted.find('.form-element__label abbr.required').length).toBe(1);
    expect(mounted.find('textarea').props().required).toBeTruthy();
  });

  it('renders disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.find('textarea').props().disabled).toBeTruthy();
  });

  it('renders error', () => {
    const error = 'something went wrong';
    mounted.setProps({ error });
    expect(mounted.find('div.form-element__help').text()).toEqual(error);
    expect(mounted.find('div.form-element').hasClass('has-error')).toBeTruthy();
  });

  it('renders a readOnly-version', () => {
    mounted.setProps({ readOnly: true });
    expect(mounted.find('textarea').length).toBe(0);
    expect(mounted.find('div.form-element__static p').text()).toEqual(props.placeholder);
  });
});
