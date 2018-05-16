import React from 'react';
import PropTypes from 'prop-types';

const FileActions = ({ children, hideTitle }) => {
  if (!children) return null;

  const menu = <div className="slds-file__actions-menu">{children}</div>;

  if (!hideTitle) return menu;
  return <div className="slds-file__title slds-file__title_scrim">{menu}</div>;
};

FileActions.propTypes = {
  children: PropTypes.element.isRequired,
  hideTitle: PropTypes.bool.isRequired,
};

export default FileActions;
