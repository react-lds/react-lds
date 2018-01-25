import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Grid, Icon, MediaObject } from '../../';

const Card = (props) => {
  const {
    body,
    children,
    className,
    footer,
    headerRight,
    icon,
    sprite,
    title,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-card',
    className
  ];

  let iconEl = null;

  if (typeof icon === 'string' && sprite) {
    iconEl = <Icon sprite={sprite} icon={icon} size="small" />;
  }

  if (React.isValidElement(icon)) {
    iconEl = React.cloneElement(icon, { size: 'small' });
  }

  return (
    <div {...rest} className={cx(sldsClasses)}>
      <Grid className="slds-card__header">
        <MediaObject
          className="slds-has-flexi-truncate"
          customTag="header"
          flavor="center"
          figureLeft={iconEl}
          truncate
        >
          <h2>
            <a className="slds-text-link_reset">
              <span className="slds-text-heading_small">{title}</span>
            </a>
          </h2>
        </MediaObject>
        <div className="slds-no-flex">{headerRight}</div>
      </Grid>
      <div className="slds-card__body slds-text-align_center">{children || body}</div>
      <footer className="slds-card__footer">{footer}</footer>
    </div>
  );
};

Card.defaultProps = {
  body: null,
  children: null,
  className: null,
  footer: null,
  headerRight: null,
  icon: null,
  sprite: null,
};

Card.propTypes = {
  /**
   * DEPRECATED: card body, could be a table for example
   */
  body: PropTypes.node,
  /**
   * Card body, could be a table for example
   */
  children: PropTypes.node,
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
   * Favored: Pass an <Icon /> (element)
   * DEPRECATED: icon name (string) in combination with sprite prop
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * DEPRECATED: icon sprite name
   */
  sprite: PropTypes.string,
};

export default Card;
