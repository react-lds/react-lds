import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { THEMES, getThemeClass } from '../../utils';

import { IconButton, ButtonIcon } from '../Button';

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
    { 'slds-theme_alert-texture': !toast },
    getThemeClass(theme),
    className,
  ];

  let iconEl = null;

  if (React.isValidElement(icon)) {
    iconEl = React.cloneElement(icon, { size: toast ? 'small' : 'x-small' });
  }

  return (
    <div className="slds-notify_container">
      <div {...rest} className={cx(sldsClasses)} role="alert">
        {iconEl && (
          <span className="slds-icon_container slds-m-right_small slds-no-flex slds-align-top">
            {iconEl}
            <span className="slds-assistive-text">{title}</span>
          </span>
        )}
        <IconButton
          flavor="inverse"
          className="slds-notify__close"
          onClick={onClickClose}
          title="Close"
        >
          <ButtonIcon
            sprite="utility"
            icon="close"
            size={toast ? 'large' : undefined}
          />
        </IconButton>
        <span className="slds-assistive-text">{title}</span>
        {toast ? <div className="slds-notify__content">{children}</div> : children }
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
