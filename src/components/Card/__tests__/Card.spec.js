jest.unmock('../Card');

import React from 'react';
import { mount } from 'enzyme';
import Card from '../Card';

describe('<Card />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/assets' };
  const childContextTypes = { assetBasePath: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      icon: 'contact',
      sprite: 'standard',
      header: 'Base Card',
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
    expect(mounted.find('span.text-heading--small').first().text()).toEqual(props.header);
  });

  it('renders headerRight', () => {
    expect(mounted.find('div.no-flex').first().text()).toEqual(props.headerRight);
  });

  it('renders body', () => {
    expect(mounted.find('div.card__body').first().text()).toEqual(props.body);
  });

  it('renders footer', () => {
    expect(mounted.find('div.card__footer').first().text()).toEqual(props.footer);
  });
});
