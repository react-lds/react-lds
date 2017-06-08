import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';
import { Button, ButtonIcon } from '../../';

export const Pill = (props) => {
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

  const isLinked = !!url;
  const LabelElement = isLinked ? 'a' : 'span';

  const getIcon = () => {
    if (icon) {
      return React.cloneElement(icon, { className: 'slds-pill__icon_container' });
    }

    return null;
  };

  const getPortrait = () => {
    if (portrait) {
      return React.cloneElement(portrait, { className: 'slds-pill__icon' });
    }

    return null;
  };

  const sldsClasses = [
    'slds-pill',
    className
  ];

  return (
    <span {...rest} className={cx(sldsClasses)}>
      {getIcon()}
      {getPortrait()}
      <LabelElement href={isLinked ? url : null} className="slds-pill__label" title={title}>
        {label}
      </LabelElement>
      <Button onClick={onClose} className="slds-pill__remove" icon>
        <ButtonIcon sprite="utility" icon="close" />
        <span className="slds-assistive-text">Remove</span>
      </Button>
    </span>
  );
};

Pill.flavors = [
  'bare',
];

Pill.defaultProps = {
  className: null,
  icon: null,
  onClose: () => {},
  portrait: null,
  url: null,
};

Pill.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * optional Icon that receives '.pill__icon_container' class
   */
  icon: PropTypes.node,
  /**
   * content of the pill label
   */
  label: PropTypes.string.isRequired,
  /**
   * onClose handler for the pill
   */
  onClose: PropTypes.func,
  /**
   * optional image that receives '.pill__icon' class
   */
  portrait: PropTypes.node,
  /**
   * title of the pill label
   */
  title: PropTypes.string.isRequired,
  /**
   * optional url for the link label
   */
  url: PropTypes.string,
};

export default flavorable(Pill, 'pill');
