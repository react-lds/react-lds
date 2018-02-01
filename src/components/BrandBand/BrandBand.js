import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const BrandBand = (props) => {
  const {
    className,
    cover,
    noBackground,
    size,
    ...rest
  } = props;

  const baseClass = 'slds-brand-band';

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_none`]: noBackground },
    { [`${baseClass}_cover`]: cover },
    { [`${baseClass}_${size}`]: !!size },
    className
  ];

  return <div {...rest} className={cx(sldsClasses)} />;
};

BrandBand.defaultProps = {
  className: null,
  cover: false,
  noBackground: false,
  size: 'medium',
};

BrandBand.propTypes = {
  /**
   * Optional additional classes
   */
  className: PropTypes.string,
  /**
   * Changes background image to be set to cover rather than contain
  */
  cover: PropTypes.bool,
  /**
   * Removes image but keeps page background
   */
  noBackground: PropTypes.bool,
  /**
   * Sets height of brand band to {size}. Can either be: small, medium, large
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default BrandBand;
