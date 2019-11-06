import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { renderMeta } from './utils';
import { Icon } from '../Icon';

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
        {icon && (
          <Icon
            className="slds-chat-icon"
            icon={icon}
            size="x-small"
            sprite="utility"
            svgClassName="slds-icon-text-default"
          />
        )}
        {renderMeta(message, timestamp)}
      </div>
      {!isError && <div className="slds-chat-event__agent-message">{meta}</div>}
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
  meta: PropTypes.string,
  timestamp: PropTypes.string.isRequired,
};

export default ChatListItemEvent;
