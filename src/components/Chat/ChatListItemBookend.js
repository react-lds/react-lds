import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { renderMeta } from './utils';
import { Icon } from '../Icon';

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
      <Icon
        className="slds-chat-icon"
        icon={isEnd ? 'end_chat' : 'chat'}
        size="x-small"
        sprite="utility"
        svgClassName="slds-icon-text-default"
      />
      {renderMeta(message, timestamp)}
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
