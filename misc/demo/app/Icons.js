import React from 'react';
import { Icon } from '../../../src/main';

import Masthead from './Masthead';

const Icons = () => {
  const headerIcon = (
    <img
      src="https://www.lightningdesignsystem.com/assets/images/header-components.svg"
      alt="Generic Component Icon"
    />
  );

  return (
    <div>
      <Masthead figure={headerIcon} title="Icons" />
      <div className="slds-p-around--xx-large">
        <h2 className="slds-text-heading--large slds-m-bottom--large">Base</h2>
        <Icon sprite="standard" icon="account" title="description of icon" />
      </div>
    </div>
  );
};

export default Icons;
