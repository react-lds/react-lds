jest.unmock('../MediaObject');

import React from 'react';
import { shallow } from 'enzyme';
import MediaObject from '../MediaObject';
import { cssPrefix } from '../../../global';

describe('<MediaObject />', () => {
  // Test Component basics
  it('should have the right component class', () => {
    const wrapper = shallow(<MediaObject />);
    expect(wrapper.hasClass(`${cssPrefix}media`)).toBeTruthy();
  });

  it('should render a __body', () => {
    const wrapper = shallow(<MediaObject />);
    expect(wrapper.find(`.${cssPrefix}media__body`)).toBeTruthy();
  });

  it('accept children into its __body', () => {
    const wrapper = shallow(<MediaObject><div className="foo" /></MediaObject>);
    expect(wrapper.find(`.${cssPrefix}media__body`).contains(<div className="foo" />)).toBeTruthy();
  });

  it('should accept a left figure', () => {
    const wrapper = shallow(<MediaObject figureLeft={<div className="foo" />} />);
    expect(wrapper.find(`.${cssPrefix}media__figure`).contains(<div className="foo" />)).toBeTruthy();
  });

  it('should accept a right figure', () => {
    const wrapper = shallow(<MediaObject figureRight={<div className="foo" />} />);
    expect(wrapper.find(`.${cssPrefix}media__figure`).contains(<div className="foo" />)).toBeTruthy();
  });

  it('should add --reverse modifier to right figure', () => {
    const wrapper = shallow(<MediaObject figureRight={<div className="foo" />} />);
    expect(wrapper.find(`.${cssPrefix}media__figure--reverse`)).toBeTruthy();
  });

  // Test flavors
  const flavors = [
    { name: 'center', expectedClass: `${cssPrefix}media--center` },
    { name: 'responsive', expectedClass: `${cssPrefix}media--responsive` },
    { name: 'responsive-center', expectedClass: `${cssPrefix}media--responsive ${cssPrefix}media--center` },
  ];

  flavors.forEach((flavor) => {
    const flavorName = flavor.name;

    it(`'s flavor '${flavor.name} should have the right modifier-class`, () => {
      const wrapper = shallow(<MediaObject flavor={`${flavorName}`} />);
      flavor.expectedClass.split(/\s+/).forEach(c => {
        expect(wrapper.hasClass(c)).toBeTruthy();
      });
    });
  });
});
