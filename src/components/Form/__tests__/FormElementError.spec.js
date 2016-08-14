jest.unmock('../FormElementError');

import React from 'react';
import { mount } from 'enzyme';
import FormElementError from '../FormElementError';

describe('<FormElementError />', () => {
  it('renders an error', () => {
    const mounted = mount(<FormElementError error="Foo" />);
    expect(mounted.find('div.form-element__help').text()).toEqual('Foo');
  });
});
