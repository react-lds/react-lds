import React from 'react';
import { prefixClasses } from '../../utils';
import { flavorable } from '../../decorators';

export const Modal = (props, { cssPrefix }) => {
  const {
    children,
    className,
    description,
    dialog,
    label,
    open,
    prompt,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const isOpen = !!open;
  const isDialog = !!dialog || !!prompt;
  const role = prompt ? 'alertdialog' : 'dialog';
  const containerRole = isDialog ? 'document' : null;

  const sldsClasses = [
    'modal',
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

Modal.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

Modal.propTypes = {
  /**
   * modal content
   */
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * id of the modal-content (required as aria-describedby). must be set for --prompts
   */
  description: React.PropTypes.string,
  /**
   * whether a container is a dialog (optional when `<Modal prompt>`). Needed for PromptForTouch and ModalPrompt
   */
  dialog: React.PropTypes.bool,
  /**
   * id of the modal-heading
   */
  label: React.PropTypes.string,
  /**
   * opens the modal
   */
  open: React.PropTypes.bool,
  /**
   * opens the modal
   */
  prompt: React.PropTypes.bool,
};

export default flavorable(Modal, 'modal');
