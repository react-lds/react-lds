import React from 'react';
import { Button, ButtonIcon } from '../Button';
import { prefixable } from '../../decorators';


export const Pill = (props) => {
  const { icon, label, portrait, prefix, title, url } = props;

  const isLinked = !!url;
  const LabelElement = isLinked ? 'a' : 'span';

  const getIcon = () => {
    if (icon) {
      return React.cloneElement(icon, { sldsClasses: ['pill__icon_container'] });
    }

    return null;
  };

  const getPortrait = () => {
    if (portrait) {
      return React.cloneElement(portrait, { sldsClasses: ['pill__icon'] });
    }

    return null;
  };

  return (
    <span className={prefix(['pill'])}>
      {getIcon()}
      {getPortrait()}
      <LabelElement href={isLinked ? url : null} className={prefix(['pill__label'])} title={title}>
        {label}
      </LabelElement>
      <Button sldsClasses={['pill__remove']} icon>
        <ButtonIcon sprite="utility" icon="close" />
        <span className={prefix(['assistive-text'])}>Remove</span>
      </Button>
    </span>
  );
};

Pill.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * the title of the pill label
   */
  title: React.PropTypes.string.isRequired,
  /**
   * the content of the pill label
   */
  label: React.PropTypes.string.isRequired,
  /**
   * optional url for the link label
   */
  url: React.PropTypes.string,
  /**
   * optional icon that gets '.pill__icon_container'
   */
  icon: React.PropTypes.node,
  /**
   * optional image that gets '.pill__icon'
   */
  portrait: React.PropTypes.node,
};

export default prefixable(Pill);
