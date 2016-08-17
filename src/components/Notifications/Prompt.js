import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, Backdrop, Button } from '../../index';

const Prompt = (props) => (
  <div>
    <Modal label={props.label} description={props.description} open={props.open} dialog prompt>
      <ModalHeader title={props.title} />
      <ModalContent>{props.children}</ModalContent>
      <ModalFooter default>
        <Button variation="neutral" title={props.buttonText} />
      </ModalFooter>
    </Modal>
    <Backdrop open={props.open} />
  </div>
);

Prompt.propTypes = {
  /**
   * prompt close button text
   */
  buttonText: React.PropTypes.string.isRequired,
  /**
   * prompt content
   */
  children: React.PropTypes.node.isRequired,
  /**
   * prompt description
   */
  description: React.PropTypes.string.isRequired,
  /**
   * prompt label
   */
  label: React.PropTypes.string.isRequired,
  /**
   * opens the prompt
   */
  open: React.PropTypes.bool,
  /**
   * prompt content
   */
  title: React.PropTypes.string.isRequired,
};

export default Prompt;
