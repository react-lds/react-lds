import React from 'react';
import { PropTypes } from 'prop-types';

import { Icon } from '../../Icon';

/* eslint-disable react/jsx-one-expression-per-line */
export const EventContent = ({
  icon,
  message,
  timestamp,
}) => (
  <>
    {icon && (
      <Icon
        className="slds-chat-icon"
        icon={icon}
        size="x-small"
        sprite="utility"
        svgClassName="slds-icon-text-default"
      />
    )}
    <p>
      {timestamp
        ? (
          <>
            {message} &bull; {timestamp}
          </>
        ) : message
      }
    </p>
  </>
);
/* eslint-enable react/jsx-one-expression-per-line */

EventContent.defaultProps = {
  icon: null,
  message: null,
  timestamp: null,
};

EventContent.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.node,
  timestamp: PropTypes.string,
};
