import React from 'react';

const Icon = ({ category, icon }, { assetBasePath }) =>
  <svg aria-hidden="true" className={`slds-icon slds-icon--large slds-icon-${category}-${icon}`}>
    <use xlinkHref={`${assetBasePath}/assets/icons/${category}-sprite/svg/symbols.svg#${icon}`} />
  </svg>;

Icon.propTypes = {
  category: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

Icon.contextTypes = {
  assetBasePath: React.PropTypes.string.isRequired,
};

export default Icon;
