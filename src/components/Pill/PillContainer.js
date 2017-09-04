import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const PillContainer = (props) => {
  const { children, className, ...rest } = props;

  const sldsClasses = [
    'slds-pill_container',
    className,
  ];

  return (
    <div {...rest} className={cx(sldsClasses)}>
      {children}
    </div>
  );
};

PillContainer.flavors = [
  'bare',
];

PillContainer.defaultProps = {
  className: null,
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
};

export default flavorable(PillContainer, 'pill_container');
