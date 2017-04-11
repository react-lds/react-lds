import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { Container } from '../Container';

describe('<Container />', () => {
  let mounted = null;
  const child = <span className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<Container>{child}</Container>, options);
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('div').hasClass('foo')).toBeTruthy();
    expect(mounted.find('div').prop('data-test')).toEqual('bar');
  });
});
