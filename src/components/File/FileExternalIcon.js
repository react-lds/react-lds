import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

const FileExternalIcon = ({ externalIcon }) => {
  const { icon, sprite, title } = externalIcon;

  return (
    <div className="slds-file__external-icon">
      <Icon
        className="slds-file__icon"
        svgClassName="slds-icon-text-default"
        icon={icon}
        sprite={sprite}
        title={title}
      />
    </div>
  );
};

FileExternalIcon.propTypes = {
  externalIcon: PropTypes.shape({
    icon: PropTypes.string,
    sprite: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default FileExternalIcon;
