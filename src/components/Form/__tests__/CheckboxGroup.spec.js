import React from 'react';
import { mount } from 'enzyme';

import { getUniqueHash } from '../../../utils';
import CheckboxGroup from '../CheckboxGroup';

describe('<CheckboxGroup />', () => {
  let mounted = null;
  let props = {};

  const child = (<input id="foo" type="checkbox" />);

  beforeEach(() => {
    props = { label: 'bar', id: 'foo' };
    mounted = mount(<CheckboxGroup {...props}>{child}</CheckboxGroup>);
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

  it('hides the error message', () => {
    mounted.setProps({ error: 'shit', hideErrorMessage: true });
    expect(mounted.find('.slds-form-element__help').length).toEqual(0);
    expect(mounted.find('input').prop('aria-describedby')).toEqual(undefined);
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
