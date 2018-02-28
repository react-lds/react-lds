import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '../../';

const getToggleHandler = (state, fn) => evt => fn(!state, evt);

const VerticalNavigationOverflow = (props) => {
  const {
    children,
    className,
    id,
    isOpen,
    labelOpen,
    labelClosed,
    onToggle,
    title,
    ...rest
  } = props;

  const renderChild = child => React.cloneElement(child, { 'aria-describedby': id });

  const sldsClasses = ['slds-nav-vertical__overflow', className];

  return (
    <div className={cx(sldsClasses)} {...rest}>
      <Button
        icon="chevronright"
        sprite="utility"
        className="slds-button_reset slds-nav-vertical__action slds-nav-vertical__action_overflow"
        flavor={null}
        onClick={getToggleHandler(isOpen, onToggle)}
        aria-controls={id}
        aria-expanded={isOpen}
      >
        <span className="slds-nav-vertical__action-text">
          {isOpen ? labelOpen : labelClosed}
          <span className="slds-assistive-text">{title}</span>
        </span>
      </Button>
      <div id={id} className={isOpen ? 'slds-show' : 'slds-hide'}>
        <ul>{React.Children.map(children, renderChild)}</ul>
      </div>
    </div>
  );
};

VerticalNavigationOverflow.defaultProps = {
  className: null,
  labelOpen: 'Show less',
  labelClosed: 'Show more',
};

VerticalNavigationOverflow.propTypes = {
  /**
   * One or more VerticalNavigationItem
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname to be applied to the parent
   */
  className: PropTypes.string,
  /**
   * Id of title, will relate children to parent
   */
  id: PropTypes.string.isRequired,
  /**
   * Button text when open
   */
  labelOpen: PropTypes.string,
  /**
   * Button text when closed
   */
  labelClosed: PropTypes.string,
  /**
   * Open state of overflow
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Button click callback, called with: (nextState, evt)
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * Parent section title, accessibility only
   */
  title: PropTypes.string.isRequired,
};

export default VerticalNavigationOverflow;
