import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { THEMES, getThemeClass } from '../../utils';

import { Button, ButtonIcon } from '../../';

const Alert = (props) => {
  const {
    children,
    className,
    icon,
    title,
    toast,
    theme,
    onClickClose,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-notify',
    { 'slds-notify_toast': !!toast },
    { 'slds-notify_alert': !toast },
    'slds-theme_alert-texture',
    getThemeClass(theme),
    className,
  ];

  const wrapIcon = () => (
    <span className="slds-icon_container slds-m-right_small slds-no-flex slds-align-top">
      {icon}
      <span className="slds-assistive-text">{title}</span>
    </span>
  );

  const wrapToastContent = content => (
    <div className="slds-notify__content">
      {content}
    </div>
  );

  const flavors = ['icon'];
  if (theme !== 'warning') flavors.push('icon-inverse');

  return (
    <div className="slds-notify_container">
      <div {...rest} className={cx(sldsClasses)} role="alert">
        {icon && wrapIcon(icon)}
        <Button
          flavor={flavors}
          className="slds-notify__close"
          onClick={onClickClose}
        >
          <ButtonIcon sprite="utility" icon="close" size={toast ? 'large' : undefined} />
          <span className="slds-assistive-text">Close</span>
        </Button>
        <span className="slds-assistive-text">{title}</span>
        {toast ? wrapToastContent(children) : children }
      </div>
    </div>
  );
};

Alert.defaultProps = {
  className: null,
  icon: null,
  toast: false,
  onClickClose: () => {},
  theme: 'info',
};

Alert.propTypes = {
  /**
   * notification content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
  * IconSVG
  */
  icon: PropTypes.node,
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
  /**
   * notification theme (warning, error, offline, info (default))
   */
  theme: PropTypes.oneOf(THEMES),
};

export default Alert;
