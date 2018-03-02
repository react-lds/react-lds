import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '../Button';

const ModalFooter = ({
  children,
  className,
  closeButtonLabel,
  directional,
  hideCloseButton,
  onClose,
  ...rest
}) => (
  <footer
    {...rest}
    className={cx(
      'slds-modal__footer',
      { 'slds-modal__footer_directional': directional },
      className
    )}
  >
    {!hideCloseButton && !!onClose && <Button onClick={onClose}>{closeButtonLabel}</Button>}
    {children}
  </footer>
);

ModalFooter.defaultProps = {
  children: null,
  className: null,
  directional: false,
  hideCloseButton: false,
  closeButtonLabel: 'Cancel',
  onClose: null,
};

ModalFooter.propTypes = {
  /**
   * Additional content in ModalFooter. Usually used to add a confirm button
   */
  children: PropTypes.node,
  /**
   * className that will be merged
   */
  className: PropTypes.string,
  /**
   * Renders a directional footer
   */
  directional: PropTypes.bool,
  /**
   * Hides the closeButton when `onClose` is set
   */
  hideCloseButton: PropTypes.bool,
  /**
   * Label for the closeButton that will be rendered
   */
  closeButtonLabel: PropTypes.string,
  /**
   * (PRIVATE) Passed down from Modal. Renders a close button with `closeButtonLabel`
   */
  onClose: PropTypes.func,
};

export default ModalFooter;
