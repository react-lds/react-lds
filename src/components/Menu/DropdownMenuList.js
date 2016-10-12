import React from 'react';

import { prefixClasses } from '../../utils';

const DropdownMenuList = (props, { cssPrefix }) => {
  const { children, className, header, height, heightIcon, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const renderHeader = () => {
    if (header) {
      return (
        <div className={prefix('dropdown__header')}>
          <span className={prefix('text-title--caps')}>{header}</span>
        </div>
      );
    }

    return '';
  };

  const listClasses = [
    { [`dropdown--length-${height}`]: height },
    { [`dropdown--length-with-icon-${heightIcon}`]: heightIcon },
    'dropdown__list',
  ];

  return (
    <div {...rest} className={className}>
      {renderHeader()}
      <ul className={prefix(listClasses)} role="menu">
        {children}
      </ul>
    </div>
  );
};

DropdownMenuList.contextTypes = { cssPrefix: React.PropTypes.string };

DropdownMenuList.propTypes = {
  /**
   * list content
   */
  children: React.PropTypes.arrayOf(React.PropTypes.element),
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * optional header for this list. Mostly useful is multiple
   * DropdownMenuListItems are in use
   */
  header: React.PropTypes.string,
  /**
   * sets the number of items being displayed
   */
  height: React.PropTypes.oneOf([5, 7, 10]),
  /**
   * use this instead of height if an leftIcon is on every item
   */
  heightIcon: React.PropTypes.oneOf([5, 7, 10]),
};

export default DropdownMenuList;
