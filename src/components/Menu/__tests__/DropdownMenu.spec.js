jest.unmock('../DropdownMenu');

import React from 'react';
import DropdownMenu from '../DropdownMenu';
import { mount } from 'enzyme';

describe('<DropdownMenu />', () => {
  const context = { assetBasePath: '/assets' };
  const childContextTypes = {
    assetBasePath: React.PropTypes.string,
  };
  const options = { context, childContextTypes };

  const button = {
    icon: 'unicorn',
    sprite: 'utility',
  };

  it('is closed by default and opens when the button was clicked', () => {
    const menu = mount(<DropdownMenu button={button}>fakechilds</DropdownMenu>, options).find('div').first();
    expect(menu.hasClass('is-open')).toBeFalsy();
    menu.find('button').simulate('click');
    expect(menu.hasClass('is-open')).toBeTruthy();
  });

  it('renders buttons with border per default', () => {
    const menu = mount(<DropdownMenu button={button}>fakechilds</DropdownMenu>, options);
    expect(menu.find('button').hasClass('button--icon-border-filled')).toBeTruthy();
  });

  it('renders no border when noBorder button prop was set', () => {
    button.noBorder = true;
    const menu = mount(<DropdownMenu button={button}>fakechilds</DropdownMenu>, options);
    expect(menu.find('button').hasClass('button--icon-container')).toBeTruthy();
  });

  it('isOpen state override works', () => {
    const menu = mount(<DropdownMenu button={button} isOpen>fakechilds</DropdownMenu>, options);
    expect(menu.find('div').first().hasClass('is-open'));
  });

  it('customButtom is used when provided', () => {
    const customButton = <div>i'm a button!</div>;
    const menu = mount(<DropdownMenu customButton={customButton}>fakechilds</DropdownMenu>, options);
    expect(menu.contains(customButton)).toBeTruthy();
  });

  it('uses size class', () => {
    const menu = mount(<DropdownMenu button={button} size="small">fakechilds</DropdownMenu>, options);
    expect(menu.find('div').last().hasClass('dropdown--small')).toBeTruthy();
  });

  it('uses left class', () => {
    const menu = mount(<DropdownMenu button={button} position="top-left">fakechilds</DropdownMenu>, options);
    expect(menu.find('div').last().hasClass('dropdown--left')).toBeTruthy();
  });

  it('uses right class', () => {
    const menu = mount(<DropdownMenu button={button} position="top-right">fakechilds</DropdownMenu>, options);
    expect(menu.find('div').last().hasClass('dropdown--right')).toBeTruthy();
  });

  it('uses bottom class', () => {
    const menu = mount(<DropdownMenu button={button} position="bottom-right">fakechilds</DropdownMenu>, options);
    expect(menu.find('div').last().hasClass('dropdown--bottom')).toBeTruthy();
  });

  it('uses nubbin class', () => {
    const menu = mount(<DropdownMenu button={button} position="bottom-right" nubbin>fakechilds</DropdownMenu>,
      { context });
    expect(menu.find('div').last().hasClass('nubbin--bottom-right')).toBeTruthy();
  });
});
