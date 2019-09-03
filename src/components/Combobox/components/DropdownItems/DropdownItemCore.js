import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const DropdownItemCore = (props) => {
  const {
    children,
    className,
    icon,
    id,
    isDisabled,
    isFocus,
    isHeader,
    isPresentation,
    isSelected,
    onSelect,
    ...rest
  } = props;

  const optionClasses = [
    'slds-media',
    'slds-media__small',
    'slds-listbox__option',
    className,
    { 'slds-is-selected': isSelected },
    { 'slds-has-focus': isFocus },
  ];

  const ariaProp = isDisabled ? { 'aria-disabled': true } : null;

  return (
    <li
      {...rest}
      className="slds-listbox__item"
      role="presentation"
    >
      <div
        {...ariaProp}
        id={id}
        className={cx(optionClasses)}
        onMouseDown={!isDisabled ? onSelect : null}
        role={isHeader || isPresentation ? 'presentation' : 'option'}
      >
        {icon}
        {isHeader ? children : (
          <span className="slds-media__body">
            {children}
          </span>
        )}
      </div>
    </li>
  );
};

DropdownItemCore.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFocus: PropTypes.bool,
  isHeader: PropTypes.bool,
  isPresentation: PropTypes.bool,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

DropdownItemCore.defaultProps = {
  className: null,
  icon: null,
  id: null,
  isDisabled: false,
  isFocus: false,
  isHeader: false,
  isPresentation: false,
  isSelected: false,
  onSelect: null,
};
