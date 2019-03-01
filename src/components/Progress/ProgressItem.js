import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconButton, ButtonIcon } from '../Button';
import { Icon } from '../Icon';

const ProgressItem = ({
  assistiveText,
  isActive,
  isError,
  isCompleted,
  isVertical,
  children,
  isSuccess,
}) => {
  const className = cx('slds-progress__item', {
    'slds-is-active': isActive,
    'slds-is-completed': isCompleted || isSuccess,
    'slds-has-error': isError,
  });

  const icon = isError ? 'error' : 'success';

  if (isVertical) {
    return (
      <li className={className}>
        {!isCompleted && !isError && !isSuccess ? (
          <div className="slds-progress__marker" />
        ) : (
          <Icon
            size="xx-small"
            sprite="utility"
            icon={icon}
            className={cx('slds-progress__marker slds-progress__marker_icon', {
              'slds-progress__marker_icon-success': isSuccess,
            })}
            title={assistiveText}
          />
        )}
        <div className="slds-progress__item_content slds-grid slds-grid_align-spread">
          {children || assistiveText}
        </div>
      </li>
    );
  }

  return (
    <li className={className}>
      {!isCompleted && !isError && !isSuccess ? (
        <button
          type="button"
          className="slds-button slds-progress__marker"
          title={assistiveText}
        >
          {assistiveText && (
            <span className="slds-assistive-text">{assistiveText}</span>
          )}
        </button>
      ) : (
        <IconButton
          className="slds-progress__marker slds-progress__marker_icon"
          title={assistiveText}
        >
          <ButtonIcon sprite="utility" icon={icon} />
        </IconButton>
      )}
    </li>
  );
};

ProgressItem.defaultProps = {
  isActive: false,
  isCompleted: false,
  isError: false,
  assistiveText: null,
  isVertical: false,
  children: null,
  isSuccess: false,
};

ProgressItem.propTypes = {
  isActive: PropTypes.bool,
  isCompleted: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  assistiveText: PropTypes.string,
  isVertical: PropTypes.bool,
  children: PropTypes.node,
};

export default ProgressItem;
