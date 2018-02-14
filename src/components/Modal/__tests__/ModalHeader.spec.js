import React from 'react';
import { shallow } from 'enzyme';
import ModalHeader from '../ModalHeader';
import { Button } from '../../..';

const sampleChild = <p>Sample</p>;

const getComponent = (props = {}) => shallow(
  <ModalHeader onClose={() => {}} {...props}>
    {sampleChild}
  </ModalHeader>
);

describe('<ModalHeader />', () => {
  it('renders the title with the id if both present', () => {
    const mounted = getComponent({ id: 'foo', title: 'bar' });
    const titleEl = mounted.find('h2');
    expect(titleEl.prop('id')).toEqual('foo');
    expect(titleEl.text()).toEqual('bar');
  });

  it('renders a string tagline if present', () => {
    const mounted = getComponent({ tagline: 'foo' });
    expect(mounted.find('p').text()).toEqual('foo');
  });

  it('renders an element tagline if present', () => {
    const mounted = getComponent({ tagline: sampleChild });
    expect(mounted.find('p').contains(sampleChild)).toBeTruthy();
  });

  it('renders with empty class when no title and tagline are passed', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-modal__header').hasClass('slds-modal__header_empty')).toBeTruthy();
  });

  it('renders a close button and binds onClose to it', () => {
    const mockFn = jest.fn();
    const mounted = getComponent({ onClose: mockFn });
    mounted.find(Button).simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('applies theme', () => {
    const mounted = getComponent({ theme: 'error' });
    expect(mounted.find('.slds-modal__header').hasClass('slds-theme_error')).toBeTruthy();
  });
});
