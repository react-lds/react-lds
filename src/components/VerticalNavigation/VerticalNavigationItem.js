import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Badge } from '../Badge';
import { IconSVG } from '../Icon';

const VerticalNavigationItem = (props) => {
  const {
    children,
    className,
    icon,
    isActive,
    notification,
    notificationLabel,
    ...rest
  } = props;

  const containerClasses = [
    'slds-nav-vertical__item',
    { 'slds-is-active': isActive },
  ];

  const sldsClasses = [
    'slds-nav-vertical__action',
    className,
  ];

  const renderNotification = () => (
    <Badge className="slds-col_bump-left" title={notificationLabel || `${notification}`}>
      {`${notification}`}
    </Badge>
  );

  const renderIcon = () => {
    const { icon: iconName, sprite, title } = icon;

    const iconClasses = [
      'slds-icon_container',
      `slds-icon-${sprite}-${iconName}`,
      'slds-line-height_reset'
    ];

    return (
      <span className={cx(iconClasses)} title={title}>
        <IconSVG
          className="slds-icon-text-default slds-m-right_x-small"
          icon={iconName}
          sprite={sprite}
          size="x-small"
        />
      </span>
    );
  };

  /* eslint-disable jsx-a11y/aria-props */
  return (
    <li className={cx(containerClasses)}>
      <a className={cx(sldsClasses)} aria-current={isActive ? 'page' : null} {...rest}>
        {icon && renderIcon()}
        {children}
        {notification != null && renderNotification()}
      </a>
    </li>
  );
};

VerticalNavigationItem.defaultProps = {
  className: null,
  icon: null,
  isActive: false,
  notification: null,
  notificationLabel: null,
};

VerticalNavigationItem.propTypes = {
  /**
   * Child node, text for default behaviour
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname to be applied to the contained linked element
   */
  className: PropTypes.string,
  /**
   * Icon that will be rendered to the left of children
   */
  icon: PropTypes.shape({
    icon: PropTypes.string,
    sprite: PropTypes.string,
    title: PropTypes.string,
  }),
  /**
   * Sets active navigation state
   */
  isActive: PropTypes.bool,
  /**
   * String or number indicating new items
   */
  notification: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * ARIA-description for the notification
   */
  notificationLabel: PropTypes.string,
};

export default VerticalNavigationItem;
