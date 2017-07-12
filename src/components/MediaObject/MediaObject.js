import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const MediaObject = (props) => {
  const { children, className, customTag, figureLeft, figureRight, truncate, ...rest } = props;

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
    className
  ];

  const bodyClasses = [
    'slds-media__body',
    { 'slds-truncate': !!truncate },
  ];

  return (
    <Tag {...rest} className={cx(sldsClasses)}>
      {figureLeft && renderFigure(figureLeft)}
      <div className={cx(bodyClasses)}>{children}</div>
      {figureRight && renderFigure(figureRight, ['slds-media__figure_reverse'])}
    </Tag>
  );
};

MediaObject.flavors = [
  'center',
  'responsive',
];

MediaObject.defaultProps = {
  children: null,
  className: null,
  customTag: null,
  figureLeft: null,
  figureRight: null,
  truncate: false,
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
   * truncates the body
   */
  truncate: PropTypes.bool,
};

export default flavorable(MediaObject, 'media');
