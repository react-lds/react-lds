import React from 'react';
import { shallow } from 'enzyme';

import VerticalNavigation from '../VerticalNavigation';

const sampleEl = () => <div className="test">Foo</div>;

describe('<VerticalNavigation />', () => {
  let mounted;
  let props = {};

  beforeEach(() => {
    props = { children: sampleEl() };

    mounted = shallow(<VerticalNavigation {...props} />);
  });

  it('can prepend an item', () => {
    mounted.setProps({ prependElement: sampleEl() });
    expect(mounted.find('.test')).toHaveLength(2);
  });

  it('applies flavoring', () => {
    mounted.setProps({ flavor: 'shade' });
    expect(mounted.find('.slds-nav-vertical').hasClass('slds-nav-vertical_shade')).toBeTruthy();
    mounted.setProps({ children: sampleEl(), flavor: ['shade', 'compact'] });
    expect(mounted.find('.slds-nav-vertical').hasClass('slds-nav-vertical_shade')).toBeTruthy();
    expect(mounted.find('.slds-nav-vertical').hasClass('slds-nav-vertical_compact')).toBeTruthy();
  });
});
