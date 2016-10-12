import React from 'react';
import { shallow } from 'enzyme';

import { getUniqueHash } from '../../../utils';
import FormElementError from '../FormElementError';

describe('<FormElementError />', () => {
  let mounted = null;
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<FormElementError error="Foo" id="Bar" />, options);
  });

  it('renders an error', () => {
    expect(mounted.find('div.slds-form-element__help').text()).toEqual('Foo');
  });

  it('applies an id set to the hash of the ', () => {
    expect(mounted.find('div.slds-form-element__help').prop('id')).toEqual(getUniqueHash('Foo', 'Bar'));
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-form-element__help').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-form-element__help').prop('data-test')).toEqual('bar');
  });
});
