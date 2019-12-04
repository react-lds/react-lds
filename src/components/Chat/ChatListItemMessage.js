import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { MessageContent } from './Content';

const ChatListItemMessage = ({
  author,
  avatar,
  isFirstMessage,
  isPastChat,
  isResendDisabled,
  ...rest
}) => {
  const hasAvatar = !!avatar;

  const classNamesMessage = cx([
    'slds-chat-message',
    { 'slds-chat-message_faux-avatar': hasAvatar && !isFirstMessage },
  ]);

  return (
    <div className={classNamesMessage}>
      {!isPastChat && hasAvatar && isFirstMessage && (
        <span aria-hidden="true" className="slds-avatar slds-avatar_circle slds-chat-avatar">
          <abbr className="slds-avatar__initials slds-avatar__initials_inverse" title={author}>{avatar}</abbr>
        </span>
      )}
      <div className="slds-chat-message__body">
        <MessageContent
          author={author}
          avatar={avatar}
          isPastChat={isPastChat}
          isResendDisabled={isResendDisabled}
          {...rest}
        />
      </div>
    </div>
  );
};

ChatListItemMessage.defaultProps = {
  avatar: null,
};

ChatListItemMessage.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isFirstMessage: PropTypes.bool.isRequired,
  isPastChat: PropTypes.bool.isRequired,
  isResendDisabled: PropTypes.bool.isRequired,
};

export default ChatListItemMessage;
