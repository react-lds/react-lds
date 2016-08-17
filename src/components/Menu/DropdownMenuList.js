import React from 'react';

import prefixable from './../../decorators/prefixable';

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
  /**
   * list content
   */
  children: React.PropTypes.arrayOf(React.PropTypes.element),
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
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(DropdownMenuList);
