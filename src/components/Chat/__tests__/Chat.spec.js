import React from 'react';
import { shallow } from 'enzyme';

import Chat from '../Chat';
import ChatListItem from '../ChatListItem';
import { CHAT_ITEM_TYPES } from '../utils';

/* eslint-disable react/jsx-one-expression-per-line */

describe('<Chat />', () => {
  let mounted = null;
  const items = [
    {
      id: '0',
      message: 'Start',
      timestamp: '11:39 AM',
      type: 'event_start'
    },
    {
      author: 'Andy Martinez',
      id: '1',
      message: 'Foo',
      timestamp: '11:15 AM',
      type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
    },
    {
      author: 'Jason Dewar',
      id: '2',
      message: 'Bar',
      timestamp: '11:16 AM',
      type: CHAT_ITEM_TYPES.MESSAGE_OUTBOUND,
    },
    {
      author: 'Jason Dewar',
      id: '3',
      message: 'Foo',
      timestamp: '11:17 AM',
      type: CHAT_ITEM_TYPES.MESSAGE_OUTBOUND,
    },
  ];

  beforeEach(() => {
    mounted = shallow(<Chat items={items} />);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('section.slds-chat > .slds-chat-list').length).toBe(1);
  });

  it('renders chat items', () => {
    expect(mounted.find(ChatListItem).length).toBe(4);
  });

  it('passes on correct isConsecutive and isFirstMessage props', () => {
    expect(mounted.find(ChatListItem).at(1).prop('isFirstMessage')).toBeTruthy();
    expect(mounted.find(ChatListItem).at(1).prop('isConsecutive')).toBeFalsy();
    expect(mounted.find(ChatListItem).at(2).prop('isConsecutive')).toBeTruthy();
    expect(mounted.find(ChatListItem).at(2).prop('isFirstMessage')).toBeTruthy();
    expect(mounted.find(ChatListItem).at(3).prop('isFirstMessage')).toBeFalsy();
    expect(mounted.find(ChatListItem).at(3).prop('isConsecutive')).toBeFalsy();
  });

  it('applies className, isPastChat and translations', () => {
    const customTranslations = {
      said: '',
      at: '',
      resend: '',
    };

    mounted.setProps({
      className: 'foo',
      isPastChat: true,
      translations: customTranslations,
    });

    const chat = mounted.find('section');

    expect(chat.hasClass('foo')).toBeTruthy();
    expect(chat.hasClass('slds-chat_past')).toBeTruthy();
    expect(mounted.find(ChatListItem).at(0).prop('translations')).toEqual(customTranslations);
  });
});
