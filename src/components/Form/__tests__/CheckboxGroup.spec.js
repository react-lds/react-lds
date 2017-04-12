import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import { getUniqueHash } from '../../../utils';
import CheckboxGroup from '../CheckboxGroup';

describe('<CheckboxGroup />', () => {
  let mounted = null;
  let props = {};

  const child = (<input type="checkbox" />);

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = { label: 'bar', id: 'foo' };
    mounted = mount(<CheckboxGroup {...props}>{child}</CheckboxGroup>, options);
  });

  it('renders a fieldset and a legend', () => {
    expect(mounted.find('legend').length).toBe(1);
  });

  it('renders a label', () => {
    expect(mounted.find('legend').text()).toEqual(props.label);
  });

  it('renders an error', () => {
    expect(mounted.find('input').prop('aria-describedby')).toBeFalsy();
    mounted.setProps({ error: 'shit' });
    expect(mounted.find('FormElementError').prop('error')).toEqual('shit');
    expect(mounted.find('input').prop('aria-describedby')).toEqual(getUniqueHash('shit', props.id));
  });

  it('executes an onChange-handler', () => {
    const mockFn = jest.fn();
    mounted.setProps({ onChange: mockFn });
    mounted.find('input').first().simulate('change');
    expect(mockFn).toBeCalled();
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('FormElement').prop('required')).toBeTruthy();
  });
});
