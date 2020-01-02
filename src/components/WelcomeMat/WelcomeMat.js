import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalContent } from '../Modal';
import WelcomeMatContent from './components/WelcomeMatContent';

const WelcomeMat = ({
  id,
  isOpen,
  onClose,
  ...rest
}) => (
  <Modal
    id={id}
    open={isOpen}
    onClose={onClose}
    size="small"
  >
    <ModalContent collapsePadding>
      <WelcomeMatContent
        {...rest}
        id={id}
        onClose={onClose}
      />
    </ModalContent>
  </Modal>
);

WelcomeMat.defaultProps = {
  isOpen: false,
};

WelcomeMat.propTypes = {
  /**
   * Identifier for `Modal`, ties to `WelcomeMat` title
   */
  id: PropTypes.string.isRequired,
  /**
   * Controls `isOpen` state of the underlying `Modal`
   */
  isOpen: PropTypes.bool,
  /**
   * Passed to `Modal` & `WelcomeMatContent`
   */
  onClose: PropTypes.func.isRequired,
};

export default WelcomeMat;
