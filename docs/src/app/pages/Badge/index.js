import React from 'react';

import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';
import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import ExampleBadge from './ExampleNormal';
import exampleBadgeCode from '!raw!./ExampleNormal';
import badgeCode from '!raw!react-lds/components/Badge/Badge';

const Badge = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Badges" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Badge"
          code={exampleBadgeCode}
        />
        <ExampleBadge />
      </section>
    </div>

    <PropTypeDescription code={badgeCode} />
  </div>;

export default Badge;
