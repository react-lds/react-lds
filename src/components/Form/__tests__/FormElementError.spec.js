jest.unmock('../FormElementError');

import React from 'react';
import { shallow } from 'enzyme';
import FormElementError from '../FormElementError';

describe('<FormElementError />', () => {
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  it('renders an error', () => {
    const mounted = shallow(<FormElementError error="Foo" />, options);
    expect(mounted.find('div.slds-form-element__help').text()).toEqual('Foo');
  });
});
