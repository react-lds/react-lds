import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Grid } from '../Grid';
import { Icon } from '../Icon';
import { MediaObject } from '../MediaObject';

const Card = (props) => {
  const {
    body,
    boundary,
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
    { 'slds-card_boundary': boundary },
    className,
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
          center
          className="slds-has-flexi-truncate"
          customTag="header"
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
  boundary: false,
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
   * When the Card is used inside Tabs, .Modal, or another Card, it no longer has the drop-shadow card look.
   * This restored said look
   */
  boundary: PropTypes.bool,
  /**
   * Card body, could be a table for example
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * footer, rendered on the bottom of the card
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
