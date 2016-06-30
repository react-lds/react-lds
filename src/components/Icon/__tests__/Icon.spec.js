jest.unmock('../Icon');

import React from 'react';
import { mount } from 'enzyme';
import Icon from '../Icon';

describe('<Icon />', () => {
  it('wraps the icon in an `slds-icon_container`', () => {
    const icon = mount(<Icon sprite="standard" icon="account" />);
    expect(icon.find('.icon_container').length).toBe(1);
  });

  it('does displays a square background as default', () => {
    const icon = mount(<Icon sprite="standard" icon="account" />);
    expect(icon.find('.icon_container').hasClass('icon_container--circle')).toBeFalsy();
  });

  it('supports circular backgrounds', () => {
    const icon = mount(<Icon sprite="standard" icon="account" circle />);
    expect(icon.find('.icon_container').hasClass('icon_container--circle')).toBeTruthy();
  });

  it('can have a title for accessebility purposes', () => {
    const icon = mount(<Icon sprite="standard" icon="account" title="foobar" />);
    expect(icon.find('[title="foobar"]').length).toBe(1);
  });

  it('defaults to an `span` container', () => {
    const icon = mount(<Icon sprite="standard" icon="account" />);
    expect(icon.find('.icon_container').is('span')).toBeTruthy();
  });

  it('supports also `div` containers', () => {
    const icon = mount(<Icon sprite="standard" icon="account" div />);
    expect(icon.find('.icon_container').is('div')).toBeTruthy();
  });

  it('sets the default icon background', () => {
    const icon = mount(<Icon sprite="action" icon="foo_bar" />);
    expect(icon.find('.icon_container').hasClass('icon-action-foo-bar')).toBeTruthy();
  });

  it('allows a background override', () => {
    const icon = mount(<Icon sprite="standard" icon="account" background="custom-custom90" />);
    expect(icon.find('.icon_container').hasClass('icon-custom-custom90')).toBeTruthy();
  });
});
