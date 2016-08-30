import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, Backdrop, Button } from '../../index';

const Prompt = (props) => {
  const { buttonText, children, className, description, label, open, title, ...rest } = props;
  return (
    <div>
      <Modal {...rest} className={className} label={label} description={description} open={open} dialog prompt>
        <ModalHeader title={title} />
        <ModalContent>{children}</ModalContent>
        <ModalFooter defaultTheme>
          <Button neutral title={buttonText} />
        </ModalFooter>
      </Modal>
      <Backdrop open={props.open} />
    </div>
  );
};

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
   * class name
   */
  className: React.PropTypes.string,
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
