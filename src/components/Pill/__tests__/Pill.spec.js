jest.unmock('../Pill');

import React from 'react';
import { Pill } from '../Pill';
import { Icon, Avatar } from '../../../';
import { shallow } from 'enzyme';

describe('<Pill />', () => {
  let props = {};
  let mounted = null;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      title: 'A title',
      label: 'A label',
    };
    mounted = shallow(<Pill {...props} />, options);
  });

  it('renders as a <span> when no url is passed', () => {
    expect(mounted.find('span.slds-pill__label').length).toBe(1);
  });

  it('renders as an <a> when an url is passed', () => {
    mounted.setProps({ url: '#foo' });
    expect(mounted.find('a.slds-pill__label').length).toBe(1);
  });

  it('renders a close-button', () => {
    expect(mounted.find('.slds-pill__remove').length).toBe(1);
  });

  it('renders a label', () => {
    expect(mounted.find('.slds-pill__label').text()).toEqual(props.label);
  });

  it('renders a title-attribute', () => {
    expect(mounted.find('.slds-pill__label').props().title).toEqual(props.title);
  });

  it('renders a portrait', () => {
    const portrait = (<Avatar src="foo" />);
    mounted.setProps({ portrait });
    expect(mounted.find('.slds-pill__icon').length).toBe(1);
  });

  it('renders an icon', () => {
    const icon = (<Icon icon="delete" sprite="utility" />);
    mounted.setProps({ icon });
    expect(mounted.find('.slds-pill__icon_container').length).toBe(1);
  });
});
