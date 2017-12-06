import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const VerticalNavigationSection = (props) => {
  const {
    children,
    className,
    id,
    title,
    ...rest
  } = props;

  const sldsClasses = ['slds-nav-vertical__section', className];

  const renderChild = child => React.cloneElement(child, { 'aria-describedby': id });

  return (
    <div {...rest} className={cx(sldsClasses)}>
      <h2 className="slds-nav-vertical__title slds-text-title_caps" id={id}>{title}</h2>
      <ul>{React.Children.map(children, renderChild)}</ul>
    </div>
  );
};

VerticalNavigationSection.defaultProps = {
  className: null,
};

VerticalNavigationSection.propTypes = {
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
   * Section title
   */
  title: PropTypes.string.isRequired,
};

export default VerticalNavigationSection;
