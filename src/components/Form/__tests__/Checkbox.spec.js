import React from 'react';
import { mount } from 'enzyme';

import { getUniqueHash } from '../../../utils';
import Checkbox from '../Checkbox';

describe('<Checkbox />', () => {
  let props = {};
  let mounted = null;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      id: 'textarea-id',
      label: 'some label',
    };

    mounted = mount(<Checkbox {...props} />, options);
  });

  it('renders the id', () => {
    expect(mounted.find(`#${props.id}`).length).toEqual(1);
  });

  it('attaches an onChange handler', () => {
    const textarea = mounted.find('input[type="checkbox"]');
    const event = { target: { value: 'foo' } };
    textarea.simulate('change', event);

    expect(props.onChange.mock.calls[0][0].target.value).toEqual('foo');
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('FormElement').prop('required')).toBeTruthy();
    expect(mounted.find('.slds-required').length).toBe(1);
  });

  it('renders disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.find('input[type="checkbox"]').props().disabled).toBeTruthy();
  });

  it('labels the checkbox with an error', () => {
    mounted.setProps({ error: 'shit' });
    const hash = getUniqueHash('shit', props.id);
    expect(mounted.find('input').prop('aria-describedby')).toEqual(hash);
  });


  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('input[type="checkbox"]').hasClass('foo')).toBeTruthy();
    expect(mounted.find('input[type="checkbox"]').prop('data-test')).toEqual('bar');
  });
});
