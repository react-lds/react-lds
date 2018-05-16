import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../..';

const FileMedia = ({
  fileType,
  image,
  isLoading,
  title,
}) => {
  if (isLoading) {
    return (
      <Icon
        className="slds-file__icon"
        sprite="utility"
        icon="image"
        size="large"
        svgClassName="slds-file__loading-icon"
        title={title}
      />
    );
  }

  if (image && image.src) return <img src={image.src} alt={image.alt || title} />;

  return (
    <Icon
      className="slds-file__icon"
      sprite="doctype"
      icon={fileType}
      title={`${title} : ${fileType}`}
    />
  );
};

FileMedia.defaultProps = {
  image: null,
};

FileMedia.propTypes = {
  fileType: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default FileMedia;
