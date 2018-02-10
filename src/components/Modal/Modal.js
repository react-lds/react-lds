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

    return (
      <div>
        <section
          {...rest}
          className={cx(
            'slds-modal',
            { [`slds-${transitionStyle}`]: open },
            { 'slds-modal_prompt': !!prompt },
            className
          )}
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
        <div className={cx('slds-backdrop', { 'slds-backdrop_open': open })} />
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
  transitionStyle: PropTypes.oneOf([
    'fade-in-open',
    'slide-up-saving',
    'slide-up-open',
    'slide-down-cancel'
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  open: PropTypes.bool,
  prompt: PropTypes.string,
  tagline: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string,
};

export default Modal;
