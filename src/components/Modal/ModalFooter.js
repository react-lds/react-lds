import React from 'react';
import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const ModalFooter = (props, { cssPrefix }) => {
  const { children, className, defaultTheme, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = [
    'modal__footer',
    { 'theme--default': !!defaultTheme },
  ];

  return (
    <div {...rest} className={prefix(sldsClasses, className)}>{children}</div>
  );
};

ModalFooter.flavors = [
  'directional',
];

ModalFooter.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

ModalFooter.propTypes = {
  /**
   * modal footer content
   */
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * renders the footer with `theme--default`
   */
  defaultTheme: React.PropTypes.bool,
};

export default flavorable(ModalFooter, 'modal__footer');
