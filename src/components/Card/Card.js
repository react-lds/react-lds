import React from 'react';

import prefixable from '../../decorators/prefixable';

import { Grid, MediaObject, Icon } from 'react-lds';

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
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * icon name
   */
  icon: React.PropTypes.string.isRequired,
  /**
   * icon sprite name
   */
  sprite: React.PropTypes.string.isRequired,
  /**
   * the header
   */
  header: React.PropTypes.string.isRequired,
  /**
   * Top right corner of the card, can be used for a Button for example
   */
  headerRight: React.PropTypes.node,
  /**
   * Body, could be a table for example
   */
  body: React.PropTypes.node,
  /**
   * Footer in the bottom right corner
   */
  footer: React.PropTypes.node,
};

export default prefixable(Card);
