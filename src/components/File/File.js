import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FileActions from './FileActions';
import FileCaption from './FileCaption';
import FileExternalIcon from './FileExternalIcon';
import FileMedia from './FileMedia';

const RATIOS = [
  '1-by-1',
  '4-by-3',
  '16-by-9'
];

const File = (props) => {
  const {
    actions,
    className,
    externalIcon,
    fileType,
    hideTitle,
    image,
    isLoading,
    ratio,
    title,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-file',
    'slds-file_card',
    { 'slds-file_center-icon': isLoading && hideTitle },
  ];

  const mediaClasses = [
    'slds-file__crop',
    { [`slds-file__crop_${ratio}`]: ratio },
    className,
  ];

  return (
    <div className={cx(sldsClasses)}>
      <figure>
        <a {...rest} className={cx(mediaClasses)}>
          <FileMedia
            fileType={fileType}
            image={image}
            isLoading={isLoading}
            title={title}
          />
        </a>
        {!hideTitle && (
          <FileCaption
            fileType={fileType}
            hasActions={!!actions}
            title={title}
          />
        )}
        {actions && <FileActions hideTitle={hideTitle}>{actions}</FileActions>}
        {externalIcon && <FileExternalIcon externalIcon={externalIcon} />}
      </figure>
    </div>
  );
};

File.defaultProps = {
  actions: null,
  className: null,
  externalIcon: null,
  fileType: 'image',
  image: null,
  isLoading: false,
  ratio: null,
  hideTitle: false,
  title: null,
};

File.propTypes = {
  /**
   * ButtonGroup with actions
   */
  actions: PropTypes.element,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * Renders an externalIcon for images from external services
   */
  externalIcon: PropTypes.shape({
    icon: PropTypes.string,
    sprite: PropTypes.string,
    title: PropTypes.string,
  }),
  /**
   * fileType corresponding to SF doctype icon
   */
  fileType: PropTypes.string,
  /**
   * Determines if the title is shown
   */
  hideTitle: PropTypes.bool,
  /**
   * Image with src & alt
   */
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  /**
   * Indicate a loading image
   */
  isLoading: PropTypes.bool,
  /**
   * Optional ratio:   '1-by-1', '4-by-3', '16-by-9'
   */
  ratio: PropTypes.oneOf(RATIOS),
  /**
   * Image title
   */
  title: PropTypes.string.isRequired,
};

export default File;
