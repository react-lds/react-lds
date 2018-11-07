import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

const FileMedia = ({
  fileType,
  image,
  isLoading,
  title,
}) => {
  if (isLoading) return <Spinner size="medium" />;

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
