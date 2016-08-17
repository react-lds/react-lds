jest.unmock('../Spinner');

import React from 'react';
import { mount } from 'enzyme';
import Spinner from '../Spinner';

describe('<Spinner />', () => {
  let mounted = null;
  let props = {};

  beforeEach(() => {
    props = {
      size: 'small',
    };

    mounted = mount(<Spinner {...props} />);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.spinner_container').length).toBe(1);
    expect(mounted.find('.spinner').length).toBe(1);
    expect(mounted.find('.spinner__dot-a').length).toBe(1);
    expect(mounted.find('.spinner__dot-b').length).toBe(1);
    expect(mounted.find('.spinner_container').children().length).toBe(1);
    expect(mounted.find('.spinner').children().length).toBe(2);
  });

  it('renders sizes', () => {
    mounted.setProps({ size: 'large' });
    expect(mounted.find('.spinner').hasClass('spinner--large')).toBeTruthy();
  });
});
