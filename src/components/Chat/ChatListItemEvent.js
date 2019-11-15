import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { EventContent } from './Content';

const ChatListItemEvent = ({
  icon,
  isError,
  message,
  meta,
  timestamp,
}) => {
  const eventClassName = cx([
    'slds-chat-event',
    { 'slds-has-error': isError, }
  ]);

  return (
    <div className={eventClassName}>
      <div className="slds-chat-event__body">
        <EventContent
          icon={icon}
          message={message}
          timestamp={timestamp}
        />
      </div>
      {!isError && meta && <div className="slds-chat-event__agent-message">{meta}</div>}
    </div>
  );
};

ChatListItemEvent.defaultProps = {
  icon: null,
  meta: null,
};

ChatListItemEvent.propTypes = {
  icon: PropTypes.string,
  isError: PropTypes.bool.isRequired,
  message: PropTypes.node.isRequired,
  meta: PropTypes.node,
  timestamp: PropTypes.string.isRequired,
};

export default ChatListItemEvent;
