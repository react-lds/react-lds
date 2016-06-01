import React from 'react';

const Icon = (props) => {
  const className = `slds-icon_container slds-icon-${props.sprite}-${props.icon}`;

  return (
    <span className={className} title={props.title}>
      <IconSVG {...props} />
      <span className="slds-assistive-text">{props.title}</span>
    </span>
  );
};

const IconSVG = ({ sprite, icon }, { assetBasePath }) =>
  <svg aria-hidden="true" className={`slds-icon slds-icon--large slds-icon-${sprite}-${icon}`}>
    <use xlinkHref={`${assetBasePath}/assets/icons/${sprite}-sprite/svg/symbols.svg#${icon}`} />
  </svg>;

const propTypes = {
  sprite: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

Icon.propTypes = Object.assign(
  propTypes,
  {
    title: React.PropTypes.string,
  }
);
IconSVG.propTypes = propTypes;

IconSVG.contextTypes = {
  assetBasePath: React.PropTypes.string.isRequired,
};

export {
  IconSVG,
  Icon as default,
};
