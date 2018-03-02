import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from './Button';

const StatefulButton = (props) => {
  const {
    children,
    className,
    selected,
    ...rest
  } = props;

  const sldsClasses = cx(
    'slds-button_stateful',
    selected ? 'slds-is-selected' : 'slds-not-selected',
    className
  );

  return (
    <Button {...rest} aria-live="assertive" className={sldsClasses}>
      {children}
    </Button>
  );
};

StatefulButton.defaultProps = {
  className: null,
  selected: false,
};

StatefulButton.propTypes = {
  /**
   * Determines which state to render
   */
  selected: PropTypes.bool,
  /**
   * `StatefulButtonState` components for: selected, not-selected & focus
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional additional className
   */
  className: PropTypes.string,
};

export default StatefulButton;
