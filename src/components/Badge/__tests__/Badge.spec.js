jest.unmock('../Badge');

import React from 'react';
import { mount } from 'enzyme';
import Badge from '../Badge';

describe('<Badge />', () => {
  it('renders a label', () => {
    const mounted = mount(<Badge label="Foo" />);
    expect(mounted.find('.badge').text()).toBe('Foo');
  });
});
