import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const ModalFooter = (props) => {
  const { children, className, defaultTheme, ...rest } = props;

  const sldsClasses = [
    'slds-modal__footer',
    { 'slds-theme_default': !!defaultTheme },
    className
  ];

  return (<div {...rest} className={cx(sldsClasses)}>{children}</div>);
};

ModalFooter.flavors = [
  'directional',
];

ModalFooter.defaultProps = {
  className: null,
  defaultTheme: false,
};

ModalFooter.propTypes = {
  /**
   * modal footer content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * renders the footer with `theme_default`
   */
  defaultTheme: PropTypes.bool,
};

export default flavorable(ModalFooter, 'modal__footer');
