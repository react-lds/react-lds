import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PicklistDropdownList = (props) => {
  const { children, className, header, height, ...rest } = props;

  const renderHeader = () => {
    if (header) {
      return (
        <div className="slds-dropdown__header">
          <span className="slds-text-title_caps">{header}</span>
        </div>
      );
    }

    return null;
  };

  const listClasses = [
    { [`slds-dropdown_length-with-icon-${height}`]: height },
    'slds-dropdown',
    'slds-dropdown_fluid',
    'slds-listbox',
    'slds-listbox_vertical',
  ];

  return (
    <div id="listbox-unique-id" role="listbox" {...rest} className={className}>
      {renderHeader()}
      <ul className={cx(listClasses)} role="presentation">
        {children}
      </ul>
    </div>
  );
};

PicklistDropdownList.propTypes = {
  /**
   * list content
   */
  children: PropTypes.arrayOf(PropTypes.element),
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * optional header for this list. Mostly useful is multiple
   * PicklistDropdownListItems are in use
   */
  header: PropTypes.string,
  /**
   * sets the number of items being displayed
   */
  height: PropTypes.oneOf([5, 7, 10]),
};

PicklistDropdownList.defaultProps = {
  children: null,
  className: null,
  header: null,
  height: null,
};

export default PicklistDropdownList;
