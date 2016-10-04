import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../Icon';

describe('<Icon />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      sprite: 'standard',
      icon: 'account',
    };

    mounted = shallow(<Icon {...props} />, options);
  });


  it('wraps the icon in an `slds-icon_container`', () => {
    expect(mounted.find('.slds-icon_container').length).toBe(1);
  });

  it('renders a square background by default', () => {
    expect(mounted.find('.slds-icon_container').hasClass('slds-icon_container--circle')).toBeFalsy();
  });

  it('renders a title for accessebility purposes', () => {
    mounted.setProps({ title: 'foobar' });
    expect(mounted.find('[title="foobar"]').length).toBe(1);
  });

  it('renders a span container by default', () => {
    expect(mounted.find('.slds-icon_container').is('span')).toBeTruthy();
  });

  it('renders a div container too', () => {
    mounted.setProps({ div: true });
    expect(mounted.find('.slds-icon_container').is('div')).toBeTruthy();
  });

  it('renders a default icon background', () => {
    mounted.setProps({ sprite: 'action', icon: 'foo_bar' });
    expect(mounted.find('.slds-icon_container').hasClass('slds-icon-action-foo-bar')).toBeTruthy();
  });

  it('allows a background override', () => {
    mounted.setProps({ background: 'custom-custom90' });
    expect(mounted.find('.slds-icon_container').hasClass('slds-icon-custom-custom90')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-icon_container').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-icon_container').prop('data-test')).toEqual('bar');
  });
});
