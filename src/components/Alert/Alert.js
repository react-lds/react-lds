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
    { 'slds-notify_toast': toast },
    { 'slds-notify_alert slds-theme_alert-texture': !toast },
    getThemeClass(theme),
    className,
  ];

  let iconEl;
  let iconContainerClasses;

  if (React.isValidElement(icon)) {
    iconEl = React.cloneElement(icon, { size: toast ? 'small' : 'x-small' });

    iconContainerClasses = [
      'slds-icon_container',
      { 'slds-m-right_small slds-no-flex slds-align-top': toast },
      { 'slds-m-right_x-small': !toast },
    ];
  }

  const alert = (
    <div {...rest} className={cx(sldsClasses)} role={toast ? 'status' : 'alert'}>
      <span className="slds-assistive-text">{title}</span>
      {iconEl && <span className={cx(iconContainerClasses)}>{iconEl}</span>}
      {toast
        ? <div className="slds-notify__content">{children}</div>
        : children
      }
      {onClickClose && (
        <div className="slds-notify__close">
          <IconButton
            flavor="inverse"
            onClick={onClickClose}
            title="Close"
          >
            <ButtonIcon
              sprite="utility"
              icon="close"
              size={toast ? 'large' : 'small'}
            />
          </IconButton>
        </div>
      )}
    </div>
  );

  return toast
    ? <div className="slds-notify_container slds-is-relative">{alert}</div>
    : alert;
};

Alert.defaultProps = {
  className: null,
  icon: null,
  toast: false,
  onClickClose: null,
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
  * IconSVG element
  */
  icon: PropTypes.element,
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
