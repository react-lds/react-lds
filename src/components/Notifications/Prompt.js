import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, Backdrop, Button } from 'react-lds';

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
   * the prompt label
   */
  label: React.PropTypes.string.isRequired,
  /**
   * the prompt description
   */
  description: React.PropTypes.string.isRequired,
  /**
   * the prompt closing button text
   */
  buttonText: React.PropTypes.string.isRequired,
  /**
   * the prompt content
   */
  title: React.PropTypes.string.isRequired,
  /**
   * opens the prompt
   */
  open: React.PropTypes.bool,
  /**
   * the prompt content
   */
  children: React.PropTypes.node.isRequired,
};

export default Prompt;
