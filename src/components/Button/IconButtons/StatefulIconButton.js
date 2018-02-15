import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconButton from './IconButton';

const StatefulIconButton = (props) => {
  const {
    children,
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
    >
      {children}
    </IconButton>
  );
};

StatefulIconButton.defaultProps = {
  children: null,
  className: null,
  flavor: null,
  selected: false,
};

StatefulIconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  flavor: PropTypes.oneOf(['inverse']),
  selected: PropTypes.bool,
};

export default StatefulIconButton;
