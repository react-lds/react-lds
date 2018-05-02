import React from 'react';
import { mount } from 'enzyme';

import Slider from '../Slider';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../../../';

describe('<Slider />', () => {
  let props = {};
  let mounted = null;

  beforeEach(() => {
    props = {
      id: 'slider-id',
      label: 'Slider Label',
      value: 50,
      onChange: jest.fn(),
      min: 1,
      max: 200,
    };

    mounted = mount(<Slider {...props} />);
  });

  it('renders the component and attaches the id', () => {
    const slider = mounted.find(Slider);
    expect(slider.length).toEqual(1);
    expect(slider.prop('id')).toEqual(props.id);
  });

  it('renders control', () => {
    expect(mounted.find(FormElement).length).toBe(1);
    expect(mounted.find(FormElementLabel).length).toBe(1);
    expect(mounted.find(FormElementControl).length).toBe(1);
    expect(mounted.find(FormElementError).length).toBe(1);

    expect(mounted.find('.slds-slider__range').length).toBe(1);
    expect(mounted.find('input').prop('value')).toEqual(props.value);

    const label = mounted.find('.slds-slider-label__label');
    expect(label.length).toBe(1);
    expect(label.text()).toEqual(props.label);

    const range = mounted.find('.slds-slider-label__range');
    expect(range.length).toBe(1);
    expect(range.text()).toEqual(`${props.min} - ${props.max}`);

    const value = mounted.find('.slds-slider__value');
    expect(value.length).toBe(1);
    expect(value.text()).toEqual(`${props.value}`);
  });

  it('renders disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.find('input').props().disabled).toBeTruthy();
  });

  it('renders vertical', () => {
    expect(mounted.find('.slds-slider').hasClass('slds-slider_vertical')).toEqual(false);
    mounted.setProps({ vertical: true });
    expect(mounted.find('.slds-slider').hasClass('slds-slider_vertical')).toEqual(true);
  });

  it('hides the error message', () => {
    mounted.setProps({ error: 'error', hideErrorMessage: true });
    expect(mounted.find(FormElementError).length).toEqual(0);
  });

  it('applies className', () => {
    mounted.setProps({ className: 'foo' });
    expect(mounted.find(FormElement).prop('className')).toEqual('foo');
  });
});
