import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Breadcrumb = (props) => {
  const { children, className, ...rest } = props;
  let filtered = children;

  if (!Array.isArray(children)) {
    filtered = [children];
  }

  const sldsClasses = [
    'slds-breadcrumb',
    'slds-list_horizontal',
    'slds-wrap',
    className
  ];

  const liClasses = [
    'slds-breadcrumb__item',
    'slds-text-title_caps'
  ];

  const wrapItems = filtered.map(child => <li className={cx(liClasses)} key={child.key}>{child}</li>);

  return (
    <nav {...rest} className={className} aria-label="Breadcrumbs">
      <ol className={cx(sldsClasses)}>
        {wrapItems}
      </ol>
    </nav>);
};

Breadcrumb.defaultProps = {
  className: null,
};

Breadcrumb.propTypes = {
  /**
   * One or many children, that automatically get wrapped into the surrounding
   * `<ol><li></li></ol>` structure of the breadcrumb. Don't forget to add
   * unique keys since react requires this to render more efficiently.
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
};

export default Breadcrumb;
