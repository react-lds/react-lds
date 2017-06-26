import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from '../ButtonGroup';
import { Button } from '../../Button/Button';

describe('<ButtonGroup />', () => {
  let mounted = null;
  const child = <Button title="foobar" neutral onClick={() => {}} />;

  beforeEach(() => {
    mounted = shallow(<ButtonGroup>{child}</ButtonGroup>);
  });

  it('renders the correct markup', () => {
    expect(mounted.hasClass('slds-button-group')).toBeTruthy();
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-button-group').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-button-group').prop('data-test')).toEqual('bar');
  });
});
