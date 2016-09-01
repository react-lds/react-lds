import React from 'react';
import { mount } from 'enzyme';

import Textarea from '../Textarea';

jest.unmock('../Textarea');

describe('<Textarea />', () => {
  let props = {};
  let mounted = null;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      placeholder: 'Type in something',
      id: 'textarea-id',
      label: 'some label',
    };

    mounted = mount(<Textarea {...props} />, options);
  });

  it('renders the id', () => {
    expect(mounted.find(`#${props.id}`).length).toEqual(1);
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
