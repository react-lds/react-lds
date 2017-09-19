import React from 'react';
import { mount } from 'enzyme';

import FieldLevelHelp from '../FieldLevelHelp';

describe('<FieldLevelHelp />', () => {
  let props = {};
  let mounted = null;

  beforeEach(() => {
    props = {
      onClick: () => {},
      tooltip: 'tooltip'
    };
    mounted = mount(<FieldLevelHelp {...props} />);
  });

  it('renders the correct markup', () => {
    expect(mounted.hasClass('slds-form-element__icon')).toBeTruthy();
  });

  it('renders the tooltip on the button', () => {
    expect(mounted.find('button').props('tooltip')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-form-element__icon').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-form-element__icon').prop('data-test')).toEqual('bar');
  });

  it('attaches an onClick handler', () => {
    const fn = jest.fn();
    mounted.setProps({ onClick: fn });
    mounted.find('button').simulate('click');
    expect(fn).toBeCalled();
  });
});
