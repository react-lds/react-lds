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
  labelAt,
  labelResend,
  labelSaid,
  meta,
  onResend,
  timestamp,
}) => {
  /* eslint-disable react/jsx-one-expression-per-line */
  const renderMessageMeta = () => {
    const renderedAuthor = isPastChat
      ? <b>{author}</b>
      : author;

    return (
      <div className="slds-chat-message__meta" aria-label={`${labelSaid} ${meta} ${labelAt} ${timestamp}`}>
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
          title={labelResend}
        >
          <Icon
            className="slds-chat-icon"
            icon="redo"
            size="xx-small"
            sprite="utility"
          />
          {labelResend}
        </Button>
      </Grid>
    );
  }

  return !isConsecutive && renderMessageMeta(author, timestamp);
};

MessageMeta.propTypes = {
  labelAt: 'at',
  labelResend: 'Resend',
  labelSaid: 'said',
  meta: null,
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
  meta: PropTypes.string,
  onResend: PropTypes.func,
  timestamp: PropTypes.string.isRequired,
};
