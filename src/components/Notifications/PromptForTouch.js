import React from 'react';
import { Modal, ModalHeader, ModalContent, Backdrop } from '../../index';

const header = (title, tagline, headerIcon) => {
  const hasHeader = !!title || !!tagline || !!headerIcon;
  const Header = (
    <ModalHeader title={title} tagline={tagline} uncloseable>
      {headerIcon}
    </ModalHeader>
  );
  return hasHeader ? Header : null;
};

const PromptForTouch = (props) => (
  <div>
    <Modal label={props.label} dialog open={props.open}>
      {header(props.title, props.tagline, props.headerIcon)}
      <ModalContent menu>{props.children}</ModalContent>
    </Modal>
    <Backdrop open={props.open} />
  </div>
);

PromptForTouch.propTypes = {
  /**
   * prompt content
   */
  children: React.PropTypes.node.isRequired,
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
