import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PicklistDropdownList = (props) => {
  const { children, className, header, height, heightIcon, ...rest } = props;

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
    { [`slds-dropdown_length-${height}`]: height },
    { [`slds-dropdown_length-with-icon-${heightIcon}`]: heightIcon },
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

PicklistDropdownList.defaultProps = {
  children: null,
  className: null,
  header: null,
  height: null,
  heightIcon: null,
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
  /**
   * use this instead of height if an leftIcon is on every item
   */
  heightIcon: PropTypes.oneOf([5, 7, 10]),
};

export default PicklistDropdownList;
