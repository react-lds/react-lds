import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '../Button';

const ModalFooter = ({
  children,
  className,
  closeButtonLabel,
  directional,
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
    <Button onClick={onClose}>{closeButtonLabel}</Button>
    {children}
  </footer>
);

ModalFooter.defaultProps = {
  children: null,
  className: null,
  directional: false,
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
   * Label for the closeButton that will be rendered
   */
  closeButtonLabel: PropTypes.string,
  /**
   * (PRIVATE) Passed down from Modal
   */
  onClose: PropTypes.func,
};

export default ModalFooter;
