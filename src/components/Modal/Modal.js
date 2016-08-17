import React from 'react';
import { flavorable, prefixable } from '../../decorators';

export const Modal = (props) => {
  const {
    prefix,
    children,
    description,
    dialog,
    label,
    open,
    prompt, // eslint-disable-line react/prop-types
  } = props;

  const isOpen = !!open;
  const isDialog = !!dialog || !!prompt;
  const role = !!prompt ? 'alertdialog' : 'dialog';
  const containerRole = isDialog ? 'document' : null;

  const sldsClasses = [
    'modal',
    { 'fade-in-open': isOpen },
  ];

  const childrenWithProps = [...children].map((child, i) => {
    const childName = !!child ? child.type.displayName : null;

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
      className={prefix(sldsClasses, props)}
      role={role}
      aria-describedby={description}
      aria-hidden={`${!isOpen}`}
      aria-labelledby={label}
    >
      <div
        className={prefix(['modal__container'])}
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
  'prompt',
];

Modal.propTypes = {
  /**
   * modal content
   */
  children: React.PropTypes.node.isRequired,
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
   * prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(flavorable(Modal, 'modal'));
