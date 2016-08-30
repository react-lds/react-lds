import React from 'react';
import { mount } from 'enzyme';

import ButtonIcon from '../ButtonIcon';

jest.unmock('../ButtonIcon');

describe('<ButtonIcon />', () => {
  let props = {};
  let mounted = null;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      sprite: 'utility',
      icon: 'foo',
    };

    mounted = mount(<ButtonIcon {...props} />, options);
  });

  it('renders an enhanced icon', () => {
    const expectedPath = `${context.assetBasePath}assets/icons/${props.sprite}-sprite/svg/symbols.svg#${props.icon}`;
    expect(mounted.find('svg').hasClass('slds-button__icon')).toBeTruthy();
    expect(mounted.find('use').prop('xlinkHref')).toEqual(expectedPath);
  });

  it('applies positions', () => {
    mounted.setProps({ position: 'left' });
    expect(mounted.find('svg').hasClass('slds-button__icon--left')).toBeTruthy();
  });

  it('applies sizes', () => {
    mounted.setProps({ size: 'small' });
    expect(mounted.find('svg').hasClass('slds-button__icon--small')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-button__icon').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-button__icon').prop('data-test')).toEqual('bar');
  });
});
