import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ChatListItemMessage from './ChatListItemMessage';
import ChatListItemEvent from './ChatListItemEvent';
import ChatListItemBookend from './ChatListItemBookend';
import { CHAT_ITEM_TYPES } from './utils';

const ChatListItem = (props) => {
  const {
    isPastChat,
    type,
  } = props;

  const isEnd = type === CHAT_ITEM_TYPES.EVENT_STOP;
  const isStart = type === CHAT_ITEM_TYPES.EVENT_START;
  const isBookend = isStart || isEnd;
  const isError = type === CHAT_ITEM_TYPES.EVENT_ERROR;
  const isEvent = type === CHAT_ITEM_TYPES.EVENT || isError;

  function getListItemCssClass() {
    if (isBookend) return 'bookend';
    if (isEvent) return 'event';
    if (type === CHAT_ITEM_TYPES.MESSAGE_OUTBOUND
      || type === CHAT_ITEM_TYPES.MESSAGE_DELIVERY_FAILURE
      || type === CHAT_ITEM_TYPES.MESSAGE_OUTBOUND_AGENT
    ) return 'outbound';

    return 'inbound';
  }

  const classNamesItem = cx([
    'slds-chat-listitem',
    { [`slds-chat-listitem_${getListItemCssClass()}`]: isBookend || !isPastChat },
  ]);

  const renderListItem = () => {
    if (isEvent) return <ChatListItemEvent {...props} isError={isError} />;
    if (isBookend) {
      return <ChatListItemBookend {...props} isEnd={isEnd} />;
    }

    return <ChatListItemMessage {...props} />;
  };

  return (
    <li className={classNamesItem}>
      {renderListItem()}
    </li>
  );
};

ChatListItem.propTypes = {
  isPastChat: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(Object.values(CHAT_ITEM_TYPES)).isRequired,
};

export default ChatListItem;
