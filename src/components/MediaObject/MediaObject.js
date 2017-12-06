import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { applyDecorators, decoratorProp } from '../../utils';

const MediaObject = (props) => {
  const {
    children,
    className,
    customTag,
    figureLeft,
    figureRight,
    flavor,
    size,
    title,
    truncate,
    ...rest } = props;

  const renderFigure = (figure, classes = []) => {
    const figureClasses = [
      'slds-media__figure',
      ...classes,
    ];

    return (<div className={cx(figureClasses)}>{figure}</div>);
  };

  const Tag = customTag || 'div';

  const sldsClasses = [
    'slds-media',
    className,
    applyDecorators(flavor, 'media'),
    { [`slds-media_${size}`]: !!size },
  ];

  const bodyClasses = [
    'slds-media__body',
    { 'slds-truncate': !!truncate },
  ];

  return (
    <Tag {...rest} className={cx(sldsClasses)}>
      {figureLeft && renderFigure(figureLeft)}
      <div className={cx(bodyClasses)} title={title}>{children}</div>
      {figureRight && renderFigure(figureRight, ['slds-media__figure_reverse'])}
    </Tag>
  );
};

MediaObject.defaultProps = {
  children: null,
  className: null,
  customTag: null,
  figureLeft: null,
  figureRight: null,
  flavor: [],
  size: null,
  truncate: false,
  title: null,
};

MediaObject.propTypes = {
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
   * renders a figure on the left side of the media object
   */
  figureLeft: PropTypes.node,
  /**
   * renders a figure on the right side of the media object
   */
  figureRight: PropTypes.node,
  /**
   * flavor: array of flavors, you can also provide a single flavor as a string.
   * Flavors: center, responsive
   */
  flavor: decoratorProp([
    'center',
    'responsive',
  ]),
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
