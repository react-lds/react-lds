import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import ButtonGroup from '../ButtonGroup';
import { Button } from '../../Button/Button';

describe('<ButtonGroup />', () => {
  let mounted = null;
  const child = <Button title="foobar" neutral />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<ButtonGroup>{child}</ButtonGroup>, options);
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
