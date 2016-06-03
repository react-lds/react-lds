import React from 'react';
import { Icon } from '../../../src/main';

import Masthead from './Masthead';
import HeaderIcon from './HeaderIcon';

const Icons = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Icons" />
    <div className="slds-p-around--xx-large">

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Base</h2>
        <Icon div sprite="standard" icon="account" title="description of icon" />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Action Icon</h2>
        <Icon sprite="action" icon="announcement" title="action announcement" circle size="small" />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Background Colors</h2>
        <Icon sprite="standard" icon="account" title="description of icon" background="standard-home" />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Sizes</h2>
        <Icon sprite="custom" icon="10" title="description of icon" size="x-small" />
        <Icon sprite="custom" icon="89" title="description of icon" size="large" />
      </section>
    </div>
  </div>;

export default Icons;
