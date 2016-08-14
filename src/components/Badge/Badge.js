import React from 'react';
import { prefixable, themeable } from '../../decorators';

export const Badge = props =>
  <span className={props.prefix(['badge'], props)}>{props.label}</span>;

Badge.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * the badge label
   */
  label: React.PropTypes.string.isRequired,
};

export default prefixable(
  themeable(Badge)
);
