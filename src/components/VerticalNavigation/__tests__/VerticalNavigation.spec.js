import React from 'react';
import { shallow } from 'enzyme';

import { VerticalNavigation } from '../VerticalNavigation';

const getComponent = (props = {}) => shallow(<VerticalNavigation {...props} />);

const sampleEl = () => <div className="test">Foo</div>;

describe('<VerticalNavigation />', () => {
  it('can prepend an item', () => {
    const mounted = getComponent({ children: sampleEl(), prependElement: sampleEl() });
    expect(mounted.find('.test')).toHaveLength(2);
  });
});
