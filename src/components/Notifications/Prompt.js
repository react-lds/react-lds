import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalHeader, ModalContent, ModalFooter, Backdrop, Button } from '../../';

const Prompt = (props) => {
  const { buttonText, children, className, description, label, open, title, ...rest } = props;
  return (
    <div>
      <Modal {...rest} className={className} label={label} open={open} dialog prompt>
        <ModalHeader title={title} />
        <ModalContent id={description}>{children}</ModalContent>
        <ModalFooter defaultTheme>
          <Button neutral title={buttonText} onClick={() => {}} />
        </ModalFooter>
      </Modal>
      <Backdrop open={props.open} />
    </div>
  );
};

Prompt.defaultProps = {
  className: null,
  open: false,
};

Prompt.propTypes = {
  /**
   * prompt close button text
   */
  buttonText: PropTypes.string.isRequired,
  /**
   * prompt content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * prompt description
   */
  description: PropTypes.string.isRequired,
  /**
   * prompt label
   */
  label: PropTypes.string.isRequired,
  /**
   * opens the prompt
   */
  open: PropTypes.bool,
  /**
   * prompt content
   */
  title: PropTypes.string.isRequired,
};

export default Prompt;
