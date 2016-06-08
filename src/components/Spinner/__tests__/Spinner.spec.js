jest.unmock('../Spinner');

import React from 'react';
import { mount } from 'enzyme';
import Spinner from '../Spinner';

describe('<Spinner />', () => {
  it('renders the correct markup spinner', () => {
    const comp = mount(<Spinner size="small" />);
    expect(comp.find('.spinner_container').length).toBe(1);
    expect(comp.find('.spinner').length).toBe(1);
    expect(comp.find('.spinner__dot-a').length).toBe(1);
    expect(comp.find('.spinner__dot-b').length).toBe(1);
    expect(comp.find('.spinner_container').children().length).toBe(1);
    expect(comp.find('.spinner').children().length).toBe(2);
  });

  it('renders sizes and flavors on the spinner itself', () => {
    const comp = mount(<Spinner inverse size="large" />);
    expect(comp.find('.spinner').hasClass('spinner--large')).toBeTruthy();
    expect(comp.find('.spinner').hasClass('spinner--inverse')).toBeTruthy();
  });
});
