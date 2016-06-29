import React from 'react';
import { prefixable, flavorable } from '../../decorators';

export const ModalFooter = (props) => {
  const sldsClasses = [
    'modal__footer',
    { 'theme--default': !!props.default },
  ];

  return (
    <div className={props.prefix(sldsClasses, props)}>{props.children}</div>
  );
};

ModalFooter.flavors = [
  'directional',
];

ModalFooter.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * the modal content
   */
  children: React.PropTypes.node.isRequired,
  /**
   * render a modal with `theme--default`
   */
  default: React.PropTypes.bool,
};

export default prefixable(
  flavorable(ModalFooter, 'modal__footer')
);
