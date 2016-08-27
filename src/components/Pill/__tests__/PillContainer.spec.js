jest.unmock('../PillContainer');

import React from 'react';
import { PillContainer } from '../PillContainer';
import { shallow } from 'enzyme';

describe('<PillContainer />', () => {
  let mounted = null;
  const child = <div className="foo">bar</div>;

  const context = { assetBasePath: '/assets', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<PillContainer>{child}</PillContainer>, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-pill_container').length).toEqual(1);
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });
});
