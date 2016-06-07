jest.unmock('../sizeable');

import React from 'react';
import { shallow } from 'enzyme';
import sizeable from '../sizeable';

describe('sizeable', () => {
  const DummyComponent = () =>
    <div>
      it works
    </div>;

  const SizeableDummyComponent = sizeable(DummyComponent);

  it('adds normal size-of', () => {
    const comp = shallow(<SizeableDummyComponent size-of="1-12" />);
    expect(comp.prop('sldsClasses')).toEqual(['size--1-of-12']);
  });

  it('adds medium size-of', () => {
    const comp = shallow(<SizeableDummyComponent medium-size-of="4-12" />);
    expect(comp.prop('sldsClasses')).toEqual(['medium-size--4-of-12']);
  });

  it('adds large size-of', () => {
    const comp = shallow(<SizeableDummyComponent large-size-of="12-12" />);
    expect(comp.prop('sldsClasses')).toEqual(['large-size--12-of-12']);
  });
});
