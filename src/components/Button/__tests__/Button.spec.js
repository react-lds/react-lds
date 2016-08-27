jest.unmock('../Button');

import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../Button';

describe('<Button />', () => {
  let props = {};
  let mounted = null;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {};
    mounted = shallow(<Button {...props} />, options);
  });


  it('renders the correct markup', () => {
    expect(mounted.hasClass('slds-button')).toBeTruthy();
  });

  it('renders children', () => {
    const child = <div className="foo" />;
    mounted.setProps({ children: child });
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders a title', () => {
    mounted.setProps({ title: 'Title' });
    expect(mounted.text()).toEqual('Title');
  });

  it('renders a value', () => {
    mounted.setProps({ value: 'Value' });
    expect(mounted.prop('value')).toEqual('Value');
  });

  it('renders as selected', () => {
    mounted.setProps({ selected: true });
    expect(mounted.hasClass('slds-is-selected')).toBeTruthy();
  });

  it('renders as disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.prop('disabled')).toBeTruthy();
  });

  it('attaches an onClick handler', () => {
    const fn = jest.fn();
    mounted.setProps({ onClick: fn });
    mounted.simulate('click');
    expect(fn).toBeCalled();
  });
});
