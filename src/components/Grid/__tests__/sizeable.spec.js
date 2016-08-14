jest.unmock('../sizeable');

import React from 'react';
import { shallow } from 'enzyme';
import sizeable from '../sizeable';

describe('sizeable', () => {
  let mounted = null;

  beforeEach(() => {
    const DummyComponent = () => (<div>it works</div>);
    const SizeableDummyComponent = sizeable(DummyComponent);

    mounted = shallow(<SizeableDummyComponent />);
  });

  it('adds normal size-of', () => {
    mounted.setProps({ 'size-of': '1-12' });
    expect(mounted.prop('sldsClasses')).toEqual(['size--1-of-12']);
  });

  it('adds medium size-of', () => {
    mounted.setProps({ 'medium-size-of': '4-12' });
    expect(mounted.prop('sldsClasses')).toEqual(['medium-size--4-of-12']);
  });

  it('adds large size-of', () => {
    mounted.setProps({ 'large-size-of': '12-12' });
    expect(mounted.prop('sldsClasses')).toEqual(['large-size--12-of-12']);
  });
});
