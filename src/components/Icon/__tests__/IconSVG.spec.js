jest.unmock('../IconSVG');

import React from 'react';
import { mount } from 'enzyme';
import IconSVG from '../IconSVG';

describe('<IconSVG />', () => {
  const context = { assetBasePath: '', cssPrefix: 'slds-' };

  it('has `slds-icon`-class', () => {
    const icon = mount(<IconSVG sprite="standard" icon="account" />, { context });
    expect(icon.find('svg').hasClass('slds-icon')).toBeTruthy();
  });

  it('supports different sizes', () => {
    const icon = mount(<IconSVG sprite="standard" icon="account" size="large" />, { context });
    expect(icon.find('svg').hasClass('slds-icon--large')).toBeTruthy();
  });

  it('can display an icon with a custom background color', () => {
    const icon = mount(<IconSVG sprite="standard" icon="account" background="custom-custom89" />, { context });
    expect(icon.find('svg').hasClass('slds-icon-custom-custom89')).toBeTruthy();
  });
});
