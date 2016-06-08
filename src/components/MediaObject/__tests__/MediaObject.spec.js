jest.unmock('../MediaObject');
jest.unmock('../../../decorators');

import React from 'react';
import { mount } from 'enzyme';
import MediaObject from '../MediaObject';

describe('<MediaObject />', () => {
  const context = { cssPrefix: '' };

  // Test Component basics
  it('should have the right component class', () => {
    const wrapper = mount(<MediaObject />, { context });
    expect(wrapper.find('div').first().hasClass(`${context.cssPrefix}media`)).toBeTruthy();
  });

  it('should render a __body', () => {
    const wrapper = mount(<MediaObject />, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__body`).length).toBe(1);
  });

  it('should accept children into its __body', () => {
    const wrapper = mount(<MediaObject><div className="foo" /></MediaObject>, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__body`).contains(<div className="foo" />)).toBeTruthy();
  });

  it('should accept a left figure', () => {
    const wrapper = mount(<MediaObject figureLeft={<div className="foo" />} />, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__figure`).contains(<div className="foo" />)).toBeTruthy();
  });

  it('should accept a right figure', () => {
    const wrapper = mount(<MediaObject figureRight={<div className="foo" />} />, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__figure`).contains(<div className="foo" />)).toBeTruthy();
  });

  it('should add --reverse modifier to the right figure', () => {
    const wrapper = mount(<MediaObject figureRight={<div className="foo" />} />, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__figure--reverse`).length).toBe(1);
  });

  it('should accept a left and right figure simultaniously', () => {
    const wrapper = mount(
      <MediaObject figureLeft={<div className="foo" />} figureRight={<div className="foo" />}>
        <div className="foo" />
      </MediaObject>,
      { context }
    );
    expect(wrapper.find(`.${context.cssPrefix}media__figure`).length).toBe(2);
    expect(wrapper.find(`.${context.cssPrefix}media__figure--reverse`).length).toBe(1);
  });

  // Test flavors
  it('should assign the right modifier-class to each flavor', () => {
    const wrapper = mount(<MediaObject />, { context });
    const validFlavors = [
      'center',
      'responsive',
    ];

    validFlavors.forEach((flavor) => {
      const nextProps = Object.assign({}, wrapper.props, { [`${flavor}`]: true });
      wrapper.setProps(nextProps);
      const expectedClass = `${context.cssPrefix}media--${flavor}`;
      expect(wrapper.find('div').first().hasClass(expectedClass)).toBeTruthy();
    });
  });
});
