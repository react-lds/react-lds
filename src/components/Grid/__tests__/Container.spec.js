import React from 'react';
import { shallow } from 'enzyme';

import { Container } from '../Container';

jest.unmock('../Container');

describe('<Container />', () => {
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  it('renders children', () => {
    const child = <div className="foo" />;
    const mounted = shallow(<Container>{child}</Container>, options);

    expect(mounted.contains(child)).toBeTruthy();
  });
});
