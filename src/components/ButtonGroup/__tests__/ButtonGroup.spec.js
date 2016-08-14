jest.unmock('../ButtonGroup');
jest.unmock('../../Button/Button');

import React from 'react';
import { mount } from 'enzyme';
import ButtonGroup from '../ButtonGroup';
import Button from '../../Button/Button';

describe('<ButtonGroup />', () => {
  it('renders the correct markup', () => {
    const child = <Button title="foobar" variation="neutral" />;
    const mounted = mount(<ButtonGroup>{child}</ButtonGroup>);

    expect(mounted.find('div').hasClass('button-group')).toBeTruthy();
    expect(mounted.find('div').contains(child)).toBeTruthy();
  });
});
