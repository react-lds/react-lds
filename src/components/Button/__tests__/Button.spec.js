jest.unmock('../Button');

import React from 'react';
import { mount } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  let props = {};
  let mounted = null;

  beforeEach(() => {
    props = {};
    mounted = mount(<Button {...props} />);
  });


  it('renders the correct markup', () => {
    expect(mounted.find('.button').length).toBe(1);
  });

  it('renders children', () => {
    const child = <div className="foo" />;
    mounted.setProps({ children: child });
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders a title', () => {
    mounted.setProps({ title: 'Title' });
    expect(mounted.find('.button').text()).toEqual('Title');
  });

  it('renders a value', () => {
    mounted.setProps({ value: 'Value' });
    expect(mounted.find('.button').prop('value')).toEqual('Value');
  });

  it('renders variations', () => {
    mounted.setProps({ variation: 'neutral' });
    expect(mounted.find('.button').hasClass('button--neutral')).toBeTruthy();
  });

  it('renders as icon-button', () => {
    mounted.setProps({ icon: true });
    expect(mounted.find('.button').hasClass('button--icon')).toBeTruthy();
  });

  it('renders as selected', () => {
    mounted.setProps({ selected: true });
    expect(mounted.find('.button').hasClass('is-selected')).toBeTruthy();
  });

  it('renders as disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.find('.button').prop('disabled')).toBeTruthy();
  });

  it('renders a picklist label', () => {
    mounted.setProps({ isPicklistLabel: true });
    expect(mounted.find('.button').hasClass('picklist__label')).toBeTruthy();
  });

  it('attaches an onClick handler', () => {
    const fn = jest.fn();
    mounted.setProps({ onClick: fn });
    mounted.find('.button').simulate('click');
    expect(fn).toBeCalled();
  });
});
