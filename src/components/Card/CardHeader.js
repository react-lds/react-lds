import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Grid } from '../Grid';
import { MediaObject } from '../MediaObject';

const CardHeader = ({
  children,
  className,
  icon,
  titleClassName,
  titleProps,
  title,
  ...rest
}) => {
  const LinkTag = titleProps.href ? 'a' : 'span';

  // The LDS sets `.slds-truncate` on the span, that does not work in praxis though
  return (
    <Grid {...rest} className={cx(['slds-card__header', className])}>
      <MediaObject className="slds-has-flexi-truncate" figureLeft={icon}>
        {title && (
          <h2 className="slds-card__header-title slds-truncate">
            <LinkTag
              {...titleProps}
              className={cx(['slds-card__header-link', titleClassName])}
            >
              <span>{title}</span>
            </LinkTag>
          </h2>
        )}
      </MediaObject>
      {children && <div className="slds-no-flex">{children}</div>}
    </Grid>
  );
};

CardHeader.defaultProps = {
  children: null,
  className: null,
  icon: null,
  titleClassName: null,
  titleProps: {},
  title: null,
};

CardHeader.propTypes = {
  /**
   * Renders in the right column
   */
  children: PropTypes.node,
  /**
   * Applied to top-level element `slds-card__header`
   */
  className: PropTypes.string,
  /**
   * Optional icon, should be `<Icon />`
   */
  icon: PropTypes.element,
  /**
   * Applied to `slds-card__header-link`
   */
  titleClassName: PropTypes.string,
  /**
   * Props passed to `slds-card__header-link`. If `href` is set, title will render as `a`, else `span`
   */
  titleProps: PropTypes.object,
  /**
   * Title text or element
   */
  title: PropTypes.node,
};

export default CardHeader;
