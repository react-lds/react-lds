jest.unmock('../Tab');

import React from 'react';
import { mount } from 'enzyme';
import Tab from '../Tab';

describe('<Tab />', () => {
  let mounted;
  let props = {};

  beforeEach(() => {
    props = {
      tabs: [
        {
          title: 'Tab 1',
          id: 'tab-1',
          content: <p>I am the first tab!</p>,
        },
        {
          title: 'Tab 2',
          id: 'tab-2',
          content: <p>I am the second tab!</p>,
        },
        {
          title: 'Tab 3',
          id: 'tab-3',
          content: <p>I am the third tab!</p>,
        },
      ],
    };

    mounted = mount(<Tab {...props} />);
  });

  it('renders the first tab initially active', () => {
    expect(mounted.find('ul > li').first().hasClass('active')).toBeTruthy();
    expect(mounted.find('#tab-1').hasClass('show')).toBeTruthy();
  });

  it('accepts a click handler', () => {
    const secondTabHeader = mounted.find('ul > li').at(1);
    const secondTabContent = mounted.find('#tab-2');

    expect(secondTabHeader.hasClass('active')).toBeFalsy();
    expect(secondTabContent.hasClass('show')).toBeFalsy();

    secondTabHeader.simulate('click');
    expect(secondTabHeader.hasClass('active')).toBeTruthy();
    expect(secondTabContent.hasClass('show')).toBeTruthy();
  });

  it('defaults to default classes', () => {
    const liItem = mounted.find('ul > li').first();
    const aItem = liItem.find('a');
    const divItem = mounted.find('#tab-1');

    expect(liItem.hasClass('tabs--default__item')).toBeTruthy();
    expect(aItem.hasClass('tabs--default__link')).toBeTruthy();
    expect(divItem.hasClass('tabs--default__content')).toBeTruthy();
  });

  it('renders scoped variation', () => {
    mounted.setProps({ variation: 'scoped' });
    const liItem = mounted.find('ul > li').first();
    const aItem = liItem.find('a');
    const divItem = mounted.find('#tab-1');

    expect(liItem.hasClass('tabs--scoped__item')).toBeTruthy();
    expect(aItem.hasClass('tabs--scoped__link')).toBeTruthy();
    expect(divItem.hasClass('tabs--scoped__content')).toBeTruthy();
  });
});
