import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../Button';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';

export const MessageMeta = ({
  author,
  isConsecutive,
  isDeliveryFailure,
  isPastChat,
  onResend,
  timestamp,
  translations: {
    at,
    resend,
    said,
  },
}) => {
  /* eslint-disable react/jsx-one-expression-per-line */
  const renderMessageMeta = () => {
    const renderedAuthor = isPastChat
      ? <b>{author}</b>
      : author;

    return (
      <div className="slds-chat-message__meta" aria-label={`${said} ${author} ${at} ${timestamp}`}>
        {renderedAuthor} &bull; {timestamp}
      </div>
    );
  };
  /* eslint-enable react/jsx-one-expression-per-line */

  if (isDeliveryFailure) {
    return (
      <Grid align="spread">
        {renderMessageMeta(author, timestamp)}
        <Button
          className="slds-chat-message__action slds-m-top_xxx-small"
          flavor="none"
          onClick={onResend}
          title={resend}
        >
          <Icon
            className="slds-chat-icon"
            icon="redo"
            size="xx-small"
            sprite="utility"
          />
          {resend}
        </Button>
      </Grid>
    );
  }

  return !isConsecutive && renderMessageMeta(author, timestamp);
};

MessageMeta.propTypes = {
  onResend: Function.prototype,
};

MessageMeta.propTypes = {
  author: PropTypes.string.isRequired,
  isConsecutive: PropTypes.bool.isRequired,
  isDeliveryFailure: PropTypes.bool.isRequired,
  isPastChat: PropTypes.bool.isRequired,
  labelAt: PropTypes.string,
  labelResend: PropTypes.string,
  labelSaid: PropTypes.string,
  onResend: PropTypes.func,
  timestamp: PropTypes.string.isRequired,
  translations: PropTypes.shape({
    at: PropTypes.string,
    resend: PropTypes.string,
    said: PropTypes.string,
  }).isRequired,
};
