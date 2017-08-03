import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ModalContent = (props) => {
  const { children, className, menu, id, ...rest } = props;

  const sldsClasses = [
    { 'slds-modal__content': !menu },
    { 'slds-modal__menu': !!menu },
    { 'slds-p-vertical_large': !menu },
    { 'slds-p-horizontal_x-large': !menu },
    className,
  ];

  return (<div {...rest} className={cx(sldsClasses)} id={id}>{children}</div>);
};

ModalContent.defaultProps = {
  className: null,
  menu: false,
  id: null,
};

ModalContent.propTypes = {
  /**
   * modal content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * render as a modal__menu instead
   */
  menu: PropTypes.bool,
  /**
   * id, should be the same as Modal props.description
   */
  id: PropTypes.string,
};


export default ModalContent;
