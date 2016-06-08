jest.unmock('../variationable');

import React from 'react';
import { shallow } from 'enzyme';
import variationable from '../variationable';

describe('variationable()', () => {
  const DummyComponent = () =>
    <div>
      it works
    </div>;

  DummyComponent.variations = [
    'old',
    'new',
    { fail: ['small', 'big', 'astronomic'] },
  ];

  const VariDummyComponent = variationable(DummyComponent);

  it('adds a valid variation', () => {
    const wrapper = shallow(<VariDummyComponent old />);
    expect(wrapper.prop('sldsClasses')).toEqual(['old']);
  });

  it('adds multiple variations', () => {
    const wrapper = shallow(<VariDummyComponent old new big-fail />);
    expect(wrapper.prop('sldsClasses')).toEqual(['old', 'new', 'big-fail']);
  });

  it('does not add invalid variations', () => {
    const wrapper = shallow(<VariDummyComponent no-fail />);
    expect(wrapper.prop('sldsClasses')).toEqual([]);
  });

  it('keeps existing sldsClasses and adds variations', () => {
    const wrapper = shallow(<VariDummyComponent sldsClasses={['good']} new />);
    expect(wrapper.prop('sldsClasses')).toEqual(['new', 'good']);
  });

  it('keeps existing sldsClasses', () => {
    const wrapper = shallow(<VariDummyComponent sldsClasses={['good']} />);
    expect(wrapper.prop('sldsClasses')).toEqual(['good']);
  });
});
