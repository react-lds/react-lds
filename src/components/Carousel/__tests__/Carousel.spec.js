import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import Carousel from '../Carousel';

describe('<Carousel />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/' };
  const childContextTypes = { assetBasePath: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
    };

    mounted = mount(
      <Carousel {...props} />, options);
  });

  it('renders without', () => {
    expect(mounted.find('.slds-carousel').length).toEqual(1);
  });
});
