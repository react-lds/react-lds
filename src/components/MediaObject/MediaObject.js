import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const renderFigure = (figure, classes) => (
  <div className={cx(...classes)}>{figure}</div>
);

const MediaObject = (props) => {
  const {
    center,
    children,
    className,
    customTag,
    figureLeft,
    figureRight,
    renderFigureLeft,
    renderFigureRight,
    responsive,
    size,
    title,
    truncate,
    ...rest
  } = props;

  const Tag = customTag || 'div';

  const figureLeftRenderer = renderFigureLeft || renderFigure;
  const figureRightRenderer = renderFigureRight || renderFigure;

  return (
    <Tag
      {...rest}
      className={cx(
        'slds-media',
        { 'slds-media_center': center },
        { 'slds-media_responsive': responsive },
        { [`slds-media_${size}`]: !!size },
        className
      )}
    >
      {figureLeft && figureLeftRenderer(figureLeft, ['slds-media__figure'])}
      <div
        className={cx('slds-media__body', { 'slds-truncate': truncate })}
        title={title}
      >
        {children}
      </div>
      {figureRight && figureRightRenderer(figureRight, ['slds-media__figure', 'slds-media__figure_reverse'])}
    </Tag>
  );
};

MediaObject.defaultProps = {
  center: true,
  children: null,
  className: null,
  customTag: null,
  figureLeft: null,
  figureRight: null,
  renderFigureLeft: null,
  renderFigureRight: null,
  responsive: false,
  size: null,
  truncate: false,
  title: null,
};

MediaObject.propTypes = {
  /**
   * horizontally centers figures with content
   */
  center: PropTypes.bool,
  /**
   * mediaObject content
   */
  children: PropTypes.node,
  /**
   * Renders a customTag instead of a div
   */
  customTag: PropTypes.string,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * sets a figure on the left side of the media object
   */
  figureLeft: PropTypes.node,
  /**
   * sets a figure on the right side of the media object
   */
  figureRight: PropTypes.node,
  /**
   * Function to render figureLeft. Receives (elem, classes) as arguments
   */
  renderFigureLeft: PropTypes.func,
  /**
   * Function to render figureRight. Receives (elem, classes) as arguments
   */
  renderFigureRight: PropTypes.func,
  /**
   * renders a responsive variant of the MediaObject
   */
  responsive: PropTypes.bool,
  /**
   * Sizes: small, large
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   * truncates the body, requires title
   */
  truncate: PropTypes.bool,
  /**
   * title is necessary if truncate is used
   */
  title: PropTypes.string,
};

export default MediaObject;
