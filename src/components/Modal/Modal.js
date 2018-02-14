import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FocusTrap from 'focus-trap-react';
import ModalHeader from './ModalHeader';
import { getContentId, getTitleId } from './utils';

class Modal extends Component {
  onClose = (evt) => {
    evt.stopPropagation();
    const { onClose } = this.props;
    onClose();
  }

  onKeyUp = (evt) => {
    const { key } = evt;
    if (key === 'Escape') { this.onClose(evt); }
  }

  cloneWithProps = (child) => {
    const name = child.type.displayName || child.type.name;

    if (name === 'ModalContent') {
      const { id } = this.props;
      const contentId = getContentId(id);
      return React.cloneElement(child, { id: contentId });
    }

    if (name === 'ModalFooter') {
      return React.cloneElement(child, { onClose: this.onClose });
    }

    return child;
  }

  render() {
    const {
      children,
      className,
      id,
      open,
      onClose: _,
      prompt,
      tagline,
      title,
      transitionStyle,
      ...rest
    } = this.props;

    const titleId = title ? getTitleId(id) : null;
    const contentId = getContentId(id);

    const sldsClasses = cx(
      'slds-modal',
      { [`slds-${transitionStyle}`]: open },
      { 'slds-modal_prompt': !!prompt },
      className
    );

    return (
      <div>
        <section
          {...rest}
          className={sldsClasses}
          onKeyUp={this.onKeyUp}
          role={prompt ? 'alertdialog' : 'dialog'}
          tabIndex={-1}
          aria-modal="true"
          aria-describedby={contentId}
          aria-labelledby={titleId}
        >
          <FocusTrap className="slds-modal__container" active={open}>
            <ModalHeader
              id={titleId}
              onClose={this.onClose}
              theme={prompt}
              tagline={tagline}
              title={title}
            />
            {React.Children.map(children, this.cloneWithProps)}
          </FocusTrap>
        </section>
        <div
          className={cx(
            'slds-backdrop',
            { 'slds-backdrop_open': open }
          )}
        />
      </div>
    );
  }
}

Modal.defaultProps = {
  className: null,
  open: false,
  prompt: null,
  tagline: null,
  title: null,
  transitionStyle: 'fade-in-open',
};

Modal.propTypes = {
  /**
   * Sets the animation style when the modal open.
   * Can be one of: 'fade-in-open', 'slide-up-saving', 'slide-up-open', 'slide-down-cancel'
   */
  transitionStyle: PropTypes.oneOf([
    'fade-in-open',
    'slide-up-saving',
    'slide-up-open',
    'slide-down-cancel'
  ]),
  /**
   * ModalContent and optionally a ModalFooter
   */
  children: PropTypes.node.isRequired,
  /**
   * className that will be merged
   */
  className: PropTypes.string,
  /**
   * Callback that is triggered when `x` is clicked or `esc` is pressed. Will be passed to a `ModalFooter` if present
   */
  onClose: PropTypes.func.isRequired,
  /**
   * id that is used to link Moal aria-tags to each other
   */
  id: PropTypes.string.isRequired,
  /**
   * Opens the Modal and renders the backdrop
   */
  open: PropTypes.bool,
  /**
   * Tagline. Can be a string or an element
   */
  tagline: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Title
   */
  title: PropTypes.string,
  /**
   * (PRIVATE) used by Prompt component
   */
  prompt: PropTypes.string,
};

export default Modal;
