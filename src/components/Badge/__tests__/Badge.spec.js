jest.unmock('../Badge');

import React from 'react';
import { mount } from 'enzyme';
import Badge from '../Badge';

describe('<Badge>', () => {
  it('should render a label', () => {
    const wrapper = mount(<Badge label="Foo" />);
    expect(wrapper.find('.badge').text()).toBe('Foo');
  });
});
