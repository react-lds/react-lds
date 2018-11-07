import React from 'react';
import { shallow } from 'enzyme';
import ControlledTabs from '../ControlledTabs';
import Tab from '../Tab';
import TabLink from '../TabLink';

const getComponent = (props = {}) => shallow(
  <ControlledTabs
    activeTab="foo"
    onChangeTab={() => {}}
    {...props}
  >
    <Tab id="foo" title="foo">Foo</Tab>
    <Tab id="bar" title="bar">Bar</Tab>
    <Tab id="baz" title="baz" tabTitle="baz">Baz</Tab>
  </ControlledTabs>
);

const getTabLink = (mounted, pos = 0) => mounted.find(TabLink).at(pos);
const getTab = (mounted, pos = 0) => mounted.find(Tab).at(pos);

describe('<ControlledTabs />', () => {
  it('renders size modifiers', () => {
    const mounted = getComponent({ size: 'large' });
    expect(mounted.find('.slds-tabs_default').hasClass('slds-tabs_large')).toBeTruthy();
  })

  it('renders a link for every tab passed', () => {
    const mounted = getComponent();
    expect(mounted.find(TabLink).length).toEqual(3);
  });

  it('renders links to visible panels as active', () => {
    const mounted = getComponent({ activeTab: 'bar' });
    const activeLink = getTabLink(mounted, 1);
    expect(activeLink.prop('isActive')).toBeTruthy();
  });

  it('renders titles for links', () => {
    const mounted = getComponent();
    expect(getTabLink(mounted, 0).prop('title')).toEqual('foo');
  });

  it('renders links with a custom title', () => {
    const mockFn = jest.fn(({ title }) => <p>{title}</p>);
    const mounted = getComponent();
    mounted.setProps({
      children: <Tab id="baz" renderTitle={mockFn} title="foobar">Baz</Tab>
    });

    const lastLink = getTabLink(mounted, 0);

    expect(mockFn).toHaveBeenCalledWith({
      title: 'foobar',
      isActive: false,
      isFocused: false,
      id: 'baz',
    });
    expect(lastLink.find('p').text()).toEqual('foobar');
    expect(lastLink.prop('title')).toEqual('foobar');
  });

  it('renders a panel for every tab passed', () => {
    const mounted = getComponent();
    expect(mounted.find(Tab).length).toEqual(3);
  });

  it('renders visible panel as active', () => {
    const mounted = getComponent();
    const firstPanel = getTab(mounted, 0);
    expect(firstPanel.prop('isActive')).toBeTruthy();
  });

  it('enhances panels with props', () => {
    const mounted = getComponent({ renderInactiveTabs: false, scoped: true });
    const secondPanel = getTab(mounted, 1);
    expect(secondPanel.prop('isActive')).toBeNull();
    expect(secondPanel.prop('aria-labelledby')).toEqual('bar__item');
    expect(secondPanel.prop('scoped')).toBeTruthy();
  });

  it('does not render inActive panels when renderInactiveTabs', () => {
    const mounted = getComponent({ renderInactiveTabs: true });
    const secondPanel = getTab(mounted, 1);
    expect(secondPanel.prop('isActive')).toEqual(false);
  });

  it('calls onChangeTab when links are clicked', () => {
    const mockFn = jest.fn();
    const mounted = getComponent({ onChangeTab: mockFn });
    const secondPanel = getTabLink(mounted, 1);
    secondPanel.simulate('mouseDown', { stopPropagation: () => {} });
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('bar');
  });

  it('does not call onChangeTab when the link to the visible panel is clicked', () => {
    const mockFn = jest.fn();
    const mounted = getComponent({ onChangeTab: mockFn });
    const secondPanel = getTabLink(mounted, 0);
    secondPanel.simulate('mouseDown', { stopPropagation: () => {} });
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('applies focus styles when a link is focused', () => {
    const mockFn = jest.fn();
    const mounted = getComponent({ onChangeTab: mockFn });
    getTabLink(mounted, 1).simulate('focus');
    expect(mounted.state('focusedTab')).toEqual('bar');
    expect(getTabLink(mounted, 1).prop('isFocused')).toBeTruthy();
  });

  it('changes tabs when a key event on the active link is detected', () => {
    const mockFn = jest.fn();
    const mounted = getComponent({ onChangeTab: mockFn });
    const secondPanel = getTabLink(mounted, 0);
    secondPanel.simulate('keyUp', { key: 'ArrowLeft' });
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('baz');
    secondPanel.simulate('keyUp', { key: 'ArrowRight' });
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith('bar');
  });

  it('adds tabs to position state', () => {
    const mounted = getComponent();
    expect(mounted.state('positions').foo).toEqual(0);
    expect(mounted.state('positions').bar).toEqual(1);
    expect(mounted.state('positions').baz).toEqual(2);
  });

  it('resets internal state when receiving new children', () => {
    const mounted = getComponent();
    mounted.setState({ focusedTab: 'foo' });
    mounted.setProps({ children: [<Tab id="foobar" title="foobar">Foobar</Tab>] });
    expect(mounted.state('focusedTab')).toBeFalsy();
    expect(mounted.state('positions').foo).toBeFalsy();
    expect(mounted.state('positions').foobar).toEqual(0);
  });
});
