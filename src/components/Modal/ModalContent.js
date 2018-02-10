import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ModalContent = ({
  children,
  className,
  id,
  ...rest
}) => (
  <div
    {...rest}
    className={cx('slds-modal__content', 'slds-p-around_medium', className)}
    id={id}
  >
    {children}
  </div>
);

ModalContent.displayName = 'ModalContent';

ModalContent.defaultProps = {
  className: null,
  id: null,
};

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default ModalContent;
