import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../Button';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';

import { Meta } from './Meta';

export const MessageMeta = ({
  author,
  id,
  isConsecutive,
  isDeliveryFailure,
  isPastChat,
  meta,
  onResend,
  timestamp,
  translations,
}) => {
  const metaCmp = (
    <Meta
      author={author}
      isPastChat={isPastChat}
      meta={meta}
      timestamp={timestamp}
      translations={translations}
    />
  );

  if (isDeliveryFailure) {
    const labelResend = translations.resend;
    const onClick = () => onResend(id);

    return (
      <Grid align="spread">
        {metaCmp}
        <Button
          className="slds-chat-message__action slds-m-top_xxx-small"
          flavor="none"
          onClick={onClick}
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

  return !isConsecutive && metaCmp;
};

MessageMeta.propTypes = {
  timestamp: null,
  onResend: Function.prototype,
};

MessageMeta.propTypes = {
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isConsecutive: PropTypes.bool.isRequired,
  isDeliveryFailure: PropTypes.bool.isRequired,
  isPastChat: PropTypes.bool.isRequired,
  onResend: PropTypes.func,
  timestamp: PropTypes.string,
  translations: PropTypes.shape({
    at: PropTypes.string,
    resend: PropTypes.string,
    said: PropTypes.string,
  }).isRequired,
};
