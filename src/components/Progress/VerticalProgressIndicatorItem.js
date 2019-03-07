import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../Icon';

const VerticalProgressIndicatorItem = ({
  assistiveText,
  className,
  isActive,
  isError,
  isCompleted,
  children,
  isSuccess,
  ...rest
}) => {
  const classNames = cx('slds-progress__item', {
    'slds-is-active': isActive,
    'slds-is-completed': isCompleted || isSuccess,
    'slds-has-error': isError,
  }, className);

  const icon = isError ? 'error' : 'success';

  return (
    <li {...rest} className={classNames}>
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
};

VerticalProgressIndicatorItem.defaultProps = {
  assistiveText: null,
  className: null,
  children: null,
  isActive: false,
  isCompleted: false,
  isError: false,
  isSuccess: false,
};

VerticalProgressIndicatorItem.propTypes = {
  /**
   * Assisitive text for this step
   */
  assistiveText: PropTypes.string,
  /**
   * Step content
   */
  children: PropTypes.node,
  /**
   * Additional className
   */
  className: PropTypes.string,
  /**
   * Whether this step is active
   */
  isActive: PropTypes.bool,
  /**
   * Whether this step is complete
   */
  isCompleted: PropTypes.bool,
  /**
   * Whether this step is succeeded
   */
  isSuccess: PropTypes.bool,
  /**
   * Whether this step has an error
   */
  isError: PropTypes.bool,
};

export default VerticalProgressIndicatorItem;
