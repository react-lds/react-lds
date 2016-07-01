jest.unmock('../Card');

import React from 'react';
import { mount } from 'enzyme';
import Card from '../Card';

describe('<Card />', () => {
  const context = { assetBasePath: '/assets' };
  const childContextTypes = {
    assetBasePath: React.PropTypes.string,
  };
  const options = { context, childContextTypes };

  const mounted = mount(
    <Card
      icon="contact"
      sprite="standard"
      header="Base Card"
      headerRight="Right Header"
      body="Body would be here"
      footer="Footer"
    />, options
  );

  it('renders the icon', () => {
    expect(mounted.find('svg').length).toEqual(1);
  });

  it('renders the header', () => {
    expect(mounted.find('span.text-heading--small').first().text()).toEqual('Base Card');
  });

  it('renders headerRight', () => {
    expect(mounted.find('div.no-flex').first().text()).toEqual('Right Header');
  });

  it('renders body', () => {
    expect(mounted.find('div.card__body').first().text()).toEqual('Body would be here');
  });

  it('renders footer', () => {
    expect(mounted.find('div.card__footer').first().text()).toEqual('Footer');
  });
});
