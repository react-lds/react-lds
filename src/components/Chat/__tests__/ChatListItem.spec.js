import React from 'react';
import { shallow } from 'enzyme';

import ChatListItem from '../ChatListItem';
import ChatListItemMessage from '../ChatListItemMessage';
import ChatListItemEvent from '../ChatListItemEvent';
import ChatListItemBookend from '../ChatListItemBookend';
import { CHAT_ITEM_TYPES } from '../utils';

const getComponent = (props = {}) => shallow(<ChatListItem {...props} />);

const getItem = type => ({
  author: 'Wub wub',
  isConsecutive: false,
  isFirstMessage: false,
  message: '',
  timestamp: '',
  type,
});

const testItemTypes = ({
  className,
  component,
  types,
  isPastChat = false,
}) => {
  let mounted = null;
  types.forEach((type) => {
    mounted = getComponent({ ...getItem(type), isPastChat: false });

    expect(mounted.hasClass('slds-chat-listitem')).toBeTruthy();
    if (!isPastChat) {
      expect(mounted.hasClass(`slds-chat-listitem_${className}`)).toBeTruthy();
    }
    expect(mounted.find(component).length).toBe(1);
  });
};

describe('<ChatListItem />', () => {
  it('renders <ChatListItemEvent />', () => {
    testItemTypes({
      types: [CHAT_ITEM_TYPES.EVENT, CHAT_ITEM_TYPES.EVENT_ERROR],
      component: ChatListItemEvent,
      className: 'event',
    });
  });

  it('renders <ChatListItemBookend />', () => {
    testItemTypes({
      types: [CHAT_ITEM_TYPES.EVENT_START, CHAT_ITEM_TYPES.EVENT_STOP],
      component: ChatListItemBookend,
      className: 'bookend',
    });
  });

  it('renders inbound <ChatListItemMessage />', () => {
    testItemTypes({
      types: [
        CHAT_ITEM_TYPES.MESSAGE_INBOUND,
        CHAT_ITEM_TYPES.MESSAGE_TYPING,
        CHAT_ITEM_TYPES.MESSAGE_UNSUPPORTED_TYPE,
      ],
      component: ChatListItemMessage,
      className: 'inbound',
    });
  });

  it('renders outbound <ChatListItemMessage />', () => {
    testItemTypes({
      types: [
        CHAT_ITEM_TYPES.MESSAGE_DELIVERY_FAILURE,
        CHAT_ITEM_TYPES.MESSAGE_OUTBOUND_AGENT,
        CHAT_ITEM_TYPES.MESSAGE_OUTBOUND,
      ],
      component: ChatListItemMessage,
      className: 'outbound',
    });
  });

  it('renders past <ChatListItemMessage />', () => {
    testItemTypes({
      types: [CHAT_ITEM_TYPES.MESSAGE_OUTBOUND],
      component: ChatListItemMessage,
      isPastChat: true,
    });
  });
});
