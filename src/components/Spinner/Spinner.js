import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { SpinnerContainer } from './';

const Spinner = (props) => {
  const {
    assistiveLabel,
    className,
    container,
    delayed,
    flavor,
    inline,
    size,
    ...rest
  } = props;

  const baseClass = 'slds-spinner';

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_${size}`]: !!size },
    { [`${baseClass}_${flavor}`]: !!flavor },
    { [`${baseClass}_delayed`]: !!delayed },
    { [`${baseClass}_inline`]: !!inline },
    className,
  ];

  const spinner = (
    <div {...rest} role="status" className={cx(sldsClasses)}>
      <span className="slds-assistive-text">{assistiveLabel}</span>
      <div className="slds-spinner__dot-a" />
      <div className="slds-spinner__dot-b" />
    </div>
  );

  if (container) return <SpinnerContainer>{spinner}</SpinnerContainer>;
  return spinner;
};

Spinner.defaultProps = {
  assistiveLabel: 'Loading',
  className: null,
  container: false,
  delayed: false,
  flavor: null,
  inline: false,
  size: 'medium',
};

Spinner.propTypes = {
  /**
   * Label that will be shown on hover
   */
  assistiveLabel: PropTypes.string,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * convenience prop to wrap Spinner in SpinnerContainer
   */
  container: PropTypes.bool,
  /**
   * Adds a 300ms start delay
   */
  delayed: PropTypes.bool,
  /**
   * Flavor. Can be either 'brand' or 'inverse'
   */
  flavor: PropTypes.oneOf(['brand', 'inverse']),
  /**
   * inline variation
   */
  inline: PropTypes.bool,
  /**
   * spinner sizes: xx-small, x-small, small, medium, large
   */
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
};

export default Spinner;
