import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button, ButtonIcon } from '../../';

const ModalHeader = (props) => {
  const { children, className, label, prompt, tagline, title, uncloseable, onClickClose, ...rest } = props;

  const getCloseButton = () => (
    <Button onClick={onClickClose} className="slds-modal__close" flavor="icon-inverse" size="large">
      <ButtonIcon sprite="action" icon="close" size="large" />
      <span className="slds-assistive-text">Close</span>
    </Button>
  );

  const getTagline = () => (
    <p className="slds-m-top_x-small">
      {tagline}
    </p>
  );

  const getTitle = () => {
    const titleID = label || null;
    return (
      <h2 id={titleID} className="slds-text-heading_medium">
        {title}
      </h2>
    );
  };

  const isEmpty = !children && !tagline && !title;
  const theme = prompt === true ? 'error' : prompt;

  const sldsClasses = [
    'slds-modal__header',
    { 'slds-modal__header_empty': isEmpty },
    { [`slds-theme_${theme}`]: !!theme },
    { 'slds-theme_alert-texture': !!prompt },
    className,
  ];

  return (
    <div {...rest} className={cx(sldsClasses)}>
      {!uncloseable ? getCloseButton() : null}
      {children}
      {title ? getTitle() : null}
      {tagline ? getTagline() : null}
    </div>
  );
};

ModalHeader.defaultProps = {
  children: null,
  className: null,
  label: null,
  prompt: null,
  tagline: null,
  title: null,
  uncloseable: undefined,
  onClickClose: () => {},
};

ModalHeader.propTypes = {
  /**
   * modal header content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * heading id (gets passed down from `Modal prompt`)
   */
  label: PropTypes.string,
  /**
   * render header as a prompt header, specify theme(gets passed down from `Modal prompt`)
   */
  prompt: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * (optional) modal tagline
   */
  tagline: PropTypes.node,
  /**
   * (optional) modal title
   */
  title: PropTypes.string,
  /**
   * hides the close-button (gets passed down from `Modal prompt`)
   */
  uncloseable: PropTypes.bool,
  /**
   * triggered when the user clicks the close button
   */
  onClickClose: PropTypes.func,
};

export default ModalHeader;
