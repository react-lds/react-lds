import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CardHeader from './CardHeader';

const Card = ({
  as: Tag,
  boundary,
  children,
  className,
  isBoundary,
  isPadded,
  renderFooter,
  renderHeader,
  body,
  footer,
  headerRight,
  title,
  icon,
  ...rest
}) => (
  <Tag
    {...rest}
    className={cx([
      'slds-card',
      { 'slds-card_boundary': isBoundary || boundary },
      className
    ])}
  >
    {renderHeader ? renderHeader() : title && (
      <CardHeader icon={icon} title={title}>
        {headerRight}
      </CardHeader>
    )}
    <div
      className={cx([
        'slds-card__body',
        { 'slds-card__body_inner': isPadded },
      ])}
    >
      {children || body}
    </div>
    {renderFooter ? renderFooter() : footer && (
      <footer className="slds-card__footer">{footer}</footer>
    )}
  </Tag>
);

Card.defaultProps = {
  as: 'article',
  children: null,
  className: null,
  isBoundary: false,
  isPadded: true,
  renderFooter: null,
  renderHeader: null,
  // TODO: DEPRECATE THESE PROPS
  body: null,
  boundary: false,
  footer: null,
  headerRight: null,
  icon: null,
  title: null,
};

Card.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isBoundary: PropTypes.bool,
  isPadded: PropTypes.bool,
  renderFooter: PropTypes.func,
  renderHeader: PropTypes.func,
  // TODO: DEPRECATE THESE PROPS
  body: PropTypes.node,
  boundary: PropTypes.bool,
  footer: PropTypes.node,
  title: PropTypes.string,
  headerRight: PropTypes.node,
  icon: PropTypes.element,
};

export default Card;
