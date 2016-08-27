import React from 'react';
import { mount } from 'enzyme';

import { ObjectHome } from '../ObjectHome';

jest.unmock('../ObjectHome');

describe('<ObjectHome />', () => {
  let mounted;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

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

  it('opens the menu on headline click', () => {
    const headline = mounted.find('h1').first();
    const dropdown = mounted.find('div.slds-dropdown-trigger').first();
    expect(dropdown.hasClass('slds-is-open')).toBeFalsy();
    headline.simulate('click');
    expect(dropdown.hasClass('slds-is-open')).toBeTruthy();
  });

  it('contains the title', () => {
    expect(mounted.find('h1').first().text()).toEqual('foo');
  });

  it('contains the titleMenu', () => {
    expect(mounted.find('div.slds-dropdown-trigger').first().text()).toEqual('test123');
  });

  it('contains the recordType', () => {
    expect(mounted.find('p.slds-text-heading--label').first().text()).toEqual('unicornz');
  });

  it('contains topButtons', () => {
    expect(mounted
      .find('div.slds-grid')
      .first()
      .children()
      .at(1)
      .text())
      .toEqual('button098');
  });

  it('contains info', () => {
    expect(mounted.find('p.slds-text-body--small').text()).toEqual('yeah');
  });

  it('contains bottomButtons', () => {
    expect(mounted
      .find('div.slds-grid')
      .at(4)
      .children()
      .at(1)
      .text())
      .toEqual('button1234');
  });
});
