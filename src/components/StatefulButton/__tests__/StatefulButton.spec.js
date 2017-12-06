import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import StatefulButton from '../StatefulButton';

describe('<StatefulButton />', () => {
  let props = {};
  let mounted = null;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      onClick: () => {},
      stateNotSelected: {
        icon: 'add',
        sprite: 'utility',
        title: 'Follow',
      },
      stateSelected: {
        icon: 'check',
        sprite: 'utility',
        title: 'Following',
      },
      stateSelectedFocus: {
        icon: 'close',
        sprite: 'utility',
        title: 'Unfollow',
      },
    };
    mounted = shallow(<StatefulButton {...props} />, options);
  });


  it('renders the correct markup', () => {
    expect(mounted.hasClass('slds-button')).toBeTruthy();
  });

  it('renders a <span/> for state "not selected"', () => {
    const child = mounted.find('span.slds-text-not-selected');
    expect(child.length).toEqual(1);
    expect(child.find('ButtonIcon').length).toEqual(1);
    expect(child.text()).toMatch(/Follow$/);
  });

  it('renders a <span/> for state "selected"', () => {
    const child = mounted.find('span.slds-text-selected');
    expect(child.length).toEqual(1);
    expect(child.find('ButtonIcon').length).toEqual(1);
    expect(child.text()).toMatch(/Following$/);
  });

  it('renders a <span/> for state "selected" focussed/on-hover', () => {
    const child = mounted.find('span.slds-text-selected-focus');
    expect(child.length).toEqual(1);
    expect(child.find('ButtonIcon').length).toEqual(1);
    expect(child.text()).toMatch(/Unfollow$/);
  });

  it('renders as disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.prop('disabled')).toBeTruthy();
  });

  it('renders the tooltip', () => {
    mounted.setProps({ tooltip: 'horf borf' });
    expect(mounted.prop('title')).toEqual('horf borf');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-button').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-button').prop('data-test')).toEqual('bar');
  });

  describe('onClick handler', () => {
    let fn;

    beforeEach(() => {
      fn = jest.fn();
      mounted.setProps({ onClick: fn });
    });

    it('is attached', () => {
      mounted.simulate('click');
      expect(fn).toBeCalled();
    });

    it('receives the right value when the button is unselected', () => {
      mounted.simulate('click');
      expect(fn).toBeCalledWith(true);
    });

    it('receives the right value when the button is unselect', () => {
      mounted.setProps({ selected: true });
      mounted.simulate('click');
      expect(fn).toBeCalledWith(false);
    });

    it('applies flavoring', () => {
      mounted.setProps({ flavor: 'brand' });
      expect(mounted.find('.slds-button').hasClass('slds-button_brand')).toBeTruthy();
    });
  });
});
