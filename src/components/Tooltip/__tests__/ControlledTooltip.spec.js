import React from 'react';
import { mount } from 'enzyme';
import { Reference } from 'react-popper';
import ControlledTooltip from '../ControlledTooltip';

jest.mock('react-popper', () => ({
  Manager: ({ children }) => children,
  Reference: ({ children }) => children({ ref: null }),
  Popper: ({ children }) => children({ ref: null, style: {} }),
}));

const mockChild = <div className="mockChild" />;
const mockTitle = <div className="mockTitle" />;

const getComponent = (props = {}) => mount(
  <ControlledTooltip
    id="foo"
    title={mockTitle}
    {...props}
  >
    {mockChild}
  </ControlledTooltip>
);

describe('<ControlledTooltip />', () => {
  it('renders a reference', () => {
    const mounted = getComponent();
    expect(mounted.contains(mockChild)).toBeTruthy();
  });

  it('renders a popover when isOpen is true', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-popover').exists()).toBeTruthy();
  });

  it('does not render a popover when isOpen is false', () => {
    const mounted = getComponent({ isOpen: false });
    expect(mounted.find('.slds-popover').exists()).toBeFalsy();
  });

  it('links reference to popover via id', () => {
    const mounted = getComponent();
    expect(mounted.find('#foo').exists()).toBeTruthy();
    expect(mounted.find('div[aria-describedby="foo"]').exists()).toBeTruthy();
  });

  it('renders a static title', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-popover__body').contains(mockTitle)).toBeTruthy();
  });

  it('render a custom title', () => {
    const mockRender = t => <b>{t}</b>;
    const mounted = getComponent({ renderTitle: mockRender });
    expect(mounted.find('.slds-popover__body > b').contains(mockTitle)).toBeTruthy();
  });

  it('adds callbacks to mouse and focus events', () => {
    const mockOpen = jest.fn();
    const mockClose = jest.fn();
    const mounted = getComponent({
      onOpen: mockOpen,
      onClose: mockClose,
    });

    const ref = mounted.find(Reference).find('div[aria-describedby="foo"]');

    ref.simulate('mouseEnter');
    expect(mockOpen).toHaveBeenCalledTimes(1);
    ref.simulate('mouseLeave');
    expect(mockClose).toHaveBeenCalledTimes(1);

    mockOpen.mockClear();
    mockClose.mockClear();

    ref.simulate('focus');
    expect(mockOpen).toHaveBeenCalledTimes(1);
    ref.simulate('blur');
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  it('adds the correct nubbin class', () => {
    const mounted = getComponent({ position: 'top' });
    const expectNubbin = nubbin => expect(mounted.find('.slds-popover').hasClass(`slds-nubbin_${nubbin}`)).toBeTruthy();
    expectNubbin('bottom');
    mounted.setProps({ position: 'top-start' });
    expectNubbin('bottom-left');
    mounted.setProps({ position: 'top-end' });
    expectNubbin('bottom-right');
    mounted.setProps({ position: 'bottom' });
    expectNubbin('top');
    mounted.setProps({ position: 'bottom-start' });
    expectNubbin('top-left');
    mounted.setProps({ position: 'bottom-end' });
    expectNubbin('top-right');
    mounted.setProps({ position: 'left' });
    expectNubbin('right');
    mounted.setProps({ position: 'right' });
    expectNubbin('left');
  });
});

