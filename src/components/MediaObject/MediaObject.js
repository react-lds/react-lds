import React from 'react';
import { prefixable, flavorable } from '../../decorators';

/**
 * Renders a figure with an optional className
 */

class MediaObject extends React.Component {
  renderFigure(figure, className) {
    if (!figure) {
      return null;
    }

    const sldsClasses = ['media__figure', className].filter(x => !!x);

    return (
      <div className={this.props.prefix(sldsClasses, this.props)}>
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
        <div className={this.props.prefix(['media__body'], this.props)}>{children}</div>
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
  children: React.PropTypes.node,
};

MediaObject.propTypes = Object.assign({}, {
  children: React.PropTypes.node,
  figureLeft: React.PropTypes.node,
  figureRight: React.PropTypes.node,
});

export default prefixable(
  flavorable(MediaObject, 'media')
);
