import React from 'react';
import { shallow } from 'enzyme';

import ModalContent from '../ModalContent';

jest.unmock('../ModalContent');

describe('<ModalContent />', () => {
  let mounted = null;
  const child = (<div className="foo">bar</div>);

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<ModalContent>{child}</ModalContent>, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-modal__content').hasClass('slds-p-vertical--large')).toBeTruthy();
    expect(mounted.find('.slds-modal__content').hasClass('slds-p-horizontal--x-large')).toBeTruthy();
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders as a menu', () => {
    mounted.setProps({ menu: true });
    expect(mounted.find('.slds-modal__menu').length).toBe(1);
  });
});
