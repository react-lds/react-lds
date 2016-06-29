
import React from 'react';
import { prefixable } from '../../decorators';

export const ModalContent = (props) => {
  const { prefix, children, menu } = props;
  const isMenu = !!menu;

  const sldsClasses = [
    { modal__content: !isMenu },
    { modal__menu: isMenu },
    { 'p-vertical--large': !isMenu },
    { 'p-horizontal--x-large': !isMenu },
  ];

  return (
    <div className={prefix(sldsClasses, props)}>{children}</div>
  );
};

ModalContent.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * the modal content
   */
  children: React.PropTypes.node.isRequired,
  /**
   * render as a modal__menu instead
   */
  menu: React.PropTypes.bool,
};


export default prefixable(ModalContent);
