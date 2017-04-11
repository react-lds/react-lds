import React from 'react';
import PropTypes from 'prop-types';

import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const MediaObject = (props, { cssPrefix }) => {
  const { children, className, customTag, figureLeft, figureRight, truncate, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const renderFigure = (figure, classes) => {
    if (!figure) {
      return null;
    }

    const sldsClasses = ['media__figure'];
    if (classes) {
      sldsClasses.push(classes);
    }

    return (<div className={prefix(sldsClasses)}>{figure}</div>);
  };

  const Tag = customTag || 'div';

  const bodyClasses = [
    'media__body',
    { truncate: !!truncate },
  ];

  return (
    <Tag {...rest} className={prefix('media', className)}>
      {renderFigure(figureLeft)}
      <div className={prefix(bodyClasses)}>{children}</div>
      {renderFigure(figureRight, 'media__figure--reverse')}
    </Tag>
  );
};

MediaObject.flavors = [
  'center',
  'responsive',
];

MediaObject.contextTypes = { cssPrefix: PropTypes.string };

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
