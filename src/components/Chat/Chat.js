import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash-es';
import cx from 'classnames';

import { CHAT_ITEM_TYPES } from './utils';
import ChatListItem from './ChatListItem';

const DEFAULT_TRANSLATIONS = {
  at: 'at',
  resend: 'Resend',
  said: 'said',
};

const Chat = ({
  className,
  isPastChat,
  items,
  translations,
}) => {
  const sectionClassNames = cx([
    'slds-chat',
    { 'slds-chat_past': isPastChat },
    className,
  ]);

  const mergedTranslation = {
    ...DEFAULT_TRANSLATIONS,
    ...translations,
  };

  return (
    <section role="log" className={sectionClassNames}>
      <ul className="slds-chat-list">
        {items.map((item, i) => {
          const {
            author: messageAuthor,
            id,
            type,
          } = item;
          let isConsecutive = false;
          let isFirstMessage = false;

          const { author: prevAuthor, isStart: prevIsStart } = get(items, [i - 1], {});
          const { author: nextAuthor, type: nextType } = get(items, [i + 1], {});

          if (!isPastChat && type === nextType && messageAuthor === nextAuthor) {
            isConsecutive = true;
          }

          isFirstMessage = prevIsStart || prevAuthor !== messageAuthor;

          return (
            <ChatListItem
              isConsecutive={isConsecutive}
              isFirstMessage={isFirstMessage}
              isPastChat={isPastChat}
              key={`chat-list-item-${id}`}
              translations={mergedTranslation}
              {...item}
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
  translations: DEFAULT_TRANSLATIONS,
};

Chat.propTypes = {
  className: PropTypes.string,
  isPastChat: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    attachment: PropTypes.shape({
      fileType: PropTypes.string.isRequired,
      isLink: PropTypes.bool,
      src: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
    avatar: PropTypes.string,
    error: PropTypes.node,
    id: PropTypes.string.isRequired,
    message: PropTypes.node,
    meta: PropTypes.node,
    onResend: PropTypes.func,
    timestamp: PropTypes.string,
    type: PropTypes.oneOf(Object.values(CHAT_ITEM_TYPES)),
  })).isRequired,
  translations: PropTypes.shape({
    at: PropTypes.string,
    resend: PropTypes.string,
    said: PropTypes.string,
  }),
};

export default Chat;
