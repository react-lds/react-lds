import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import IconSVG from '../IconSVG';

describe('<IconSVG />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/' };
  const childContextTypes = { assetBasePath: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      sprite: 'standard',
      icon: 'account',
    };

    mounted = shallow(<IconSVG {...props} />, options);
  });


  it('has icon-class', () => {
    expect(mounted.find('svg').hasClass('slds-icon')).toBeTruthy();
  });

  it('supports different sizes', () => {
    mounted.setProps({ size: 'large' });
    expect(mounted.find('svg').hasClass('slds-icon--large')).toBeTruthy();
  });

  it('renders an icon with a custom background color', () => {
    mounted.setProps({ background: 'custom-custom89' });
    expect(mounted.find('svg').hasClass('slds-icon-custom-custom89')).toBeTruthy();
  });

  it('renders an icon without a background color', () => {
    mounted.setProps({ background: false });
    expect(mounted.find('svg').hasClass('slds-icon-standard-account')).toBeFalsy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-icon').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-icon').prop('data-test')).toEqual('bar');
  });
});
