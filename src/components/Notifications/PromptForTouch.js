import React from 'react';
import { Modal, ModalHeader, ModalContent, Backdrop } from '../../index';

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
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * prompt header-icon
   */
  headerIcon: React.PropTypes.node,
  /**
   * prompt label
   */
  label: React.PropTypes.string,
  /**
   * opens the prompt
   */
  open: React.PropTypes.bool,
  /**
   * prompt tagline
   */
  tagline: React.PropTypes.string,
  /**
   * prompt title
   */
  title: React.PropTypes.string,
};

export default PromptForTouch;
