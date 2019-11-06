import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash-es';
import cx from 'classnames';

import { uniqueId } from '../../utils';
import { CHAT_ITEM_TYPES } from './utils';
import ChatListItem from './ChatListItem';

const Chat = ({ isPastChat, items }) => {
  const sectionClassNames = cx([
    'slds-chat',
    { 'slds-chat_past': isPastChat },
  ]);

  return (
    <section role="log" className={sectionClassNames}>
      <ul className="slds-chat-list">
        {items.map((message, i) => {
          const { author: messageAuthor, messageType } = message;
          let isConsecutive = false;
          let isFirstMessage = false;

          const { author: prevAuthor, isStart: prevIsStart } = get(items, [i - 1], {});
          const { author: nextAuthor, messageType: nextType } = get(items, [i + 1], {});

          if (!isPastChat && messageType === nextType && messageAuthor === nextAuthor) {
            isConsecutive = true;
          }

          isFirstMessage = prevIsStart || prevAuthor !== messageAuthor;

          const otherProps = {
            isConsecutive,
            isFirstMessage,
            isPastChat,
          };

          return <ChatListItem key={uniqueId(i, 'chat-list-item-')} {...message} {...otherProps} />;
        })}
      </ul>
    </section>
  );
};

Chat.defaultProps = {
  isPastChat: false,
};

Chat.propTypes = {
  isPastChat: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    messageType: PropTypes.oneOf(Object.values(CHAT_ITEM_TYPES)),
    attachment: PropTypes.shape({
      fileType: PropTypes.string.isRequired,
      isLink: PropTypes.bool,
      meta: PropTypes.string,
      src: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
    message: PropTypes.node,
  })).isRequired,
};

export default Chat;
