import React from 'react';
import PropTypes from 'prop-types';
import { mount, shallow } from 'enzyme';

import {
  Avatar,
  BaseAvatar,
  EntityAvatar,
  UserAvatar,
  getInitials,
} from '../Avatar';
import { Icon } from '../../Icon';

describe('getInitials()', () => {
  it('returns an empty string when passed an empty string or a non-string argument', () => {
    expect(getInitials({})).toEqual('');
    expect(getInitials(null)).toEqual('');
    expect(getInitials('')).toEqual('');
  });

  it('returns an empty string when passed a string without words', () => {
    expect(getInitials(', ? !')).toEqual('');
  });

  it('returns uppercased initials when two words or more are passed', () => {
    expect(getInitials('John Doe')).toEqual('JD');
    expect(getInitials('JohnDoe')).toEqual('JD');
    expect(getInitials('John Doe Jr.')).toEqual('JD');
  });

  it('returns titleCased initials when one word is passed', () => {
    expect(getInitials('John')).toEqual('Jo');
  });
});

describe('<BaseAvatar />', () => {
  const sampleChild = <p>Sample</p>;

  const getComponent = (props = {}) => shallow(
    <BaseAvatar {...props} renderFallback={() => sampleChild} />
  );

  it('renders an image if present', () => {
    const mounted = getComponent({ image: sampleChild });
    expect(mounted.find('.slds-avatar').contains(sampleChild)).toBeTruthy();
  });

  it('renders a fallback if not', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-avatar').contains(sampleChild)).toBeTruthy();
  });

  it('renders different size variants', () => {
    const mounted = getComponent({ size: 'large' });
    expect(mounted.find('.slds-avatar').hasClass('slds-avatar_large')).toBeTruthy();
  });

  it('renders a rounded variant', () => {
    const mounted = getComponent({ round: true });
    expect(mounted.find('.slds-avatar').hasClass('slds-avatar_circle')).toBeTruthy();
  });

  it('applies rest props and classnames to span', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const avatar = mounted.find('.slds-avatar');
    expect(avatar.hasClass('foo')).toBeTruthy();
    expect(avatar.prop('aria-hidden')).toBeTruthy();
  });
});

describe('<EntityAvatar />', () => {
  const getComponent = (props = {}) => mount(
    <EntityAvatar
      name="Account"
      icon={{ icon: 'account', sprite: 'standard' }}
      {...props}
    />
  );

  it('renders an icon by default', () => {
    const mounted = getComponent();
    expect(mounted.find(Icon).prop('icon')).toEqual('account');
  });

  it('renders initials', () => {
    const mounted = getComponent({ displayType: 'initials' });
    expect(mounted.find('abbr').hasClass('slds-avatar__initials')).toBeTruthy();
  });

  it('passes props to BaseAvatar', () => {
    const mounted = getComponent({ className: 'foo', round: true });
    const baseAvatar = mounted.find(BaseAvatar);
    expect(baseAvatar.prop('image')).toBeNull();
    expect(baseAvatar.prop('className')).toEqual('foo');
    expect(baseAvatar.prop('round')).toBeTruthy();
  });
});

describe('<UserAvatar />', () => {
  const getComponent = (props = {}) => mount(
    <UserAvatar name="John Doe" {...props} />
  );

  it('renders an image when imageSrc is set', () => {
    const mounted = getComponent({ imageSrc: 'foo' });
    expect(mounted.find('img').exists()).toBeTruthy();
  });

  it('renders css image fallbacks', () => {
    const expectClass = (cmp, className) => {
      const avatar = cmp.find('.slds-avatar');
      expect(avatar.hasClass(className)).toBeTruthy();
    };

    const mounted = getComponent({ fallbackType: 'profile-image' });
    expect(mounted.find('.slds-avatar').prop('title')).toEqual('John Doe');
    expectClass(mounted, 'slds-avatar_profile-image-large');
    mounted.setProps({ fallbackType: 'group-image' });
    expectClass(mounted, 'slds-avatar_group-image-large');
  });

  it('renders an icon fallback', () => {
    const mounted = getComponent({ fallbackType: 'icon', round: false });
    expect(mounted.find(BaseAvatar).prop('round')).toBeTruthy();
    const icon = mounted.find(Icon);
    expect(icon.prop('icon')).toEqual('user');
    expect(icon.prop('title')).toEqual('John Doe');
  });

  it('renders initials fallbacks', () => {
    const expectClass = (cmp, className) => {
      expect(cmp.find('.slds-avatar__initials').hasClass(className)).toBeTruthy();
    };
    const mounted = getComponent({ fallbackType: 'initials', round: false });
    expect(mounted.find(BaseAvatar).prop('round')).toBeTruthy();
    expectClass(mounted, 'slds-icon-standard-user');
    mounted.setProps({ fallbackType: 'initials-inverse' });
    expectClass(mounted, 'slds-avatar__initials_inverse');
  });


  it('allows to set title, falls back to name', () => {
    const expectTitle = (cmp, title) => {
      expect(cmp.find('img').prop('title')).toEqual(title);
    };

    const mounted = getComponent({ imageSrc: 'foo' });
    expectTitle(mounted, 'John Doe');
    mounted.setProps({ title: 'foo' });
    expectTitle(mounted, 'foo');
  });

  it('passes props to BaseAvatar', () => {});
});

describe('<Avatar />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/' };
  const childContextTypes = { assetBasePath: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      src: 'foo',
      alt: 'bar',
      title: 'myTitle'
    };

    mounted = shallow(<Avatar {...props} />, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-avatar').length).toBe(1);
    expect(mounted.find('img').length).toBe(1);
  });

  it('renders different sizes', () => {
    mounted.setProps({ size: 'large' });
    expect(mounted.find('.slds-avatar').first().hasClass('slds-avatar_large')).toBeTruthy();
  });

  it('renders a src', () => {
    expect(mounted.find('img').first().props().src).toBe(props.src);
  });

  it('renders an alt', () => {
    expect(mounted.find('img').first().props().alt).toBe(props.alt);
  });

  it('renders a title', () => {
    expect(mounted.find('img').first().props().title).toBe(props.title);
  });

  it('renders an empty avatar', () => {
    mounted.setProps({ src: undefined, alt: undefined });
    expect(mounted.find('img').length).toBe(0);
    expect(mounted.find('.slds-avatar').hasClass('slds-avatar_empty')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-avatar').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-avatar').prop('data-test')).toEqual('bar');
  });
});
