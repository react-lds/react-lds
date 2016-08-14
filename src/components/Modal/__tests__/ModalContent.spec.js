jest.unmock('../ModalContent');

import React from 'react';
import { mount } from 'enzyme';
import ModalContent from '../ModalContent';

describe('<ModalContent />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(<ModalContent><div className="foo">bar</div></ModalContent>);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.modal__content').hasClass('p-vertical--large')).toBeTruthy();
    expect(mounted.find('.modal__content').hasClass('p-horizontal--x-large')).toBeTruthy();
  });

  it('renders children', () => {
    expect(mounted.find('.foo').length).toBe(1);
  });

  it('renders as a menu', () => {
    mounted.setProps({ menu: true });
    expect(mounted.find('.modal__menu').length).toBe(1);
  });
});
