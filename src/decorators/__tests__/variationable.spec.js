import React from 'react';
import { shallow } from 'enzyme';

import variationable from '../variationable';

describe('variationable()', () => {
  let mounted = null;

  const DummyComponent = () => (<div>it works</div>);

  DummyComponent.variations = [
    'old',
    'new',
    { fail: ['small', 'big', 'astronomic'] },
  ];

  beforeEach(() => {
    const Dummy = variationable(DummyComponent);
    mounted = shallow(<Dummy />);
  });

  it('renders valid variations', () => {
    mounted.setProps({ old: true });
    expect(mounted.hasClass('slds-old')).toBeTruthy();
  });

  it('renders multiple variations', () => {
    mounted.setProps({ old: true, new: true, 'big-fail': true });
    expect(mounted.hasClass('slds-old')).toBeTruthy();
    expect(mounted.hasClass('slds-new')).toBeTruthy();
    expect(mounted.hasClass('slds-big-fail')).toBeTruthy();
  });

  it('does not render invalid variations', () => {
    mounted.setProps({ 'no-fail': true });
    expect(mounted.hasClass('slds-no-fail')).toBeFalsy();
  });

  it('keeps existing classes and renders variations', () => {
    mounted.setProps({ className: 'old', new: true });
    expect(mounted.hasClass('old')).toBeTruthy();
    expect(mounted.hasClass('slds-new')).toBeTruthy();
  });

  it('keeps existing classes', () => {
    mounted.setProps({ className: 'old' });
    expect(mounted.hasClass('old')).toBeTruthy();
  });
});
