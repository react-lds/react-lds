import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalHeader, ModalContent, Backdrop } from '../../';

const PromptForTouch = (props) => {
  const { children, className, headerIcon, label, open, tagline, title, ...rest } = props;

  const header = () => {
    const hasHeader = !!title || !!tagline || !!headerIcon;
    const Header = (
      <ModalHeader title={title} tagline={tagline} uncloseable>
        {headerIcon}
      </ModalHeader>
    );
    return hasHeader ? Header : null;
  };

  return (
    <div>
      <Modal {...rest} className={className} label={label} dialog open={open}>
        {header()}
        <ModalContent menu>{children}</ModalContent>
      </Modal>
      <Backdrop open={props.open} />
    </div>
  );
};

PromptForTouch.propTypes = {
  /**
   * prompt content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * prompt header-icon
   */
  headerIcon: PropTypes.node,
  /**
   * prompt label
   */
  label: PropTypes.string,
  /**
   * opens the prompt
   */
  open: PropTypes.bool,
  /**
   * prompt tagline
   */
  tagline: PropTypes.string,
  /**
   * prompt title
   */
  title: PropTypes.string,
};

export default PromptForTouch;
