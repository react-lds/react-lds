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
    expect(wrapper.find(`.${context.cssPrefix}media__body`).length).toBe(1);
  });

  it('should accept children into its __body', () => {
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

  it('should add --reverse modifier to the right figure', () => {
    const wrapper = shallow(<MediaObject figureRight={<div className="foo" />} />, { context });
    expect(wrapper.find(`.${context.cssPrefix}media__figure--reverse`).length).toBe(1);
  });

  it('should accept a left and right figure simultaniously', () => {
    const wrapper = shallow(
      <MediaObject figureLeft={<div className="foo" />} figureRight={<div className="foo" />}>
        <div className="foo" />
      </MediaObject>,
      { context }
    );
    expect(wrapper.find(`.${context.cssPrefix}media__figure`).length).toBe(2);
    expect(wrapper.find(`.${context.cssPrefix}media__figure--reverse`).length).toBe(1);
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

    it(`should assign the right modifier-class to '${flavor.name}`, () => {
      const wrapper = shallow(<MediaObject flavor={`${flavorName}`} />, { context });
      flavor.expectedClass.split(/\s+/).forEach(c => {
        expect(wrapper.hasClass(c)).toBeTruthy();
      });
    });
  });
});
