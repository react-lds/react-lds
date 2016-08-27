import React from 'react';

import badgeCode from '!raw!react-lds/components/Badge/Badge';
import exampleBadgeCode from '!raw!./ExampleNormal';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import ExampleBadge from './ExampleNormal';

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
