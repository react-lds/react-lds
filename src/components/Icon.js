import React from 'react';
import classnames from 'classnames';

const Icon = ({category, icon}, {assetBasePath}) => {
  return (
    <svg aria-hidden="true" className={`slds-icon slds-icon--large slds-icon-${category}-${icon}`}>
      <use xlinkHref={`${assetBasePath}/assets/icons/${category}-sprite/svg/symbols.svg#${icon}`}></use>
    </svg>
  );
}

Icon.contextTypes = {
  assetBasePath: React.PropTypes.string.isRequired
};

export default Icon;
