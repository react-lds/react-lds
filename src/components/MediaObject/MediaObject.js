import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const MediaObject = (props) => {
  const { children, className, customTag, figureLeft, figureRight, flavor, title, truncate, ...rest } = props;

  const renderFigure = (figure, classes = []) => {
    const figureClasses = [
      'slds-media__figure',
      ...classes,
    ];

    return (<div className={cx(figureClasses)}>{figure}</div>);
  };

  const Tag = customTag || 'div';

  const flavorClasses = Array.isArray(flavor) ? flavor.map(f => `slds-media_${f}`) : `slds-media_${flavor}`;

  const sldsClasses = [
    'slds-media',
    className,
    flavorClasses,
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
   * flavor: string or array of strings. Flavors: center, responsive, small
   */
  flavor: PropTypes.oneOfType([PropTypes.oneOf([
    'center',
    'responsive',
    'small',
  ]), PropTypes.arrayOf(PropTypes.oneOf([
    'center',
    'responsive',
    'small',
  ]))]),
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
