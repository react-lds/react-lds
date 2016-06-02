jest.unmock('../MediaObject');

import React from 'react';
import { shallow } from 'enzyme';
import MediaObject from '../MediaObject';

describe('<MediaObject />', () => {
  const context = { cssPrefix: 'slds-' };

  // Test Component basics
  it('should have the right component class', () => {
    const wrapper = shallow(<MediaObject />, { context });
    expect(wrapper.hasClass(`${context.cssPrefix}media`)).toBeTruthy();
  });

  it('should render a __body', () => {
    const wrapper = shallow(<MediaObject />, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__body`)).toBeTruthy();
  });

  it('accept children into its __body', () => {
    const wrapper = shallow(<MediaObject><div className="foo" /></MediaObject>, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__body`).contains(<div className="foo" />)).toBeTruthy();
  });

  it('should accept a left figure', () => {
    const wrapper = shallow(<MediaObject figureLeft={<div className="foo" />} />, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__figure`).contains(<div className="foo" />)).toBeTruthy();
  });

  it('should accept a right figure', () => {
    const wrapper = shallow(<MediaObject figureRight={<div className="foo" />} />, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__figure`).contains(<div className="foo" />)).toBeTruthy();
  });

  it('should add --reverse modifier to right figure', () => {
    const wrapper = shallow(<MediaObject figureRight={<div className="foo" />} />, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__figure--reverse`)).toBeTruthy();
  });

  // Test flavors
  const flavors = [
    { name: 'center', expectedClass: `${context.cssPrefix}media--center` },
    { name: 'responsive', expectedClass: `${context.cssPrefix}media--responsive` },
    {
      name: 'responsive-center',
      expectedClass: `${context.cssPrefix}media--responsive ${context.cssPrefix}media--center`,
    },
  ];

  flavors.forEach((flavor) => {
    const flavorName = flavor.name;

    it(`'s flavor '${flavor.name} should have the right modifier-class`, () => {
      const wrapper = shallow(<MediaObject flavor={`${flavorName}`} />, { context });
      flavor.expectedClass.split(/\s+/).forEach(c => {
        expect(wrapper.hasClass(c)).toBeTruthy();
      });
    });
  });
});
