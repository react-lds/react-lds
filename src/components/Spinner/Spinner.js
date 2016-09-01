import React from 'react';

import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Spinner = (props, { cssPrefix }) => {
  const { className, size, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = [
    'spinner',
    { [`spinner--${size}`]: !!size },
  ];

  return (
    <div className={prefix('spinner_container')}>
      <div {...rest} className={prefix(classes, className)} aria-hidden="false" role="alert">
        <div className={prefix('spinner__dot-a')} />
        <div className={prefix('spinner__dot-b')} />
      </div>
    </div>
  );
};

Spinner.flavors = [
  'brand',
  'inverse',
];

Spinner.contextTypes = { cssPrefix: React.PropTypes.string };

Spinner.propTypes = {
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * size
   */
  size: React.PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};

export default flavorable(Spinner, 'spinner');
