import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../Icon';
import { MediaObject } from '../MediaObject';

const ScopedNotification = (props) => {
  const {
    children,
    className,
    theme,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-scoped-notification',
    { [`slds-scoped-notification_${theme}`]: theme && theme !== 'base' },
    className
  ];

  return (
    <MediaObject
      {...rest}
      center
      className={cx(sldsClasses)}
      figureLeft={(
        <Icon
          icon="info"
          sprite="utility"
          size="small"
          svgClassName={theme === 'dark' ? null : 'slds-icon-text-default'}
          title="information"
        />
      )}
      role="status"
    >
      {children}
    </MediaObject>
  );
};

ScopedNotification.defaultProps = {
  className: null,
  theme: null,
};

ScopedNotification.propTypes = {
  /**
   * Notification content
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional className, applied to `slds-scoped-notification`
   */
  className: PropTypes.string,
  /**
   * Notifcation theme. Passing `"base"` and `null` both maps to the default theme
   */
  theme: PropTypes.oneOf(['base', 'light', 'dark']),
};

export default ScopedNotification;
