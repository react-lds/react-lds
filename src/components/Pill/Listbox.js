import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Listbox = React.forwardRef((props, ref) => {
  const { children, className, label, ...rest } = props;

  const sldsClasses = [
    'slds-listbox',
    'slds-listbox_horizontal',
    className,
  ];

  const renderChild = ((child, i) => {
    const clonedChild = React.cloneElement(child, {
      'aria-selected': true,
      tabIndex: i === 0 ? 0 : null,
    });

    return <li key={i} role="presentation">{clonedChild}</li>;
  });

  /* eslint-disable jsx-a11y/role-supports-aria-props */
  return (
    <ul
      {...rest}
      aria-label={label}
      aria-orientation="horizontal"
      className={cx(sldsClasses)}
      ref={ref}
      role="listbox"
    >
      {React.Children.map(children, renderChild)}
    </ul>
  );
});

Listbox.defaultProps = {
  className: null,
  label: null,
};

Listbox.propTypes = {
  /**
   * child nodes
   */
  children: PropTypes.node.isRequired,
  /**
   * optional classname
   */
  className: PropTypes.string,
  /**
   * ARIA-label for listbox
   */
  label: PropTypes.string,
};

export default Listbox;
