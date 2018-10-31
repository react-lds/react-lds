import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ModalContent = ({
  children,
  className,
  collapsePadding,
  id,
  onClose: _, // eslint-disable-line react/prop-types
  ...rest
}) => (
  <div
    {...rest}
    className={cx(
      'slds-modal__content',
      { 'slds-p-around_medium': !collapsePadding },
      className
    )}
    id={id}
  >
    {children}
  </div>
);

ModalContent.defaultProps = {
  className: null,
  collapsePadding: false,
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
   * Whether the standard padding should be collapsed
   */
  collapsePadding: PropTypes.bool,
  /**
   * (PRIVATE) passed down from Modal
   */
  id: PropTypes.string,
};

export default ModalContent;
