jest.unmock('../IconSVG');

import React from 'react';
import { shallow } from 'enzyme';
import IconSVG from '../IconSVG';

describe('<IconSVG />', () => {
  const context = { assetBasePath: '' };

  it('has `slds-icon`-class', () => {
    const icon = shallow(<IconSVG sprite="standard" icon="account" />, { context });
    expect(icon.hasClass('slds-icon')).toBeTruthy();
  });

  it('supports different sizes', () => {
    const icon = shallow(<IconSVG sprite="standard" icon="account" size="large" />, { context });
    expect(icon.hasClass('slds-icon--large')).toBeTruthy();
  });

  it('can display an icon with a custom background color', () => {
    const icon = shallow(<IconSVG sprite="standard" icon="account" background="custom-custom89" />, { context });
    expect(icon.hasClass('slds-icon-custom-custom89')).toBeTruthy();
  });
});
