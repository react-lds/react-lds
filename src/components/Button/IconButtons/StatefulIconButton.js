import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconButton from './IconButton';

const StatefulIconButton = (props) => {
  const {
    className,
    flavor,
    selected,
    ...rest
  } = props;

  const sldsClasses = cx(
    { 'slds-is-selected': selected },
    className,
  );

  return (
    <IconButton
      {...rest}
      className={sldsClasses}
      aria-pressed={selected}
      flavor={flavor}
      border="filled"
    />
  );
};

StatefulIconButton.defaultProps = {
  className: null,
  flavor: null,
  selected: false,
};

StatefulIconButton.propTypes = {
  /**
   * Optional additional className
   */
  className: PropTypes.string,
  /**
   * Button flavor. Can be `inverse`
   */
  flavor: PropTypes.oneOf(['inverse']),
  /**
   * Whether the `IconButton` should render as selected
   */
  selected: PropTypes.bool,
};

export default StatefulIconButton;
