import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import { Picklist } from '../Picklist';

describe('</Picklist />', () => {
  let mounted = null;
  let props = {};
  let callback = jest.fn();

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: PropTypes.string, cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    callback = jest.fn();

    props = {
      label: 'Label',
      items: [{
        key: '1',
        label: 'first',
        selected: false,
      }, {
        key: '2',
        label: 'second',
        selected: true,
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
    const first = mounted.find('li > a').first();
    first.simulate('click');
    expect(callback.mock.calls[0][0]).toEqual('1');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-dropdown').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-dropdown').prop('data-test')).toEqual('bar');
  });
});
