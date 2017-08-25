/* ./src/components/{Component}/{Component}.js */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon, MediaObject } from '../..';

const RATIOS = [
  '1-by-1',
  '4-by-3',
  '16-by-9'
];

export const File = (props) => {
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

  const renderActions = () => {
    if (hideTitle) {
      return (
        <div className="slds-file__title slds-file__title_scrim">
          <div className="slds-file__actions-menu">{actions}</div>
        </div>
      );
    }

    return <div className="slds-file__actions-menu">{actions}</div>;
  };

  const renderCaption = () => {
    const fileIcon = (
      <Icon
        sprite="doctype"
        icon={fileType}
        title={fileType}
        size="x-small"
      />
    );

    const captionClasses = [
      'slds-file__title',
      'slds-file__title_card',
      { 'slds-file-has-actions': actions && !hideTitle },
    ];

    return (
      <figcaption className={cx(captionClasses)}>
        <MediaObject figureLeft={fileIcon} small center>
          <span className="slds-file__text slds-truncate" title={title}>{title}</span>
        </MediaObject>
      </figcaption>
    );
  };

  const renderExternalIcon = () => {
    const { icon, sprite, title: iconTitle } = externalIcon;

    return (
      <div className="slds-file__external-icon">
        <Icon
          className="slds-file__icon"
          svgClassName="slds-icon-text-default"
          icon={icon}
          sprite={sprite}
          title={iconTitle}
        />
      </div>
    );
  };

  const renderMedia = () => {
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

    if (image && image.src) { return <img src={image.src} alt={image.alt || title} />; }

    return (
      <Icon
        className="slds-file__icon"
        sprite="doctype"
        icon={fileType}
        title={fileType}
      />
    );
  };

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
          {renderMedia()}
        </a>
        {!hideTitle && renderCaption()}
        {actions && renderActions()}
        {externalIcon && renderExternalIcon()}
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
    src: PropTypes.string,
    alt: PropTypes.string,
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
