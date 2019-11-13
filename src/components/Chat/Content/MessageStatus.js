import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../Icon';

export const MessageStatus = ({
  isDeliveryFailure,
  isUnsupportedType,
  message,
}) => {
  const classNamesStatusIcon = cx([
    { 'slds-icon-text-warning': isUnsupportedType },
    { 'slds-icon-text-error': isDeliveryFailure },
  ]);

  return (
    <React.Fragment>
      <Icon
        className="slds-chat-icon"
        icon={isUnsupportedType ? 'warning' : 'error'}
        svgClassName={classNamesStatusIcon}
        size="x-small"
        sprite="utility"
      />
      <span>{message}</span>
    </React.Fragment>
  );
};

MessageStatus.propTypes = {
  isDeliveryFailure: PropTypes.bool.isRequired,
  isUnsupportedType: PropTypes.bool.isRequired,
  message: PropTypes.node.isRequired,
};
