import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../../../';
import { File } from '../File';

const getComponent = (props = {}) => shallow(
  <File
    title="foo"
    {...props}
  />
);

describe('<File />', () => {
  it('renders a placeholder when loading', () => {
    const mounted = getComponent({ isLoading: true });
    expect(mounted.find('a').find(Icon).prop('icon')).toEqual('image');
    mounted.setProps({ hideTitle: true });
    expect(mounted.find('.slds-file').hasClass('slds-file_center-icon')).toBeTruthy();
  });

  it('renders file type icon when no image is passed', () => {
    const mounted = getComponent({ fileType: 'file' });
    expect(mounted.find('a').find(Icon).prop('icon')).toEqual('file');
  });

  it('renders an image when an image is passed', () => {
    const mounted = getComponent({ image: { src: 'foo', alt: 'bar' } });
    const $img = mounted.find('img');
    expect($img.prop('src')).toEqual('foo');
    expect($img.prop('alt')).toEqual('bar');
  });

  it('renders a caption if hideTitle is false', () => {
    const mounted = getComponent();
    expect(mounted.find('figcaption').exists()).toBeTruthy();
  });

  it('renders no caption if hideTitle is true', () => {
    const mounted = getComponent({ hideTitle: true });
    expect(mounted.find('figcaption').exists()).toBeFalsy();
  });

  it('renders an external icon', () => {
    const mounted = getComponent({ externalIcon: { icon: 'foo', sprite: 'action', title: 'bar' } });
    expect(mounted.find('.slds-file__external-icon').exists()).toBeTruthy();
  });

  it('renders actions', () => {
    const mounted = getComponent({ actions: <div className="test">Actions</div> });
    expect(mounted.find('.slds-file__actions-menu').exists()).toBeTruthy();
  });

  it('renders actions correctly when no caption is present', () => {
    const mounted = getComponent({ actions: <div className="test">Actions</div>, hideTitle: true });
    expect(mounted.find('.slds-file__actions-menu').exists()).toBeTruthy();
    expect(mounted.find('.slds-file__title').hasClass('slds-file__title_scrim')).toBeTruthy();
  });

  it('renders ratios', () => {
    const mounted = getComponent({ ratio: '1-by-1' });
    expect(mounted.find('.slds-file__crop').hasClass('slds-file__crop_1-by-1')).toBeTruthy();
  });
});
