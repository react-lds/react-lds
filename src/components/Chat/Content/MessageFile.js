import React from 'react';
import PropTypes from 'prop-types';

import { File } from '../../File';
import { Icon } from '../../Icon';

export const MessageFile = ({
  alt,
  fileType,
  isLink,
  src,
  title,
  ...rest
}) => (isLink
  ? (
    <React.Fragment>
      <Icon
        className="slds-chat-icon"
        icon="attachment"
        size="small"
        sprite="doctype"
      />
      <a href={src} title={title}>
        {title}
      </a>
    </React.Fragment>
  ) : (
    <div style={{ width: '15rem' }}>
      <File
        fileType={fileType}
        image={src && {
          alt: alt || title,
          src,
        }}
        title={title}
        {...rest}
      />
    </div>
  )
);

MessageFile.defaultProps = {
  alt: '',
  isLink: false,
  src: null,
};

MessageFile.propTypes = {
  alt: PropTypes.string,
  fileType: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
};
