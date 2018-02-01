import React from 'react';
import { shallow } from 'enzyme';
import CheckboxToggle from '../CheckboxToggle';

const getCmp = (props = {}) => shallow(<CheckboxToggle id="foo" label="bar" {...props} />);

const isHidden = (cmp, el) => cmp.find(el).hasClass('slds-assistive-text');

describe('<CheckboxToggle />', () => {
  it('applies rest props to input', () => {
    const mockFn = jest.fn();
    const cmp = getCmp({ onChange: mockFn });
    cmp.find('input').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });

  it('links input to label', () => {
    const cmp = getCmp();
    const inputProp = cmp.find('input').prop('aria-describedby');
    const labelProp = cmp.find('.slds-checkbox_faux_container').prop('id');
    expect(inputProp).toEqual(labelProp);
  });

  it('defaults to rendering all labels', () => {
    const cmp = getCmp();
    expect(isHidden(cmp, '.slds-form-element__label')).toBeFalsy();
    expect(isHidden(cmp, '.slds-checkbox_on')).toBeFalsy();
    expect(isHidden(cmp, '.slds-checkbox_off')).toBeFalsy();
  });

  it('allows hiding the label', () => {
    const cmp = getCmp({ hideLabel: true });
    expect(isHidden(cmp, '.slds-form-element__label')).toBeTruthy();
  });

  it('allows hiding the status labels', () => {
    const cmp = getCmp({ hideStatusLabels: true });
    expect(isHidden(cmp, '.slds-checkbox_on')).toBeTruthy();
    expect(isHidden(cmp, '.slds-checkbox_off')).toBeTruthy();
  });
});
