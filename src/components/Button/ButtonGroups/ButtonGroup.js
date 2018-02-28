import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const wrapLi = (el, i) => <li key={i}>{el}</li>;

const ButtonGroup = (props) => {
  const {
    children,
    className,
    list,
    ...rest
  } = props;

  const sldsClasses = cx(
    list ? 'slds-button-group-list' : 'slds-button-group',
    className
  );

  const GroupEl = list ? 'ul' : 'li';
  const childEls = list ? React.Children.map(children, wrapLi) : children;

  return (
    <GroupEl {...rest} className={cx(sldsClasses)} role="group">
      {childEls}
    </GroupEl>
  );
};

ButtonGroup.defaultProps = {
  className: null,
  list: false,
};

ButtonGroup.propTypes = {
  /**
   * Any number and combination of button elements
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional additional classNames
   */
  className: PropTypes.string,
  /**
   * Renders the button group as a list
   */
  list: PropTypes.bool,
};

export default ButtonGroup;
