import React from 'react';
import { mount } from 'enzyme';
import Tile from '../Tile';
import { MediaObject } from '../../MediaObject';
import { Grid } from '../../Grid';

const getComponent = (props = {}) => mount(
  <Tile title={<a>Foo</a>} {...props}>
    Foo
  </Tile>
);

describe('<Tile />', () => {
  it('renders as `element` when no figure is present', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-tile').hasClass('slds-media')).toBeFalsy();
  });

  it('renders as MediaObject if `figure` is present', () => {
    const mounted = getComponent({ figure: <p>Foo</p> });
    expect(mounted.find(MediaObject).hasClass('slds-tile')).toBeTruthy();
  });

  it('renders `title` directly if no `action` is passed', () => {
    const mounted = getComponent();
    expect(mounted.find(Grid).find('.slds-tile__title').exists()).toBeFalsy();
  });

  it('renders `title` and `action` in a `Grid` if `action` is passed', () => {
    const mounted = getComponent({ action: <a>Action</a> });
    expect(mounted.find(Grid).find('.slds-tile__title').exists()).toBeTruthy();
  });

  it('renders string `title`s as `title` attr', () => {
    const mounted = getComponent({ title: 'baz' });
    expect(mounted.find('.slds-tile__title').prop('title')).toEqual('baz');
  });

  it('renders node `title`s with `titleText` as `title` attr ', () => {
    const mounted = getComponent({ title: <a>baz</a>, titleText: 'bar' });
    expect(mounted.find('.slds-tile__title').prop('title')).toEqual('bar');
  });
});
