import React from 'react';
import classNames from 'classnames';
import { prefix, getClassesWithFlavors, CustomPropTypes } from '../../util';

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
    const { flavor, figureLeft, figureRight, children } = this.props;
    const baseClass = 'media';
    const classes = getClassesWithFlavors(flavor, baseClass);

    return (
      <div className={prefix(classes, this.context.cssPrefix)}>
        {this.renderFigure(figureLeft)}
        <div className={prefix('media__body', this.context.cssPrefix)}>{children}</div>
        {this.renderFigure(figureRight, 'media__figure--reverse')}
      </div>
    );
  }
}

MediaObject.contextTypes = {
  cssPrefix: React.PropTypes.string,
};


MediaObject.propTypes = {
  children: React.PropTypes.node,
  figureLeft: React.PropTypes.node,
  figureRight: React.PropTypes.node,
  flavor: CustomPropTypes.flavor('center', 'responsive'),
};

export default MediaObject;
