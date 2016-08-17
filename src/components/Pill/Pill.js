import React from 'react';
import { Button, ButtonIcon } from '../Button';
import { prefixable, flavorable } from '../../decorators';


export const Pill = (props) => {
  const { icon, label, onClose, portrait, prefix, title, url } = props;

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
    <span className={prefix(['pill'], props)}>
      {getIcon()}
      {getPortrait()}
      <LabelElement href={isLinked ? url : null} className={prefix(['pill__label'])} title={title}>
        {label}
      </LabelElement>
      <Button onClick={onClose} sldsClasses={['pill__remove']} icon>
        <ButtonIcon sprite="utility" icon="close" />
        <span className={prefix(['assistive-text'])}>Remove</span>
      </Button>
    </span>
  );
};

Pill.flavors = [
  'bare',
];

Pill.propTypes = {
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
  /**
   * prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(
  flavorable(Pill, 'pill')
);
