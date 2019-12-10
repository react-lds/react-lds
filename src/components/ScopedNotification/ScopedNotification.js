import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../Icon';
import { MediaObject } from '../MediaObject';

const defaultIconRenderer = (theme, size) => (
  <Icon
    icon="info"
    sprite="utility"
    size={size}
    svgClassName={theme === 'dark' ? null : 'slds-icon-text-default'}
    title="information"
  />
);

const ScopedNotification = (props) => {
  const {
    children,
    className,
    renderIcon,
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
      figureLeft={renderIcon({ theme, size: 'small' })}
      role="status"
    >
      {children}
    </MediaObject>
  );
};

ScopedNotification.defaultProps = {
  className: null,
  renderIcon: defaultIconRenderer,
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
   * Optional func. to render the notification icon. It returns an `<Icon />` by default. Params: `{ theme, size }`
   */
  renderIcon: PropTypes.func,
  /**
   * Notifcation theme. Passing `"base"` and `null` both maps to the default theme
   */
  theme: PropTypes.oneOf(['base', 'light', 'dark']),
};

export default ScopedNotification;
