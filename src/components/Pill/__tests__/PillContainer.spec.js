import React from 'react';
import { shallow } from 'enzyme';

import { PillContainer } from '../PillContainer';

describe('<PillContainer />', () => {
  let mounted = null;
  const child = <div className="foo">bar</div>;

  beforeEach(() => {
    mounted = shallow(<PillContainer>{child}</PillContainer>);
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
