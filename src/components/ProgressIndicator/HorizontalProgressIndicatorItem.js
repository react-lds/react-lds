import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, IconButton, ButtonIcon } from '../Button';

// TODO: What's still missing is the step popover for horizontal progress
// indicators.

const HorizontalProgressIndicatorItem = ({
  assistiveText,
  className,
  isActive,
  isError,
  isCompleted,
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
        <Button className="slds-progress__marker" title={assistiveText} flavor={null}>
          {assistiveText && (
            <span className="slds-assistive-text">{assistiveText}</span>
          )}
        </Button>
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

HorizontalProgressIndicatorItem.defaultProps = {
  assistiveText: null,
  className: null,
  isActive: false,
  isCompleted: false,
  isError: false,
  isSuccess: false,
};

HorizontalProgressIndicatorItem.propTypes = {
  /**
   * Assisitive text for this step
   */
  assistiveText: PropTypes.string,
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

export default HorizontalProgressIndicatorItem;
