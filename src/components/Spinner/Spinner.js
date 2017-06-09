import React from 'react';
import PropTypes from 'prop-types';

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

Spinner.contextTypes = { cssPrefix: PropTypes.string };

Spinner.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * size
   */

  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']).isRequired,
};

export default flavorable(Spinner, 'spinner');
