import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable, themeable } from '../../decorators';
import { Button, ButtonIcon, Icon } from '../../';

const getThemeName = (themeStr) => {
  if (typeof themeStr === 'string') {
    return themeStr.includes('theme--warning');
  }

  return false;
};

export const Notification = (props) => {
  const {
    children,
    className,
    icon,
    title,
    toast,
    onClickClose,
    ...rest,
  } = props;

  const sldsClasses = [
    'slds-notify',
    { 'slds-notify--toast': !!toast },
    className,
  ];

  const renderIcon = name =>
    <Icon
      className="slds-m-right_small slds-no-flex slds-align-top"
      sprite="utility"
      icon={name}
      size="small"
    />;

  const renderChildren = content =>
    <div className="slds-notify__content">
      {content}
    </div>;

  return (
    <div className="slds-notify_container">
      <div {...rest} className={cx(sldsClasses)} role="alert">
        {icon && renderIcon(icon)}
        <Button
          icon-inverse={getThemeName(className) ? undefined : true}
          className="slds-notify__close"
          icon
          onClick={onClickClose}
        >
          <ButtonIcon sprite="utility" icon="close" size={toast ? 'large' : undefined} />
          <span className="slds-assistive-text">Close</span>
        </Button>
        <span className="slds-assistive-text">{title}</span>
        {toast ? renderChildren(children) : children }
      </div>
    </div>
  );
};

Notification.flavors = [
  'alert',
];

Notification.defaultProps = {
  className: null,
  icon: null,
  toast: false,
  onClickClose: () => {},
};

Notification.propTypes = {
  /**
   * notification content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
  * icon
  */
  icon: PropTypes.string,
  /**
   * notification title (will be rendered as assistiveText)
   */
  title: PropTypes.string.isRequired,
  /**
   * render the notification as a toast
   */
  toast: PropTypes.bool,
  /**
   * function to call when close button is clicked
   */
  onClickClose: PropTypes.func,
};

export default themeable(
  flavorable(Notification, 'notify')
);
