import React from 'react';
import { shallow } from 'enzyme';

import FormElementError from '../FormElementError';

jest.unmock('../FormElementError');

describe('<FormElementError />', () => {
  let mounted = null;
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<FormElementError error="Foo" />, options);
  });

  it('renders an error', () => {
    expect(mounted.find('div.slds-form-element__help').text()).toEqual('Foo');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-form-element__help').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-form-element__help').prop('data-test')).toEqual('bar');
  });
});
