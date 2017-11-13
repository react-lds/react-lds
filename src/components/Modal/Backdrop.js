import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Backdrop = (props) => {
  const { className, open, ...rest } = props;

  const sldsClasses = [
    'slds-backdrop',
    { 'slds-backdrop_open': !!open },
    className
  ];

  return (<div {...rest} className={cx(sldsClasses)} />);
};

Backdrop.defaultProps = {
  className: null,
  open: false,
};

Backdrop.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * open
   */
  open: PropTypes.bool,
};


export default Backdrop;
