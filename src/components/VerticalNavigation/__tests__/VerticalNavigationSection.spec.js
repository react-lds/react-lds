import React from 'react';
import { shallow } from 'enzyme';

import VerticalNavigationSection from '../VerticalNavigationSection';

const getComponent = (props = {}) => shallow(<VerticalNavigationSection {...props} />);

const sampleEl = <li className="test" />;

describe('<VerticalNavigationSection />', () => {
  it('passes aria-describedby to child elements', () => {
    const mounted = getComponent({ id: 'foo', children: sampleEl, title: 'bar' });
    expect(mounted.find('.test').prop('aria-describedby')).toEqual('foo');
  });
});
