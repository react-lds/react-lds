import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const List = ({
  children,
  className,
  mode,
  ...rest
}) => (
  <dl
    {...rest}
    className={cx([
      `slds-list_${mode}`,
      { 'slds-wrap': mode === 'horizontal' },
      className,
    ])}
  >
    {children}
  </dl>
);

List.defaultProps = {
  className: null,
  mode: 'horizontal',
};

List.propTypes = {
  /**
   * one or more sets of `Value` or `Name` components
   */
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mode: PropTypes.oneOf(['horizontal', 'inline', 'stacked']),
};

const NameOrValue = ({
  as: El,
  className,
  children,
  title,
  ...rest
}) => (
  <El
    {...rest}
    className={cx([className, 'slds-truncate'])}
    title={title || (typeof children === 'string' ? children : '')}
  >
    {children}
  </El>
);

NameOrValue.defaultProps = {
  className: null,
  title: null,
};

NameOrValue.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export const Name = ({
  className,
  ...rest
}) => (
  <NameOrValue
    {...rest}
    as="dt"
    className={cx([
      'slds-item_label',
      'slds-text-color_weak',
      className
    ])}
  />
);

Name.defaultProps = {
  className: null,
  title: null,
};

Name.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * additional class names, added to `dt`
   */
  className: PropTypes.string,
  /**
   * title `attribute`, overwrites `children` if `children` is a string
   */
  title: PropTypes.string,
};

export const Value = ({
  className,
  ...rest
}) => (
  <NameOrValue
    {...rest}
    as="dd"
    className={cx(['slds-item_detail', className])}
  />
);

Value.defaultProps = {
  className: null,
  title: null,
};

Value.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * additional class names, added to `dd`
   */
  className: PropTypes.string,
  /**
   * title `attribute`, overwrites `children` if `children` is a string
   */
  title: PropTypes.string,
};
