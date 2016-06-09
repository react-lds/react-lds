jest.unmock('../Picklist');

import React from 'react';
import Picklist from '../Picklist';
import { mount } from 'enzyme';

describe('</Picklist />', () => {
  const childContextTypes = {
    assetBasePath: React.PropTypes.string,
  };
  const context = { assetBasePath: '/assets' };
  const label = 'Do not click this!';
  const items = [{
    key: '1',
    label: 'first',
    isSelected: false,
  }, {
    key: '2',
    label: 'second',
    isSelected: true,
  }];
  let callback = jest.fn();
  let elem = null;

  beforeEach(() => {
    callback = jest.fn();
    elem = mount(<Picklist label={label} callback={callback} items={items} />, { context, childContextTypes });
  });

  it('renders the label', () => {
    expect(elem.find('span').first().text()).toEqual(label);
  });

  it('renders all childs', () => {
    const childs = elem.find('li');
    expect(childs.length).toBe(2);
  });

  it('correctly sets isSelected child state', () => {
    const second = elem.find('li').at(1);
    expect(second.hasClass('is-selected')).toBeTruthy();
  });

  it('executes the callback when a child was clicked', () => {
    const first = elem.find('li').first();
    first.simulate('click');
    expect(callback.mock.calls[0][0]).toEqual('1');
  });
});
