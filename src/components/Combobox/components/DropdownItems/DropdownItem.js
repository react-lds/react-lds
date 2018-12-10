import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const DropdownItem = (props) => {
  const {
    children,
    className,
    icon,
    id,
    isFocus,
    isHeader,
    isPresentation,
    isSelected,
    onSelect,
  } = props;

  const optionClasses = [
    'slds-media',
    'slds-media__small',
    'slds-listbox__option',
    className,
    { 'slds-is-selected': isSelected },
    { 'slds-has-focus': isFocus },
  ];

  return (
    <li className="slds-listbox__item" role="presentation">
      <div
        id={id}
        className={cx(optionClasses)}
        onMouseDown={onSelect}
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

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string,
  isFocus: PropTypes.bool,
  isHeader: PropTypes.bool,
  isPresentation: PropTypes.bool,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

DropdownItem.defaultProps = {
  className: null,
  icon: null,
  id: null,
  isFocus: false,
  isHeader: false,
  isPresentation: false,
  isSelected: false,
  onSelect: null,
};
