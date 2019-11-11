import React from 'react';
import PropTypes from 'prop-types';
import { get, uniqueId } from 'lodash-es';
import cx from 'classnames';

import { CHAT_ITEM_TYPES } from './utils';
import ChatListItem from './ChatListItem';

const Chat = ({
  className,
  isPastChat,
  items,
}) => {
  const sectionClassNames = cx([
    'slds-chat',
    { 'slds-chat_past': isPastChat },
    className,
  ]);

  return (
    <section role="log" className={sectionClassNames}>
      <ul className="slds-chat-list">
        {items.map((message, i) => {
          const {
            author: messageAuthor,
            type: messageType,
          } = message;
          let isConsecutive = false;
          let isFirstMessage = false;

          const { author: prevAuthor, isStart: prevIsStart } = get(items, [i - 1], {});
          const { author: nextAuthor, type: nextType } = get(items, [i + 1], {});

          if (!isPastChat && messageType === nextType && messageAuthor === nextAuthor) {
            isConsecutive = true;
          }

          isFirstMessage = prevIsStart || prevAuthor !== messageAuthor;

          return (
            <ChatListItem
              isConsecutive={isConsecutive}
              isFirstMessage={isFirstMessage}
              isPastChat={isPastChat}
              key={uniqueId('chat-list-item-')}
              {...message}
            />
          );
        })}
      </ul>
    </section>
  );
};

Chat.defaultProps = {
  className: null,
  isPastChat: false,
};

Chat.propTypes = {
  className: PropTypes.string,
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
