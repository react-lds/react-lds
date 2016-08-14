jest.unmock('../IconSVG');

import React from 'react';
import { mount } from 'enzyme';
import IconSVG from '../IconSVG';

describe('<IconSVG />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/assets' };
  const childContextTypes = { assetBasePath: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      sprite: 'standard',
      icon: 'account',
    };

    mounted = mount(<IconSVG {...props} />, options);
  });


  it('has icon-class', () => {
    expect(mounted.find('svg').hasClass('icon')).toBeTruthy();
  });

  it('supports different sizes', () => {
    mounted.setProps({ size: 'large' });
    expect(mounted.find('svg').hasClass('icon--large')).toBeTruthy();
  });

  it('renders an icon with a custom background color', () => {
    mounted.setProps({ background: 'custom-custom89' });
    expect(mounted.find('svg').hasClass('icon-custom-custom89')).toBeTruthy();
  });

  it('renders an icon without a background color', () => {
    mounted.setProps({ background: false });
    expect(mounted.find('svg').hasClass('icon-standard-account')).toBeFalsy();
  });
});
