jest.unmock('../FormElementError');

import React from 'react';
import { mount } from 'enzyme';
import FormElementError from '../FormElementError';

describe('<FormElementError />', () => {
  let mounted = null;
  let props = {};

  beforeEach(() => {
    props = {
      error: 'This field is required',
    };

    mounted = mount(
      <FormElementError {...props} />,
      { context: { assetBasePath: '/' }, childContextTypes: { assetBasePath: React.PropTypes.string } }
    );
  });

  it('renders the error', () => {
    expect(mounted.find('div.form-element__help').text()).toEqual(props.error);
  });
});
