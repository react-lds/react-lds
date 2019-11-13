import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { EventContent } from './Content';

const ChatListItemBookend = ({
  isEnd,
  message,
  timestamp,
}) => {
  const classNamesBookend = cx([
    'slds-chat-bookend',
    { 'slds-chat-bookend_stop': isEnd },
  ]);

  return (
    <div className={classNamesBookend}>
      <EventContent
        icon={isEnd ? 'end_chat' : 'chat'}
        message={message}
        timestamp={timestamp}
      />
    </div>
  );
};

ChatListItemBookend.defaultProps = {
  isEnd: false,
};

ChatListItemBookend.propTypes = {
  isEnd: PropTypes.bool,
  message: PropTypes.node.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default ChatListItemBookend;
