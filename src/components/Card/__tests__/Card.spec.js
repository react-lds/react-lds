import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import Card from '../Card';
import { Icon } from '../../..';

describe('<Card />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/' };
  const childContextTypes = { assetBasePath: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      boundary: true,
      icon: <Icon icon="contact" sprite="standard" />,
      title: 'Base Card',
      headerRight: 'Right Header',
      children: 'Body',
      footer: 'footer',
    };

    mounted = mount(
      <Card {...props} />, options
    );
  });

  it('renders the icon', () => {
    expect(mounted.find(Icon).exists()).toBeTruthy();
  });

  it('renders the header', () => {
    expect(mounted.find('h2').first().text()).toEqual(props.title);
  });

  it('renders headerRight', () => {
    expect(mounted.find('div.slds-no-flex').first().text()).toEqual(props.headerRight);
  });

  it('renders body', () => {
    expect(mounted.find('div.slds-card__body').first().text()).toEqual(props.children);
  });

  it('renders footer', () => {
    expect(mounted.find('footer.slds-card__footer').first().text()).toEqual(props.footer);
  });

  it('allows passing boundary flag', () => {
    expect(mounted.find('.slds-card').hasClass('slds-card_boundary')).toBeTruthy();
  });


  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-card').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-card').prop('data-test')).toEqual('bar');
  });
});
