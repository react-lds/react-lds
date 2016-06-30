jest.unmock('../ObjectHome');

import React from 'react';
import { mount } from 'enzyme';
import ObjectHome from '../ObjectHome';

describe('<ObjectHome />', () => {
  const childContextTypes = {
    assetBasePath: React.PropTypes.string,
  };
  const context = { assetBasePath: '/assets' };
  const options = { context, childContextTypes };
  let mounted;

  beforeEach(() => {
    mounted = mount(
      <ObjectHome
        title="foo"
        titleMenu="test123"
        recordType="unicornz"
        info="yeah"
        topButtons="button098"
        bottomButtons="button1234"
      />,
    options);
  });

  it('click on the headline opens the menu', () => {
    const headline = mounted.find('h1').first();
    const dropdown = mounted.find('div.dropdown-trigger').first();
    expect(dropdown.hasClass('is-open')).toBeFalsy();
    headline.simulate('click');
    expect(dropdown.hasClass('is-open')).toBeTruthy();
  });

  it('contains the title', () => {
    expect(mounted.find('h1').first().text()).toEqual('foo');
  });

  it('contains the titleMenu', () => {
    expect(mounted.find('div.dropdown-trigger').first().text()).toEqual('test123');
  });

  it('contains the recordType', () => {
    expect(mounted.find('p.text-heading--label').first().text()).toEqual('unicornz');
  });

  it('contains topButtons', () => {
    expect(mounted
      .find('div.grid')
      .first()
      .children()
      .at(1)
      .text())
      .toEqual('button098');
  });

  it('contains info', () => {
    expect(mounted.find('p.text-body--small').text()).toEqual('yeah');
  });

  it('contains bottomButtons', () => {
    expect(mounted
      .find('div.grid')
      .at(4)
      .children()
      .at(1)
      .text())
      .toEqual('button1234');
  });
});
