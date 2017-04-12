import React from 'react';
import PropTypes from 'prop-types';

import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Modal = (props, { cssPrefix }) => {
  const {
    children,
    className,
    description,
    dialog,
    label,
    open,
    prompt,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const isOpen = !!open;
  const isDialog = !!dialog || !!prompt;
  const role = prompt ? 'alertdialog' : 'dialog';
  const containerRole = isDialog ? 'document' : null;

  const sldsClasses = [
    'modal',
    { 'modal--prompt': !!prompt },
    { 'fade-in-open': isOpen },
  ];

  const childrenWithProps = [...children].map((child, i) => {
    const childName = child ? child.type.displayName || child.type.name : null;

    if (childName === 'ModalHeader') {
      return React.cloneElement(child, {
        key: i,
        label,
        prompt,
        uncloseable: child.props.uncloseable !== undefined ? child.props.uncloseable : prompt,
      });
    }

    return child;
  });

  return (
    <div
      {...rest}
      className={prefix(sldsClasses, className)}
      role={role}
      aria-describedby={description}
      aria-hidden={!isOpen}
      aria-labelledby={label}
    >
      <div
        className={prefix('modal__container')}
        id={description}
        role={containerRole}
        tabIndex={isDialog ? '0' : null}
      >
        {childrenWithProps}
      </div>
    </div>
  );
};

Modal.flavors = [
  'large',
];

Modal.contextTypes = { cssPrefix: PropTypes.string };

Modal.propTypes = {
  /**
   * modal content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * id of the modal-content (required as aria-describedby). must be set for --prompts
   */
  description: PropTypes.string,
  /**
   * whether a container is a dialog (optional when `<Modal prompt>`). Needed for PromptForTouch and ModalPrompt
   */
  dialog: PropTypes.bool,
  /**
   * id of the modal-heading
   */
  label: PropTypes.string,
  /**
   * opens the modal
   */
  open: PropTypes.bool,
  /**
   * opens the modal
   */
  prompt: PropTypes.bool,
};

export default flavorable(Modal, 'modal');
