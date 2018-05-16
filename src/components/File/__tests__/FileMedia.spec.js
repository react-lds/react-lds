import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../../../';
import FileMedia from '../FileMedia';

const getComponent = (props = {}) => shallow(
  <FileMedia
    fileType="foo"
    isLoading={false}
    title="bar"
    image={null}
    {...props}
  />
);

describe('<FileMedia />', () => {
  it('renders an icon if no image is present', () => {
    const mounted = getComponent();
    const $icon = mounted.find(Icon);

    expect($icon.exists()).toBeTruthy();
    expect($icon.props()).toMatchObject({
      icon: 'foo',
      title: 'bar : foo',
    });
  });

  it('renders a loading indicator if isLoading is set', () => {
    const mounted = getComponent({ isLoading: true });
    const $icon = mounted.find(Icon);

    expect($icon.exists()).toBeTruthy();
    expect($icon.props()).toMatchObject({
      icon: 'image',
      svgClassName: 'slds-file__loading-icon',
      title: 'bar',
    });
  });

  it('renders an image if passed', () => {
    const img = { src: 'bar.jpg' };
    const mounted = getComponent({ image: img });
    const $img = mounted.find('img');

    expect($img.exists()).toBeTruthy();
    expect($img.props()).toMatchObject({
      src: 'bar.jpg',
      alt: 'bar',
    });
  });

  it('allows to set an alt on the image', () => {
    const img = { src: 'bar.jpg', alt: 'baz' };
    const mounted = getComponent({ image: img });
    const $img = mounted.find('img');

    expect($img.exists()).toBeTruthy();
    expect($img.props()).toMatchObject({
      src: 'bar.jpg',
      alt: 'baz',
    });
  });
});
