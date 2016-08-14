import React from 'react';

import prefixable from '../../decorators/prefixable';

import { Grid, MediaObject, Icon } from '../../index';

export const Card = ({ prefix, icon, sprite, header, headerRight, body, footer }) =>
  <div className={prefix(['card'])}>
    <Grid className={prefix(['card__header'])}>
      <MediaObject
        center
        figureLeft={<Icon sprite={sprite} icon={icon} size="small" />}
        sldsClasses={['has-flexi-truncate']}
      >
        <a className={prefix(['text-link--reset'])}>
          <span className={prefix(['text-heading--small'])}>{header}</span>
        </a>
      </MediaObject>
      <div className={prefix(['no-flex'])}>
        {headerRight}
      </div>
    </Grid>
    <div className={prefix(['card__body', 'text-align--center'])}>
      {body}
    </div>
    <div className={prefix(['card__footer'])}>
      {footer}
    </div>
  </div>;

Card.propTypes = {
  /**
   * card body, could be a table for example
   */
  body: React.PropTypes.node,
  /**
   * footer in the bottom right corner
   */
  footer: React.PropTypes.node,
  /**
   * card header
   */
  header: React.PropTypes.string.isRequired,
  /**
   * top right corner of the card, can be used for a Button for example
   */
  headerRight: React.PropTypes.node,
  /**
   * icon name
   */
  icon: React.PropTypes.string.isRequired,
  /**
   * icon sprite name
   */
  sprite: React.PropTypes.string.isRequired,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(Card);
