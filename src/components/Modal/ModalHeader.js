import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconButton, ButtonIcon } from '../Button';
import { THEMES, getThemeClass } from '../../utils';

const ModalHeader = (props) => {
  const { id, onClose, theme, title, tagline } = props;
  const isEmpty = !tagline && !title;

  return (
    <header
      className={cx(
        'slds-modal__header',
        { 'slds-modal__header_empty': isEmpty },
        ...getThemeClass(theme),
      )}
    >
      {onClose && (
        <IconButton
          className="slds-modal__close"
          flavor="inverse"
          onClick={onClose}
          tabIndex={0}
        >
          <ButtonIcon
            sprite="utility"
            icon="close"
            size="large"
          />
        </IconButton>
      )}
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
  onClose: null,
  title: null,
  tagline: null,
  theme: null,
};

ModalHeader.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func,
  theme: PropTypes.oneOf(THEMES),
  title: PropTypes.string,
  tagline: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default ModalHeader;
