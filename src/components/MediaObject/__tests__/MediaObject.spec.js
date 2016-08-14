jest.unmock('../MediaObject');

import React from 'react';
import { mount } from 'enzyme';
import MediaObject from '../MediaObject';

describe('<MediaObject />', () => {
  let mounted = null;
  const figure = <div className="foo" />;

  beforeEach(() => {
    mounted = mount(<MediaObject />);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.media').length).toBe(1);
    expect(mounted.find('.media__body').length).toBe(1);
  });

  it('renders children', () => {
    mounted.setProps({ children: figure });
    expect(mounted.find('.media__body').contains(figure)).toBeTruthy();
  });

  it('renders a left figure', () => {
    mounted.setProps({ figureLeft: figure });
    expect(mounted.find('.media__figure').contains(figure)).toBeTruthy();
  });

  it('renders a right figure', () => {
    mounted.setProps({ figureRight: figure });
    expect(mounted.find('.media__figure--reverse').contains(figure)).toBeTruthy();
  });

  it('renders a left and right figure simultaniously', () => {
    mounted.setProps({ figureLeft: figure, figureRight: figure });
    expect(mounted.find('.media__figure').length).toBe(2);
    expect(mounted.find('.media__figure--reverse').length).toBe(1);
  });
});
