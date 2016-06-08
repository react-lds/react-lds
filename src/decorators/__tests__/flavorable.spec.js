jest.unmock('../flavorable');

import React from 'react';
import { shallow } from 'enzyme';
import flavorable from '../flavorable';

describe('flavorable()', () => {
  const DummyComponent = () =>
    <div>
      it works
    </div>;

  DummyComponent.flavors = [
    'strawberry',
    'cherry',
  ];

  const FlavorableDummyComponent = flavorable(DummyComponent, 'apple');

  it('adds a valid flavor', () => {
    const wrapper = shallow(<FlavorableDummyComponent strawberry />);
    expect(wrapper.prop('sldsClasses')).toEqual(['apple--strawberry']);
  });

  it('does not add invalid flavors', () => {
    const wrapper = shallow(<FlavorableDummyComponent blueberry />);
    expect(wrapper.prop('sldsClasses')).toEqual([]);
  });

  it('keeps existing sldsClasses and adds flavors', () => {
    const wrapper = shallow(<FlavorableDummyComponent sldsClasses={['banana']} strawberry />);
    expect(wrapper.prop('sldsClasses')).toEqual(['apple--strawberry', 'banana']);
  });

  it('keeps existing sldsClasses', () => {
    const wrapper = shallow(<FlavorableDummyComponent sldsClasses={['banana']} />);
    expect(wrapper.prop('sldsClasses')).toEqual(['banana']);
  });
});
