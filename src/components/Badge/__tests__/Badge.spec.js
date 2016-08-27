import React from 'react';
import { shallow } from 'enzyme';

import { Badge } from '../Badge';

jest.unmock('../Badge');

describe('<Badge />', () => {
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  it('renders a label', () => {
    const mounted = shallow(<Badge label="Foo" />, options);
    expect(mounted.hasClass('slds-badge')).toBeTruthy();
    expect(mounted.text()).toBe('Foo');
  });
});
