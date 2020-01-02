import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FocusTrap from 'focus-trap-react';
import ModalHeader from './ModalHeader';
import { getContentId, getTitleId } from './utils';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.focusTrapOptions = {
      escapeDeactivates: false,
      fallbackFocus: null,
    };
  }

  onClose = (evt) => {
    evt.stopPropagation();
    const { onClose } = this.props;
    if (onClose) { onClose(evt); }
  }

  onKeyUp = (evt) => {
    const { key } = evt;
    if (key === 'Escape') {
      evt.stopPropagation();
      this.onClose(evt);
    }
  }

  setRef = (ref) => {
    this.focusTrapOptions.fallbackFocus = ref;
  }

  cloneWithProps = (child) => {
    const { id, onClose } = this.props;
    if (!child) return child;
    // Passing props to both children, need to ignore onClose in body and vice versa
    // react-hot-loader wraps a ProxyFacade, checking child.type is not really feasible
    // https://github.com/gaearon/react-hot-loader/issues/938
    return React.cloneElement(child, {
      id: getContentId(id),
      onClose: onClose ? this.onClose : null
    });
  }

  render() {
    const {
      children,
      className,
      id,
      open,
      onClose,
      prompt,
      size,
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
      { [`slds-modal_${size}`]: !!size },
      { 'slds-modal_prompt': !!prompt },
      className
    );

    return (
      <FocusTrap
        active={open}
        focusTrapOptions={this.focusTrapOptions}
        onKeyUp={onClose ? this.onKeyUp : null}
      >
        <section
          {...rest}
          className={sldsClasses}
          ref={this.setRef}
          role={prompt ? 'alertdialog' : 'dialog'}
          tabIndex={-1}
          aria-modal="true"
          aria-describedby={contentId}
          aria-labelledby={titleId}
        >
          <div className="slds-modal__container">
            <ModalHeader
              id={titleId}
              onClose={onClose ? this.onClose : null}
              theme={prompt}
              tagline={tagline}
              title={title}
            />
            {React.Children.map(children, this.cloneWithProps)}
          </div>
        </section>
        <div
          className={cx([
            'slds-backdrop',
            { 'slds-backdrop_open': open }
          ])}
        />
      </FocusTrap>
    );
  }
}

Modal.defaultProps = {
  className: null,
  open: false,
  prompt: null,
  onClose: null,
  size: null,
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
  onClose: PropTypes.func,
  /**
   * id that is used to link Moal aria-tags to each other
   */
  id: PropTypes.string.isRequired,
  /**
   * Opens the Modal and renders the backdrop
   */
  open: PropTypes.bool,
  /**
   * Size variant of modal
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
