import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { flavorable } from '../../decorators';

export const Backdrop = (props) => {
  const { className, ...rest } = props;

  const sldsClasses = [
    'slds-backdrop',
    className
  ];

  return (<div {...rest} className={cx(sldsClasses)} />);
};

Backdrop.flavors = [
  'open',
];

Backdrop.defaultProps = {
  className: null,
};

Backdrop.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
};


export default flavorable(Backdrop, 'backdrop');
