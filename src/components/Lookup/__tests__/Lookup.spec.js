jest.unmock('../Lookup');

import React from 'react';
import { mount } from 'enzyme';
import { Lookup } from '../Lookup';

describe('<Lookup />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/assets' };
  const childContextTypes = { assetBasePath: React.PropTypes.string };
  const options = { context, childContextTypes };

  const sampleData = [
    {
      id: '1',
      label: 'Something',
      meta: 'Very meta',
      objectType: 'contact',
    },
    {
      id: '2',
      label: 'Really',
      objectType: 'contact',
    },
    {
      id: '3',
      label: 'Not so',
      objectType: 'contact',
    },
    {
      id: '4',
      label: 'Much useful',
      objectType: 'contact',
    },
    {
      id: '5',
      label: 'Of any type',
      objectType: 'contact',
    },
    {
      id: '6',
      label: 'Of some type',
      objectType: 'account',
    },
    {
      id: '7',
      label: 'Of some record type',
      objectType: 'record',
    },
  ];

  const loadFn = () => sampleData;

  beforeEach(() => {
    props = {
      'data-scope': 'single',
      'data-select': 'multi',
      id: 'lookup',
      inputLabel: 'Accounts',
      listLabel: 'Recent Accounts',
      placeholder: 'Search Accounts',
      load: loadFn,
      prefix: function prefix(sldsClasses) { return sldsClasses.join(' '); },
    };
    mounted = mount(<Lookup {...props} />, options);
  });

  it('renders an input by default', () => {
    expect(mounted.find('.form-element__control input').length).toBe(1);
    expect(mounted.find('.pill_container').length).toBe(0);
  });

  it('renders a label', () => {
    expect(mounted.find('.form-element__label').text()).toEqual(props.inputLabel);
  });

  it('renders a placeholder', () => {
    expect(mounted.find('input').prop('placeholder')).toEqual(props.placeholder);
  });

  it('renders scope attributes', () => {
    expect(mounted.find('.form-element').prop('data-scope')).toEqual('single');
    mounted.setProps({ multi: true });
    expect(mounted.find('.form-element').prop('data-scope')).toEqual(null);
  });

  it('renders an alternate email layout', () => {
    mounted.setProps({ emailLayout: true });
    expect(mounted.find('input').hasClass('input--bare')).toBeTruthy();
    expect(mounted.find('.form-element__label').length).toBe(0);
    expect(mounted.find('.grid .email-composer__label').length).toBe(1);
  });

  it('renders a list label', () => {
    mounted.setState({ open: true, loaded: sampleData });
    expect(mounted.find('.lookup__item--label').text()).toBe(props.listLabel);
  });

  it('renders a lookup list', () => {
    mounted.setState({ open: true, loaded: sampleData });
    expect(mounted.find('.lookup__list .lookup__item-action').length).toBe(7);
  });

  it('renders lookup items correctly', () => {
    mounted.setState({ open: true, loaded: [sampleData[0]] });

    const firstData = sampleData[0];
    const firstResult = mounted.find('.lookup__item-action').first();
    expect(firstResult.find('.lookup__result-text').text()).toEqual(firstData.label);
    expect(firstResult.find('.lookup__result-meta').text()).toEqual(firstData.meta);
    expect(firstResult.find('IconSVG').first().prop('icon')).toEqual(firstData.objectType);
  });

  it('renders a list only when there is loaded data', () => {
    mounted.setState({ open: true });
    expect(mounted.find('.lookup__menu').length).toBe(0);
    mounted.setState({ loaded: sampleData });
    expect(mounted.find('.lookup__menu').length).toBe(1);
  });

  it('renders selections correctly', () => {
    mounted.setState({ selected: [sampleData[0]] });

    const firstData = sampleData[0];
    const result = mounted.find('.pill');
    expect(result.find('.pill__remove').length).toBe(1);
    expect(result.find('.pill__label').text()).toEqual(firstData.label);
    expect(result.find('IconSVG').first().prop('icon')).toEqual(firstData.objectType);
  });

  it('renders a selection and no input if there are selected items', () => {
    mounted.setState({ selected: [sampleData[0]] });
    expect(mounted.find('input').length).toBe(0);
    expect(mounted.find('.pill_container .pill').length).toBe(1);
  });

  it('renders as a multi lookup', () => {
    mounted.setProps({ multi: true });
    mounted.setState({ selected: sampleData });

    expect(mounted.find('.pill_container .pill').length).toBe(7);
    expect(mounted.find('input').length).toBe(0);
  });

  it('renders the input on multi-result click', () => {
    mounted.setProps({ multi: true });
    mounted.setState({ selected: sampleData });

    mounted.find('.pill_container').simulate('click');
    expect(mounted.find('input').length).toBe(1);
  });

  it('accepts an initial selection', () => {
    props.initialSelection = [sampleData[0]];
    mounted = mount(<Lookup {...props} />, options);
    expect(mounted.state('selected').length).toBe(1);
  });

  it('calls the load function onChange', () => {
    const mockFunction = jest.fn();
    mounted.setProps({ load: mockFunction });
    const input = mounted.find('input');
    input.simulate('change');
    expect(mockFunction).toBeCalled();
  });

  it('calls the load function onFocus', () => {
    const mockFunction = jest.fn();
    mounted.setProps({ load: mockFunction, loadOnFocus: true });
    const input = mounted.find('input');
    input.simulate('focus');
    expect(mockFunction).toBeCalled();
  });

  it('calls the load function onMount', () => {
    const mockFunction = jest.fn();
    props = Object.assign({}, props, { load: mockFunction, loadOnMount: true });
    mounted = mount(<Lookup {...props} />, options);
    mounted.setProps({ load: mockFunction, loadOnMount: true });
    expect(mockFunction).toBeCalled();
  });

  it('attaches an onChange handler', () => {
    const mockFn = jest.fn();
    mounted.setProps({ onChange: mockFn });
    mounted.setState({ selected: [] });
    expect(mockFn).toBeCalled();
  });

  it('attaches an onFocus handler', () => {
    const mockFunction = jest.fn();
    mounted.setProps({ onFocus: mockFunction });
    const input = mounted.find('input');
    input.simulate('focus');
    expect(mockFunction).toBeCalled();
  });

  it('sets a selections on lookup item click', () => {
    mounted.setState({ open: true, loaded: sampleData, selected: [] });
    mounted.find('.lookup__list li').first().simulate('click');
    expect(mounted.find('.pill_container .pill').length).toBe(1);
  });

  it('sets data-highlighted to the currently highlighted listItem-ID', () => {
    mounted.setState({ open: true, loaded: sampleData, selected: [] });
    mounted.find('.lookup__list li').first().simulate('mouseOver');
    expect(mounted.find('input').prop('aria-activedescendant')).toBe('1');
  });

  it('sets aria-expanded on input when openend', () => {
    mounted.setState({ open: true });
    expect(mounted.find('input').prop('aria-expanded')).toBeTruthy();
    expect(mounted.find('.form-element').hasClass('is-open')).toBeTruthy();
  });

  it('shows the input if the selection is cleared', () => {
    mounted.setState({ selected: [sampleData[0]] });
    expect(mounted.find('input').length).toBe(0);
    mounted.find('.pill__remove').simulate('click');
    expect(mounted.find('input').length).toBe(1);
  });

  it('shows the input if multi selection is cleared', () => {
    mounted.setProps({ multi: true });
    mounted.setState({ selected: [sampleData[0], sampleData[1]] });
    expect(mounted.find('input').length).toBe(0);
    mounted.find('.pill__remove').first().simulate('click');
    mounted.find('.pill__remove').first().simulate('click');
    expect(mounted.find('input').length).toBe(1);
  });

  it('subtracts selected items from displayed items', () => {
    mounted.setState({ open: true, loaded: sampleData, selected: [sampleData[0]] });
    expect(mounted.find('.lookup__list li').length).toBe(6);
    expect(mounted.find('.lookup__result-text').first().text()).toBe(sampleData[1].label);
  });
});
