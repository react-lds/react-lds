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
  body: null,
  boundary: false,
  footer: null,
  headerRight: null,
  icon: null,
  title: null,
};

Card.propTypes = {
  /**
   * Determines the HTML element type that the Card renders as
   */
  as: PropTypes.string,
  /**
   * Content
   */
  children: PropTypes.node,
  /**
   * Optional classname, applied to top-level tag
   */
  className: PropTypes.string,
  /**
   * Should be set to true for the outermost `Card`
   */
  isBoundary: PropTypes.bool,
  /**
   * By default, the content receives `medium` padding. Set to `false` to remove this
   */
  isPadded: PropTypes.bool,
  /**
   * Render function for the Card footer. Can use `<CardFooter />`
   */
  renderFooter: PropTypes.func,
  /**
   * Render function for the Card footer. Can use `<CardHeader />`
   */
  renderHeader: PropTypes.func,
  /**
   * DEPRECATED: Use `children` instead
   */
  body: PropTypes.node,
  /**
   * DEPRECATED: Use `isHeader`  instead
   */
  boundary: PropTypes.bool,
  /**
   * DEPRECATED: Use `renderFooter()` instead
   */
  footer: PropTypes.node,
  /**
   * DEPRECATED: Set this in `renderHeader()` => `<CardHeader />` instead
   */
  title: PropTypes.string,
  /**
   * DEPRECATED: Use `renderHeader()` instead (see example)
   */
  headerRight: PropTypes.node,
  /**
   * DEPRECATED: Set this in `renderHeader()` => `<CardHeader />` instead
   */
  icon: PropTypes.element,
};

export default Card;
