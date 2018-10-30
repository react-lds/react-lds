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
    mounted.setProps({ flavor: 'left' });
    expect(mounted.find('.slds-container_left').length).toEqual(1);
    mounted.setProps({ flavor: ['center', 'fluid'] });
    expect(mounted.find('.slds-container_fluid').hasClass('slds-container_center')).toBeTruthy();
  });

  it('applies sizing', () => {
    mounted.setProps({ size: 'small' });
    expect(mounted.find('div').hasClass('slds-container_small')).toBeTruthy();
  });

  it('renders as arbitrary DOM node', () => {
    mounted.setProps({ as: 'footer', flavor: 'left' });
  expect(mounted.find('footer.slds-container_left').exists()).toBeTruthy();
  });
});
