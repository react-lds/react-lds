import React from 'react';
import { shallow } from 'enzyme';

import { Backdrop } from '../Backdrop';

jest.unmock('../Backdrop');

describe('<Backdrop />', () => {
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  it('renders the correct markup', () => {
    const mounted = shallow(<Backdrop />, options);
    expect(mounted.hasClass('slds-backdrop')).toBeTruthy();
  });
});
