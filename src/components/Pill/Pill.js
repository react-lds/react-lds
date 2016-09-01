import React from 'react';

import { prefixClasses } from '../../utils';
import { flavorable } from '../../decorators';
import { Button, ButtonIcon } from '../../';

export const Pill = (props, { cssPrefix }) => {
  const {
    className,
    icon,
    label,
    onClose,
    portrait,
    title,
    url,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const isLinked = !!url;
  const LabelElement = isLinked ? 'a' : 'span';

  const getIcon = () => {
    if (icon) {
      return React.cloneElement(icon, { className: prefix('pill__icon_container') });
    }

    return null;
  };

  const getPortrait = () => {
    if (portrait) {
      return React.cloneElement(portrait, { className: prefix('pill__icon') });
    }

    return null;
  };

  return (
    <span {...rest} className={prefix('pill', className)}>
      {getIcon()}
      {getPortrait()}
      <LabelElement href={isLinked ? url : null} className={prefix('pill__label')} title={title}>
        {label}
      </LabelElement>
      <Button onClick={onClose} className={prefix('pill__remove')} icon>
        <ButtonIcon sprite="utility" icon="close" />
        <span className={prefix('assistive-text')}>Remove</span>
      </Button>
    </span>
  );
};

Pill.flavors = [
  'bare',
];

Pill.contextTypes = { cssPrefix: React.PropTypes.string };

Pill.propTypes = {
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * optional Icon that receives '.pill__icon_container' class
   */
  icon: React.PropTypes.node,
  /**
   * content of the pill label
   */
  label: React.PropTypes.string.isRequired,
  /**
   * onClose handler for the pill
   */
  onClose: React.PropTypes.func,
  /**
   * optional image that receives '.pill__icon' class
   */
  portrait: React.PropTypes.node,
  /**
   * title of the pill label
   */
  title: React.PropTypes.string.isRequired,
  /**
   * optional url for the link label
   */
  url: React.PropTypes.string,
};

export default flavorable(Pill, 'pill');
