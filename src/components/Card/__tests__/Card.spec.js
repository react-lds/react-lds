import React from 'react';
import { mount } from 'enzyme';

import Card from '../Card';

describe('<Card />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      icon: 'contact',
      sprite: 'standard',
      title: 'Base Card',
      headerRight: 'Right Header',
      body: 'Body',
      footer: 'footer',
    };

    mounted = mount(
      <Card {...props} />, options);
  });

  it('renders the icon', () => {
    expect(mounted.find('svg').length).toEqual(1);
  });

  it('renders the header', () => {
    expect(mounted.find('h2 span.slds-text-heading--small').first().text()).toEqual(props.title);
  });

  it('renders headerRight', () => {
    expect(mounted.find('div.slds-no-flex').first().text()).toEqual(props.headerRight);
  });

  it('renders body', () => {
    expect(mounted.find('div.slds-card__body').first().text()).toEqual(props.body);
  });

  it('renders footer', () => {
    expect(mounted.find('div.slds-card__footer').first().text()).toEqual(props.footer);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-card').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-card').prop('data-test')).toEqual('bar');
  });
});
