jest.unmock('../ModalFooter');

import React from 'react';
import { mount } from 'enzyme';
import ModalFooter from '../ModalFooter';

describe('<ModalFooter />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(<ModalFooter><div className="foo">bar</div></ModalFooter>);
  });

  it('renders the corre markup', () => {
    expect(mounted.find('.modal__footer').length).toBe(1);
  });

  it('renders children', () => {
    expect(mounted.find('.foo').length).toBe(1);
  });

  it('applies the default theme', () => {
    mounted.setProps({ default: true });
    expect(mounted.find('.theme--default').length).toBe(1);
  });
});
