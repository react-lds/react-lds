import React from 'react';
import classNames from 'classnames';
import { prefix, flavorPropTypes, getFlavorClasses } from '../../util';

/**
 * Renders a figure with an optional className
 */

class MediaObject extends React.Component {
  renderFigure(figure, className) {
    if (!figure) {
      return null;
    }
    const classes = classNames('media__figure', className);

    return (
      <div className={prefix(classes, this.context.cssPrefix)}>
        {figure}
      </div>
    );
  }

  render() {
    const { figureLeft, figureRight, children } = this.props;

    const baseClass = 'media';
    const flavorClasses = getFlavorClasses(baseClass, this.props, MediaObject.validFlavors);
    const classes = classNames(baseClass, flavorClasses);

    return (
      <div className={prefix(classes, this.context.cssPrefix)}>
        {this.renderFigure(figureLeft)}
        <div className={prefix('media__body', this.context.cssPrefix)}>{children}</div>
        {this.renderFigure(figureRight, 'media__figure--reverse')}
      </div>
    );
  }
}

MediaObject.validFlavors = [
  'center',
  'responsive',
];

MediaObject.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

MediaObject.propTypes = {
  /**
   * This renders childs
  */
  children: React.PropTypes.node,
  /**
   * set true to center
  */
  center: React.PropTypes.bool,
  /**
   * set true to make component responsive
  */
  responsive: React.PropTypes.bool,
  /**
   * set true to reverse display order
   */
  reverse: React.PropTypes.bool,
};

MediaObject.propTypes = Object.assign(
  flavorPropTypes(MediaObject),
  {
    children: React.PropTypes.node,
    figureLeft: React.PropTypes.node,
    figureRight: React.PropTypes.node,
  }
);

export default MediaObject;
