import React from 'react';
import { prefixable, flavorable } from '../../decorators';

/**
 * Renders a figure with an optional className
 */

export class MediaObject extends React.Component {
  renderFigure(figure, className) {
    if (!figure) {
      return null;
    }

    return (
      <div className={this.props.prefix(['media__figure', className])}>
        {figure}
      </div>
    );
  }

  render() {
    const { figureLeft, figureRight, children } = this.props;
    const sldsClasses = ['media'];

    return (
      <div className={this.props.prefix(sldsClasses, this.props)}>
        {this.renderFigure(figureLeft)}
        <div className={this.props.prefix(['media__body'])}>{children}</div>
        {this.renderFigure(figureRight, 'media__figure--reverse')}
      </div>
    );
  }
}

MediaObject.flavors = [
  'center',
  'responsive',
];


MediaObject.propTypes = {
  /**
   * mediaObject content
   */
  children: React.PropTypes.node,
  /**
   * renders a figure on the left side of the media object
   */
  figureLeft: React.PropTypes.node,
  /**
   * renders a figure on the right side of the media object
   */
  figureRight: React.PropTypes.node,
  /**
   * prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(
  flavorable(MediaObject, 'media')
);
