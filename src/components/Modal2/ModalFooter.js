import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '../Button';

const ModalFooter = ({
  children,
  className,
  labels,
  directional,
  onClose,
}) => (
  <footer
    className={cx(
      'slds-modal__footer',
      { 'slds-modal__footer_directional': directional },
      className
    )}
  >
    <Button flavor="neutral" onClick={onClose}>
      {labels.close}
    </Button>
    {children}
  </footer>
);

ModalFooter.defaultProps = {
  children: null,
  className: null,
  directional: false,
  labels: {
    close: 'Cancel',
  },
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  directional: PropTypes.bool,
  labels: PropTypes.shape({
    close: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func,
};

export default ModalFooter;
