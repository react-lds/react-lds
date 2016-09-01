import React from 'react';

import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const MediaObject = (props, { cssPrefix }) => {
  const { children, className, figureLeft, figureRight, ...rest } = props;
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

  return (
    <div {...rest} className={prefix('media', className)}>
      {renderFigure(figureLeft)}
      <div className={prefix('media__body')}>{children}</div>
      {renderFigure(figureRight, 'media__figure--reverse')}
    </div>
  );
};

MediaObject.flavors = [
  'center',
  'responsive',
];

MediaObject.contextTypes = { cssPrefix: React.PropTypes.string };

MediaObject.propTypes = {
  /**
   * mediaObject content
   */
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * renders a figure on the left side of the media object
   */
  figureLeft: React.PropTypes.node,
  /**
   * renders a figure on the right side of the media object
   */
  figureRight: React.PropTypes.node,
};

export default flavorable(MediaObject, 'media');
