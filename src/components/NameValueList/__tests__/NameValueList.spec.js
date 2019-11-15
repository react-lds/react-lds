import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  List,
  Name,
  Value
} from '../NameValueList';

describe('<NameValueList.List />', () => {
  const getComponent = (props = {}) => shallow(<List {...props}>Foo</List>);

  it('renders with correct classnames', () => {
    const mounted = getComponent({ className: 'foo', mode: 'stacked' });
    const el = mounted.find('dl');
    expect(el.hasClass('slds-list_stacked')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('adds .slds-wrap when rendering in horizontal mode', () => {
    const mounted = getComponent({ mode: 'horizontal' });
    expect(mounted.find('dl').hasClass('slds-wrap')).toBeTruthy();
  });
});

describe('<NameValueList.Name />', () => {
  const getComponent = (props = {}) => mount(<Name {...props}>Foo</Name>);

  it('renders as `dt` with correct classnames', () => {
    const mounted = getComponent({ className: 'bar' });
    const el = mounted.find('dt');
    expect(el.hasClass('slds-item_label')).toBeTruthy();
    expect(el.hasClass('bar')).toBeTruthy();
  });

  it('renders a title if set', () => {
    const mounted = getComponent({ title: 'baz' });
    expect(mounted.find('dt').prop('title')).toEqual('baz');
  });

  it('renders children as title if of type string', () => {
    const mounted = getComponent();
    expect(mounted.find('dt').prop('title')).toEqual('Foo');
    mounted.setProps({ children: <p>Foo</p> });
    expect(mounted.find('dt').prop('title')).toEqual('');
  });
});

describe('<NameValueList.Value />', () => {
  const getComponent = (props = {}) => mount(<Value {...props}>Foo</Value>);

  it('renders as `dd` with correct classnames', () => {
    const mounted = getComponent({ className: 'bar' });
    const el = mounted.find('dd');
    expect(el.hasClass('slds-item_detail')).toBeTruthy();
    expect(el.hasClass('bar')).toBeTruthy();
  });

  it('renders a title if set', () => {
    const mounted = getComponent({ title: 'baz' });
    expect(mounted.find('dd').prop('title')).toEqual('baz');
  });

  it('renders children as title if of type string', () => {
    const mounted = getComponent();
    expect(mounted.find('dd').prop('title')).toEqual('Foo');
    mounted.setProps({ children: <p>Foo</p> });
    expect(mounted.find('dd').prop('title')).toEqual('');
  });
});
