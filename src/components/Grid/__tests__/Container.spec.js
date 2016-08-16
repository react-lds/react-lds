jest.unmock('../Container');

import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';

describe('<Container />', () => {
  it('renders children', () => {
    const child = <div className="foo"></div>;
    const mounted = shallow(<Container>{child}</Container>);

    expect(mounted.contains(child)).toBeTruthy();
  });
});
