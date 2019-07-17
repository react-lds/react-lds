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
  /**
   * Determines the HTML element type that the Card renders as
   */
  as: 'article',
  /**
   * Content
   */
  children: null,
  className: null,
  /**
   * Should be set to true for the outermost `Card`
   */
  isBoundary: false,
  /**
   * By default, the content receives `medium` padding. Set to `false` to remove this
   */
  isPadded: true,
  /**
   * Render function for the Card footer. Can use `<CardFooter />`
   */
  renderFooter: null,
  /**
   * Render function for the Card footer. Can use `<CardHeader />`
   */
  renderHeader: null,
  /**
   * DEPRECATED: Use `children` instead
   */
  body: null,
  /**
   * DEPRECATED: Use `isHeader`  instead
   */
  boundary: false,
  /**
   * DEPRECATED: Use `renderFooter()` instead
   */
  footer: null,
  /**
   * DEPRECATED: Use `renderHeader()` instead (see example)
   */
  headerRight: null,
  /**
   * DEPRECATED: Set this in `renderHeader()` => `<CardHeader />` instead
   */
  icon: null,
  /**
   * DEPRECATED: Set this in `renderHeader()` => `<CardHeader />` instead
   */
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
