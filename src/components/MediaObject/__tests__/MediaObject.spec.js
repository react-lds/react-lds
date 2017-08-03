import React from 'react';
import { shallow } from 'enzyme';

import { MediaObject } from '../MediaObject';

describe('<MediaObject />', () => {
  let mounted = null;
  const figure = <div className="foo" />;

  beforeEach(() => {
    mounted = shallow(<MediaObject />);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-media').length).toBe(1);
    expect(mounted.find('.slds-media__body').length).toBe(1);
  });

  it('renders children', () => {
    mounted.setProps({ children: figure });
    expect(mounted.find('.slds-media__body').contains(figure)).toBeTruthy();
  });

  it('renders a left figure', () => {
    mounted.setProps({ figureLeft: figure });
    expect(mounted.find('.slds-media__figure').contains(figure)).toBeTruthy();
  });

  it('renders a right figure', () => {
    mounted.setProps({ figureRight: figure });
    expect(mounted.find('.slds-media__figure_reverse').contains(figure)).toBeTruthy();
  });

  it('renders a left and right figure simultaniously', () => {
    mounted.setProps({ figureLeft: figure, figureRight: figure });
    expect(mounted.find('.slds-media__figure').length).toBe(2);
    expect(mounted.find('.slds-media__figure_reverse').length).toBe(1);
  });

  it('allows a custom tag to be used', () => {
    mounted.setProps({ customTag: 'header' });
    expect(mounted.find('header').length).toBe(1);
  });

  it('truncates the __body', () => {
    mounted.setProps({ truncate: true, title: 'some title' });
    expect(mounted.find('.slds-media__body').hasClass('slds-truncate')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-media').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-media').prop('data-test')).toEqual('bar');
  });
});
