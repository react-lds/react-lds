import React from 'react';
import { shallow } from 'enzyme';

import { PillContainer } from '../PillContainer';

jest.unmock('../PillContainer');

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

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-pill_container').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-pill_container').prop('data-test')).toEqual('bar');
  });
});
