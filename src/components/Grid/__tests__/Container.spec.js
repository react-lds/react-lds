jest.unmock('../Container');

import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';

describe('<Container />', () => {
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  it('renders children', () => {
    const child = <div className="foo"></div>;
    const mounted = shallow(<Container>{child}</Container>, options);

    expect(mounted.contains(child)).toBeTruthy();
  });
});
