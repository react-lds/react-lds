import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Row = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    sticky,
    variation,
    ...rest
  } = props;

  const rowStyle = sticky ? Row.STICKY_SCROLLED_STYLE : null;

  const variationClasses = Array.isArray(variation)
    ? variation.map(f => `slds-${f}`)
    : `slds-${variation}`;

  return (
    <tr
      {...rest}
      className={cx([variationClasses, className])}
      ref={ref}
      style={rowStyle}
    >
      {children}
    </tr>
  );
});

Row.STICKY_SCROLLED_STYLE = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
};

Row.defaultProps = {
  children: null,
  className: null,
  sticky: false,
  variation: [],
};

Row.propTypes = {
  /**
   * row content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * Should only be set for rows nested in thead. Sets `position:sticky` to attach to top of the scrolling ctx
   */
  sticky: PropTypes.bool,
  /**
   * variation: string or array of strings. Variations: is-selected, hint-parent
   */
  variation: PropTypes.oneOfType([PropTypes.oneOf([
    'is-selected',
    'hint-parent',
  ]), PropTypes.arrayOf(PropTypes.oneOf([
    'is-selected',
    'hint-parent',
  ]))]),
};

export default Row;
