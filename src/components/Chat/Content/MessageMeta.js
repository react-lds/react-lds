import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../Button';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';

import { Meta } from './Meta';

export const MessageMeta = ({
  author,
  isConsecutive,
  isDeliveryFailure,
  isPastChat,
  onResend,
  timestamp,
  translations,
}) => {
  const meta = (
    <Meta
      author={author}
      isPastChat={isPastChat}
      timestamp={timestamp}
      translations={translations}
    />
  );

  const labelResend = translations.resend;

  if (isDeliveryFailure) {
    return (
      <Grid align="spread">
        {meta}
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

  return !isConsecutive && meta;
};

MessageMeta.propTypes = {
  onResend: Function.prototype,
};

MessageMeta.propTypes = {
  author: PropTypes.string.isRequired,
  isConsecutive: PropTypes.bool.isRequired,
  isDeliveryFailure: PropTypes.bool.isRequired,
  isPastChat: PropTypes.bool.isRequired,
  onResend: PropTypes.func,
  timestamp: PropTypes.string.isRequired,
  translations: PropTypes.shape({
    at: PropTypes.string,
    resend: PropTypes.string,
    said: PropTypes.string,
  }).isRequired,
};
