jest.unmock('../FormElementControl');

import React from 'react';
import { mount } from 'enzyme';
import FormElementControl from '../FormElementControl';

describe('<FormElementControl />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(
      <FormElementControl><div className="foo"></div></FormElementControl>,
      { context: { assetBasePath: '/' }, childContextTypes: { assetBasePath: React.PropTypes.string } }
    );
  });

  it('renders children', () => {
    expect(mounted.find('.foo').length).toBe(1);
  });
});
