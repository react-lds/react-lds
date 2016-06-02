jest.unmock('../Icon');

import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';

describe('<Icon />', () => {
  it('wraps the icon in an `slds-icon_container`', () => {
    const icon = shallow(<Icon sprite="standard" icon="account" />);
    expect(icon.hasClass('slds-icon_container')).toBeTruthy();
  });

  it('does displays a square background as default', () => {
    const icon = shallow(<Icon sprite="standard" icon="account" />);
    expect(icon.hasClass('slds-icon_container--circle')).toBeFalsy();
  });

  it('supports circular backgrounds', () => {
    const icon = shallow(<Icon sprite="standard" icon="account" circle />);
    expect(icon.hasClass('slds-icon_container--circle')).toBeTruthy();
  });

  it('can have a title for accessebility purposes', () => {
    const icon = shallow(<Icon sprite="standard" icon="account" title="foobar" />);
    expect(icon.find('[title="foobar"]').length).toBe(1);
  });

  it('defaults to an `span` container', () => {
    const icon = shallow(<Icon sprite="standard" icon="account" />);
    expect(icon.is('span')).toBeTruthy();
  });

  it('supports also `div` containers', () => {
    const icon = shallow(<Icon sprite="standard" icon="account" div />);
    expect(icon.is('div')).toBeTruthy();
  });

  it('sets the default icon background', () => {
    const icon = shallow(<Icon sprite="standard" icon="account" />);
    expect(icon.hasClass('slds-icon-standard-account')).toBeTruthy();
  });

  it('allows a background override', () => {
    const icon = shallow(<Icon sprite="standard" icon="account" background="custom-custom90" />);
    expect(icon.hasClass('slds-icon-custom-custom90')).toBeTruthy();
  });
});
