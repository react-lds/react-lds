jest.unmock('../Grid');

import React from 'react';
import { mount } from 'enzyme';
import Grid from '../Grid';

describe('<Grid />', () => {
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  it('renders children', () => {
    const child = <div className="foo"></div>;
    const mounted = mount(<Grid>{child}</Grid>, options);

    expect(mounted.find('.slds-grid').length).toBe(1);
    expect(mounted.contains(child)).toBeTruthy();
  });
});
