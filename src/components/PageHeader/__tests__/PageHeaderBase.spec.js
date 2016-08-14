jest.unmock('../PageHeaderBase');

import React from 'react';
import { mount } from 'enzyme';
import PageHeaderBase from '../PageHeaderBase';

describe('<PageHeaderBase />', () => {
  let mounted;

  const context = { assetBasePath: '/assets' };
  const childContextTypes = { assetBasePath: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = mount(
      <PageHeaderBase title="test" info="foo" icon={{ sprite: 'standard', icon: 'opportunity' }} />,
      options
    );
  });

  it('contains the title', () => {
    expect(mounted.find('p.page-header__title').text()).toEqual('test');
  });

  it('contains info', () => {
    expect(mounted.find('p.text-body--small').text()).toEqual('foo');
  });

  it('renders the icon', () => {
    expect(mounted.find('svg').length).toEqual(1);
  });
});
