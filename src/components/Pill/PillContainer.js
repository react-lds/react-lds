import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const PillContainer = (props) => {
  const { children, className, onClick, ...rest } = props;

  const sldsClasses = [
    'slds-pill_container',
    className,
  ];

  return (
    <div {...rest} className={cx(sldsClasses)} onClick={onClick}>
      {children}
    </div>
  );
};

PillContainer.flavors = [
  'bare',
];

PillContainer.defaultProps = {
  className: null,
  onClick: () => {},
};

PillContainer.propTypes = {
  /**
   * the pill(s) passed into the component
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * onClick handler for the pill container
   */
  onClick: PropTypes.func,
};

export default flavorable(PillContainer, 'pill_container');
