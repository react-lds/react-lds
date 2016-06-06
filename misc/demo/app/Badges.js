import React from 'react';
import { Badge } from '../../../src/main';

import Masthead from './Masthead';
import HeaderIcon from './HeaderIcon';

const Badges = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Badges" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Badge</h2>
        <Badge label="Label" />
        <Badge variation="default" label="Label" />
        <Badge variation="shade" label="Label" />
        <Badge variation="inverse" label="Label" />
      </section>
    </div>
  </div>;

export default Badges;
