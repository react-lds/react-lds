jest.unmock('../Backdrop');

import React from 'react';
import { mount } from 'enzyme';
import Backdrop from '../Backdrop';

describe('<Backdrop>', () => {
  it('should be openable', () => {
    const wrapper = mount(<Backdrop open />);
    expect(wrapper.find('.backdrop').hasClass('backdrop--open')).toBeTruthy();
  });
});
