import React from 'react';
import { shallow } from 'enzyme';
import { ComboboxDropdown } from '..';
import { FormElementLabel, FormElement } from '../../../Form';

const mockFn = jest.fn();

const getCmp = (props = {}) => shallow(
  <ComboboxDropdown
    height={7}
    id="foo"
    isOpen={false}
    label="bar"
    listboxId="listbox-foo"
    placeholder="baz"
    renderInput={mockFn}
    {...props}
  />
);

describe('<ComboboxDropdown />', () => {
  beforeEach(() => { mockFn.mockClear(); });

  it('Renders a label', () => {
    const mounted = getCmp();
    const label = mounted.find(FormElementLabel);
    expect(label.prop('id')).toEqual('foo');
    expect(label.prop('label')).toEqual('bar');
  });

  it('Renders with a set height', () => {
    const mounted = getCmp();
    expect(mounted.find('.slds-dropdown').hasClass('slds-dropdown_length-with-icon-7')).toBeTruthy();
  });

  it('Renders as open', () => {
    const mounted = getCmp({ isOpen: true });
    const combobox = mounted.find('.slds-combobox');
    expect(combobox.hasClass('slds-is-open')).toBeTruthy();
    expect(combobox.prop('aria-expanded')).toBeTruthy();
  });

  it('Renders children', () => {
    const sampleChild = <span />;
    const mounted = getCmp({ children: sampleChild });
    expect(mounted.find('.slds-dropdown').contains(sampleChild)).toBeTruthy();
  });

  it('Renders an input by calling a renderer', () => {
    getCmp();
    expect(mockFn).toHaveBeenCalled();
  });

  it('renders a listbox of results by calling a renderer', () => {
    const mockRenderer = jest.fn();
    const mounted = getCmp();
    expect(mockRenderer).not.toHaveBeenCalled();
    mounted.setProps({ renderListbox: mockRenderer });
    expect(mockRenderer).toHaveBeenCalled();
  });

  it('Applies rest props', () => {
    const mounted = getCmp({ className: 'foo' });
    expect(mounted.find(FormElement).hasClass('foo')).toBeTruthy();
  });
});
