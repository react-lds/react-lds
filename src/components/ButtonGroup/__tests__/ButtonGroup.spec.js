jest.unmock('../ButtonGroup');
jest.unmock('../../Button/Button');

import React from 'react';
import { mount } from 'enzyme';
import ButtonGroup from '../ButtonGroup';
import Button from '../../Button/Button';

describe('<ButtonGroup />', () => {
  it('correctly renders the container', () => {
    const child = <Button title="foobar" variation="neutral" />;
    const comp = mount(<ButtonGroup>{child}</ButtonGroup>);

    const wrapper = comp.find('div');
    expect(wrapper.hasClass('button-group')).toBeTruthy();
    expect(wrapper.contains(child)).toBeTruthy();
  });
});
