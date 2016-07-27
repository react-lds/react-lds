jest.unmock('../Pill');

import React from 'react';
import { Pill } from '../';
import { Icon, Avatar } from '../../../';
import { mount } from 'enzyme';

describe('<PillContainer />', () => {
  let props = {};
  let mounted = null;

  beforeEach(() => {
    props = {
      title: 'A title',
      label: 'A label',
    };
    mounted = mount(
      <Pill {...props} />
    );
  });

  it('should render as a <span> when no url is passed', () => {
    expect(mounted.find('span.pill__label').length).toBe(1);
  });

  it('should render as an <a> when an url is passed', () => {
    mounted.setProps({ url: '#foo' });
    expect(mounted.find('a.pill__label').length).toBe(1);
  });

  it('should render a close-button', () => {
    expect(mounted.find('button.pill__remove').length).toBe(1);
  });

  it('should render a label', () => {
    expect(mounted.find('.pill__label').text()).toEqual(props.label);
  });

  it('should render a title-attribute', () => {
    expect(mounted.find('.pill__label').props().title).toEqual(props.title);
  });

  it('should render a portrait', () => {
    const portrait = (<Avatar src="foo" />);
    mounted.setProps({ portrait });
    expect(mounted.find('.pill__icon').length).toBe(1);
  });

  it('should render an icon', () => {
    const icon = (<Icon icon="foo" sprite="bar" />);
    mounted.setProps({ icon });
    expect(mounted.find('.pill__icon_container').length).toBe(1);
  });
});
