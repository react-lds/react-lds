import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';
import { Grid, Icon, MediaObject } from '../../';

const Card = (props, { cssPrefix }) => {
  const {
    body,
    className,
    footer,
    headerRight,
    icon,
    sprite,
    title,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (
    <div {...rest} className={prefix('card', className)}>
      <Grid className={prefix('card__header')}>
        <MediaObject
          customTag="header"
          center
          className={prefix('has-flexi-truncate')}
          figureLeft={<Icon sprite={sprite} icon={icon} size="small" />}
          truncate
        >
          <h2>
            <a className={prefix('text-link--reset')}>
              <span className={prefix('text-heading--small')}>{title}</span>
            </a>
          </h2>
        </MediaObject>
        <div className={prefix('no-flex')}>{headerRight}</div>
      </Grid>
      <div className={prefix(['card__body', 'text-align--center'])}>{body}</div>
      <div className={prefix(['card__footer'])}>{footer}</div>
    </div>
  );
};

Card.contextTypes = { cssPrefix: PropTypes.string };

Card.propTypes = {
  /**
   * card body, could be a table for example
   */
  body: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * footer in the bottom right corner
   */
  footer: PropTypes.node,
  /**
   * card header
   */
  title: PropTypes.string.isRequired,
  /**
   * top right corner of the card, can be used for a Button for example
   */
  headerRight: PropTypes.node,
  /**
   * icon name
   */
  icon: PropTypes.string.isRequired,
  /**
   * icon sprite name
   */
  sprite: PropTypes.string.isRequired,
};

export default Card;
