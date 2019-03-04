import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ContextBarItem = ({
  as: Tag,
  currentPageLabel,
  href,
  isActive,
  isAppName,
  title,
}) => {
  const titleSpan = <span className="slds-truncate" title={title}>{title}</span>;

  return (
    <Tag className={cx('slds-context-bar__item', { 'slds-is-active': isActive })}>
      {href ? (
        <a href={href} className={cx('slds-context-bar__label-action')}>
          {isActive && <span className="slds-assistive-text">{currentPageLabel}</span>}
          {titleSpan}
        </a>
      ) : (
        <span className={cx('slds-context-bar__label-action', { 'slds-context-bar__app-name': isAppName })}>
          {titleSpan}
        </span>
      )}
    </Tag>
  );
};

ContextBarItem.defaultProps = {
  as: 'div',
  currentPageLabel: 'Current Page',
  href: null,
  isActive: false,
  isAppName: false,
  title: null,
};

ContextBarItem.propTypes = {
  as: PropTypes.oneOf(['div', 'li']),
  currentPageLabel: PropTypes.string,
  href: PropTypes.string,
  isActive: PropTypes.bool,
  isAppName: PropTypes.bool,
  title: PropTypes.string,
};

export default ContextBarItem;
