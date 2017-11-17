import React from 'react';
import { shallow } from 'enzyme';

import Container from '../Container';

describe('<Container />', () => {
  let mounted = null;
  const child = <span className="foo" />;

  beforeEach(() => {
    mounted = shallow(<Container>{child}</Container>);
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('div').hasClass('foo')).toBeTruthy();
    expect(mounted.find('div').prop('data-test')).toEqual('bar');
  });

  it('applies flavoring', () => {
    mounted.setProps({ flavor: 'small' });
    expect(mounted.find('.slds-container_small').length).toEqual(1);
    mounted.setProps({ flavor: ['center', 'small'] });
    expect(mounted.find('.slds-container_small').hasClass('slds-container_center')).toBeTruthy();
  });
});
