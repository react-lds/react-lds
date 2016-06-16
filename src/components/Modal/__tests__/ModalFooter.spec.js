jest.unmock('../ModalFooter');

import React from 'react';
import { mount } from 'enzyme';
import ModalFooter from '../ModalFooter';

describe('<ModalFooter>', () => {
  it('should render the correct markup', () => {
    const wrapper = mount(<ModalFooter><div className="foo">bar</div></ModalFooter>);
    expect(wrapper.find('.modal__footer').length).toBe(1);
  });

  it('should accept children', () => {
    const wrapper = mount(<ModalFooter><div className="foo">bar</div></ModalFooter>);
    expect(wrapper.find('.foo').length).toBe(1);
  });

  it('should allow the default-theme to be applied', () => {
    const wrapper = mount(<ModalFooter default><div className="foo">bar</div></ModalFooter>);
    expect(wrapper.find('.theme--default').length).toBe(1);
  });
});
