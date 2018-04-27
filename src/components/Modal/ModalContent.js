import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ModalContent = ({
  children,
  className,
  id,
  onClose: _, // eslint-disable-line react/prop-types
  ...rest
}) => (
  <div
    {...rest}
    className={cx(
      'slds-modal__content',
      'slds-p-around_medium',
      className
    )}
    id={id}
  >
    {children}
  </div>
);

ModalContent.defaultProps = {
  className: null,
  id: null,
};

ModalContent.propTypes = {
  /**
   * Modal content
   */
  children: PropTypes.node.isRequired,
  /**
   * className that will be merged
   */
  className: PropTypes.string,
  /**
   * (PRIVATE) passed down from Modal
   */
  id: PropTypes.string,
};

export default ModalContent;
