import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash-es/omit';
import { applyDecorators, decoratorProp } from '../../utils';

const validBreakpoints = [
  'small',
  'medium',
  'large',
  'max-small',
  'max-medium',
  'max-large',
];

const breakPointProp = (breakpoint, suffix) => `${breakpoint}-${suffix}`;
const sizeRegex = /^([1-9]|1[0-2])-([1-9]|1[0-2])$/;
const orderRegex = /^((1[0,1,2])|[1-9])$/;

const Column = (props) => {
  const {
    as: El,
    children,
    className,
    flavor,
    variation,
    omitCol,
    ...rest
  } = props;

  const sldsClasses = [
    className,
    { 'slds-col': !omitCol },
    applyDecorators(variation),
  ];

  const breakpoints = Array.from(validBreakpoints);
  breakpoints.unshift('');

  const generatedProps = [];

  breakpoints.forEach((breakpoint) => {
    const emptyBreakPoint = breakpoint === '';

    const sizePropName = emptyBreakPoint ? 'sizeOf' : breakPointProp(breakpoint, 'sizeOf');
    const sizeString = emptyBreakPoint ? 'size' : `${breakpoint}-size`;
    const size = props[sizePropName];
    if (size && sizeRegex.test(size)) {
      const from = parseInt(size.split('-')[0], 10);
      const to = parseInt(size.split('-')[1], 10);
      sldsClasses.push(`slds-${sizeString}_${from}-of-${to}`);
    }

    const orderPropName = emptyBreakPoint ? 'order' : breakPointProp(breakpoint, 'order');
    const orderString = emptyBreakPoint ? 'order' : `${breakpoint}-order`;
    const order = props[orderPropName];
    if (order && orderRegex.test(order)) {
      const position = parseInt(order.split('-')[0], 10);
      sldsClasses.push(`slds-${orderString}_${position}`);
    }

    generatedProps.push(sizePropName, orderPropName);
  });

  const restProps = omit(rest, generatedProps);

  return (
    <El {...restProps} className={cx(sldsClasses)}>{children}</El>
  );
};

const sizeOfPropType = (props, propName) => {
  const size = props[propName];

  if (size && typeof size !== 'string') {
    return new Error(`${propName} must be a string`);
  }

  if (typeof size === 'string' && !sizeRegex.test(size)) {
    return new Error(`${propName} must be of format {1-12}-{1-12}`);
  }

  if (sizeRegex.test(size)) {
    const from = parseInt(size.split('-')[0], 10);
    const to = parseInt(size.split('-')[1], 10);

    if (from > to) {
      return new Error(`${propName} ${size} is impossible. \`${from}\` needs to be smaller than \`${to}\``);
    }
  }

  return null;
};

const orderPropType = (props, propName) => {
  const position = props[propName];

  if (position && !(typeof position === 'string' || typeof position === 'number')) {
    return new Error(`${propName} must be a string or a number`);
  }

  if ((typeof position === 'string' || typeof position === 'number') && !orderRegex.test(position)) {
    return new Error(`${propName} must be of format {1-12}`);
  }

  return null;
};

Column.defaultProps = {
  as: 'div',
  className: null,
  variation: [],
  omitCol: false,
};

Column.propTypes = {
  /**
   * Allows using an arbitrary DOM element as container
   */
  as: PropTypes.string,
  /**
   * Column content
   */
  children: PropTypes.node.isRequired,
  /**
   * (Optional) class name. Usually used to apply `slds-p_horizontal` classes
   */
  className: PropTypes.string,
  /*
   * variation: string or array of strings. Variations: has-flexi-truncate,
   * no-flex, no-space, grow, grow-none, shrink, shrink-none
   */
  variation: decoratorProp([
    'has-flexi-truncate',
    'no-flex',
    'no-space',
    'grow',
    'grow-none',
    'shrink',
    'shrink-none',
  ]),
  /**
   * omit 'slds-col'
   */
  omitCol: PropTypes.bool,
  /**
   * sizeOf: specify size in fractions like 1-2, 4-12. Breakpoint possible e.g. small-sizeOf="1-2"
   */
  sizeOf: sizeOfPropType, // eslint-disable-line react/require-default-props
  ...validBreakpoints.reduce((_propTypes, breakpoint) => {
    // this generates sizeOf props for each of the valid breakpoints
    const propTypes = _propTypes;
    propTypes[breakPointProp(breakpoint, 'sizeOf')] = sizeOfPropType;
    return propTypes;
  }, {}),
  /**
   * order: reorder columns with number from 1 to 12. Breakpoint possible e.g. medium-order="3"
   */
  order: orderPropType, // eslint-disable-line react/require-default-props
  ...validBreakpoints.reduce((_propTypes, breakpoint) => {
    // this generates order props for each of the valid breakpoints
    const propTypes = _propTypes;
    propTypes[breakPointProp(breakpoint, 'order')] = orderPropType;
    return propTypes;
  }, {}),
};

export default Column;
