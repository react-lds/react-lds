import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PillContainer = (props) => {
  const {
    bare, children, className, ...rest
  } = props;

  const sldsClasses = [
    'slds-pill_container',
    { 'slds-pill_container_bare': !!bare },
    className,
  ];

  return (
    <div {...rest} className={cx(sldsClasses)}>
      {children}
    </div>
  );
};

PillContainer.defaultProps = {
  bare: false,
  className: null,
};

PillContainer.propTypes = {
  /**
   * bare flavor
   */
  bare: PropTypes.bool,
  /**
   * the pill(s) passed into the component
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
};

export default PillContainer;
