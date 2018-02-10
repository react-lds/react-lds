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
      id,
      open,
      onClose: __,
      tagline,
      title,
      ...rest
    } = this.props;

    const titleId = title ? getTitleId(id) : null;

    return (
      <div>
        <section
          {...rest}
          className={cx(
            'slds-modal',
            { 'slds-fade-in-open': open },
          )}
          role="dialog"
          tabIndex={-1}
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <FocusTrap className="slds-modal__container" active={open}>
            <ModalHeader
              id={titleId}
              onClose={this.onClose}
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
  open: false,
  tagline: null,
  title: null,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  open: PropTypes.bool,
  tagline: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string,
};

export default Modal;
