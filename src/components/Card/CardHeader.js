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
  ...rest,
}) => {
  const LinkTag = titleProps.href ? 'a' : 'span';

  return (
    <Grid {...rest} className={cx(['slds-card__header', className])}>
      <MediaObject className="slds-has-flexi-truncate" figureLeft={icon}>
        {title && (
          <h2 className="slds-card__header-title">
            <LinkTag
              {...titleProps}
              className={cx([
                'slds-card__header-link',
                'slds-truncate',
                titleClassName
              ])}
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
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.element,
  titleClassName: PropTypes.string,
  titleProps: PropTypes.object,
  title: PropTypes.string,
};

export default CardHeader;
