jest.unmock('../Picklist');

import React from 'react';
import { Picklist } from '../Picklist';
import { mount } from 'enzyme';

describe('</Picklist />', () => {
  let mounted = null;
  let props = {};
  let callback = jest.fn();

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    callback = jest.fn();

    props = {
      label: 'Label',
      items: [{
        key: '1',
        label: 'first',
        isSelected: false,
      }, {
        key: '2',
        label: 'second',
        isSelected: true,
      }],
      callback,
    };

    mounted = mount(<Picklist {...props} />, options);
  });

  it('renders the label', () => {
    expect(mounted.find('span').first().text()).toEqual(props.label);
  });

  it('renders all childs', () => {
    const childs = mounted.find('li');
    expect(childs.length).toBe(2);
  });

  it('correctly sets isSelected child state', () => {
    const second = mounted.find('li').at(1);
    expect(second.hasClass('slds-is-selected')).toBeTruthy();
  });

  it('executes the callback when a child was clicked', () => {
    const first = mounted.find('li').first();
    first.simulate('click');
    expect(callback.mock.calls[0][0]).toEqual('1');
  });
});
