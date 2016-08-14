import React from 'react';
import { prefixable, flavorable } from '../../decorators';

export const Spinner = (props) => {
  const { prefix, size } = props;
  const sldsClasses = [
    'spinner',
    { [`spinner--${size}`]: !!size },
  ];

  return (
    <div className={prefix(['spinner_container'])}>
      <div className={prefix(sldsClasses, props)} aria-hidden="false" role="alert">
        <div className={prefix(['spinner__dot-a'])} />
        <div className={prefix(['spinner__dot-b'])} />
      </div>
    </div>
  );
};

Spinner.flavors = [
  'brand',
  'inverse',
];

Spinner.propTypes = {
  /**
   * size
   */
  size: React.PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
   * prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(
  flavorable(Spinner, 'spinner')
);
