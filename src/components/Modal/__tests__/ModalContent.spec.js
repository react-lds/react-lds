jest.unmock('../ModalContent');

import React from 'react';
import { mount } from 'enzyme';
import ModalContent from '../ModalContent';

describe('<ModalContent>', () => {
  it('should render the correct markup', () => {
    const wrapper = mount(<ModalContent><div className="foo">bar</div></ModalContent>);
    expect(wrapper.find('.modal__content').hasClass('p-vertical--large p-horizontal--x-large'))
      .toBeTruthy();
  });

  it('should accept children', () => {
    const wrapper = mount(<ModalContent><div className="foo">bar</div></ModalContent>);
    expect(wrapper.find('.foo').length).toBe(1);
  });

  it('should allow to be turned into a menu', () => {
    const wrapper = mount(<ModalContent menu><div className="foo">bar</div></ModalContent>);
    expect(wrapper.find('.modal__menu').length).toBe(1);
  });
});
