import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../Icon';
import { MediaObject } from '../MediaObject';

const FileCaption = ({
  fileType,
  hasActions,
  title,
}) => {
  const fileIcon = (
    <Icon
      icon={fileType}
      size="x-small"
      sprite="doctype"
      title={fileType}
    />
  );

  const captionClasses = [
    'slds-file__title',
    'slds-file__title_card',
    { 'slds-file-has-actions': hasActions },
  ];

  return (
    <figcaption className={cx(captionClasses)}>
      <MediaObject
        center
        figureLeft={fileIcon}
        size="small"
      >
        <span className="slds-file__text slds-truncate" title={title}>{title}</span>
      </MediaObject>
    </figcaption>
  );
};

FileCaption.propTypes = {
  fileType: PropTypes.string.isRequired,
  hasActions: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default FileCaption;
