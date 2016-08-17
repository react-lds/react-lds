jest.unmock('../Grid');

import React from 'react';
import { mount } from 'enzyme';
import Grid from '../Grid';

describe('<Grid />', () => {
  it('renders children', () => {
    const child = <div className="foo"></div>;
    const mounted = mount(<Grid>{child}</Grid>);

    expect(mounted.find('.grid').length).toBe(1);
    expect(mounted.contains(child)).toBeTruthy();
  });
});
