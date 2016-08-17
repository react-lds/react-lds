jest.unmock('../Backdrop');

import React from 'react';
import { mount } from 'enzyme';
import Backdrop from '../Backdrop';

describe('<Backdrop />', () => {
  it('renders opened', () => {
    const mounted = mount(<Backdrop open />);
    expect(mounted.find('.backdrop').hasClass('backdrop--open')).toBeTruthy();
  });
});
