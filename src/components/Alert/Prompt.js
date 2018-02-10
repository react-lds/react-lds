import React from 'react';
import PropTypes from 'prop-types';
import { THEMES } from '../../utils';

import { Modal, ModalContent, ModalFooter } from '../../';

const Prompt = (props) => {
  const {
    children,
    className,
    id,
    labels,
    onClose,
    open,
    theme,
    title,
    ...rest
  } = props;

  return (
    <div>
      <Modal
        {...rest}
        className={className}
        id={id}
        open={open}
        onClose={onClose}
        prompt={theme}
        title={title}
      >
        <ModalContent>{children}</ModalContent>
        <ModalFooter
          className="slds-theme_default"
          labels={labels}
        />
      </Modal>
    </div>
  );
};

Prompt.defaultProps = {
  className: null,
  labels: {
    close: 'Okay'
  },
  open: false,
  theme: 'error',
};

Prompt.propTypes = {
  /**
   * prompt content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * Prompt Id
   */
  id: PropTypes.string.isRequired,
  /**
   * Prompt text labels
   */
  labels: PropTypes.shape({
    close: PropTypes.string.isRequired,
  }),
  /**
   * fires when close is clicked or when esc is pressed when the prompt is visible
   */
  onClose: PropTypes.func.isRequired,
  /**
   * opens the prompt
   */
  open: PropTypes.bool,
  /**
   * slds theme
   */
  theme: PropTypes.oneOf(THEMES),
  /**
   * prompt title
   */
  title: PropTypes.string.isRequired,
};

export default Prompt;
