import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ButtonGroup = (props) => {
  const {
    children,
    className,
    list,
    row,
    ...rest
  } = props;

  const wrapLi = (el, i) => (
    <li className={row ? 'slds-button-group-item' : null} key={i}>{el}</li>
  );

  const isDivGroup = !list && !row;

  const sldsClasses = cx(
    { 'slds-button-group': isDivGroup },
    { 'slds-button-group-list': list },
    { 'slds-button-group-row': row },
    className
  );

  const ButtonGroupEl = isDivGroup ? 'div' : 'ul';
  const childEls = !isDivGroup ? React.Children.map(children, wrapLi) : children;

  return (
    <ButtonGroupEl
      {...rest}
      className={cx(sldsClasses)}
      role={isDivGroup ? 'group' : null}
    >
      {childEls}
    </ButtonGroupEl>
  );
};

ButtonGroup.defaultProps = {
  className: null,
  list: false,
  row: false,
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
  /**
   * Renders the button group as a row of separate buttons
   */
  row: PropTypes.bool,
};

export default ButtonGroup;
