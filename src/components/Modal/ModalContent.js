
import React from 'react';
import { prefixClasses } from '../../utils';

const ModalContent = (props, { cssPrefix }) => {
  const { children, className, menu, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const isMenu = !!menu;

  const sldsClasses = [
    { modal__content: !isMenu },
    { modal__menu: isMenu },
    { 'p-vertical--large': !isMenu },
    { 'p-horizontal--x-large': !isMenu },
  ];

  return (
    <div {...rest} className={prefix(sldsClasses, className)}>{children}</div>
  );
};

ModalContent.contextTypes = { cssPrefix: React.PropTypes.string };

ModalContent.propTypes = {
  /**
   * modal content
   */
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * render as a modal__menu instead
   */
  menu: React.PropTypes.bool,
};


export default ModalContent;
