import React from 'react';

import prefixable from './../../decorators/prefixable';

import { DropdownMenuListItem } from 'react-lds';

export const DropdownMenuList = ({ prefix, header, height, heightIcon, children }) => {
  const renderHeader = () => {
    if (header) {
      return (
        <div className={prefix(['dropdown__header'])}>
          <span className={prefix(['text-heading--label'])}>{header}</span>
        </div>
      );
    }

    return '';
  };

  const listClasses =
    `${prefix([
      { [`dropdown--length-${height}`]: height },
      { [`dropdown--length-with-icon-${heightIcon}`]: heightIcon },
    ])} dropdown__list`;

  return (
    <div>
      {renderHeader()}
      <ul className={listClasses} role="menu">
        {children}
      </ul>
    </div>
  );
};

DropdownMenuList.propTypes = {
  prefix: React.PropTypes.func,
  children: React.PropTypes.instanceOf(DropdownMenuListItem),
  /**
   * Optional Header for this list. Mostly useful is multiple
   * DropdownMenuListtItems are in use
   */
  header: React.PropTypes.string,
  /**
   * how many items should be displayed?
   */
  height: React.PropTypes.oneOf([5, 7, 10]),
  /**
   * use this instead of height if an leftIcon is on every item
   */
  heightIcon: React.PropTypes.oneOf([5, 7, 10]),
};

export default prefixable(DropdownMenuList);
