import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, ButtonIcon } from '../Button';

const buttonFlavors = [
  'icon',
  'icon-inverse'
];

const ModalHeader = (props) => {
  const { id, onClose, title, tagline } = props;
  const isEmpty = !tagline && !title;

  return (
    <header className={cx('slds-modal__header', { 'slds-modal__header_empty': isEmpty })}>
      <Button
        className="slds-modal__close"
        flavor={buttonFlavors}
        onClick={onClose}
        tabIndex={0}
      >
        <ButtonIcon
          sprite="utility"
          icon="close"
          size="large"
        />
      </Button>
      {title && (
        <h2
          className="slds-text-heading_medium slds-hyphenate"
          id={id}
        >
          {title}
        </h2>
      )}
      {tagline && <p className="slds-m-top_x-small">{tagline}</p>}
    </header>
  );
};

ModalHeader.defaultProps = {
  id: null,
  title: null,
  tagline: null,
};

ModalHeader.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  tagline: PropTypes.string,
};

export default ModalHeader;
