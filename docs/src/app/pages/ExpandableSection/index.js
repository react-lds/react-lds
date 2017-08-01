import React from 'react';
import expandableSectionCode from '!raw!react-lds/components/ExpandableSection/ExpandableSection';

import exampleOpenCode from '!raw!./ExampleOpen';
import exampleClosedCode from '!raw!./ExampleClosed';
import exampleUncollapsableCode from '!raw!./ExampleUncollapsable';
import ExampleOpen from './ExampleOpen';
import ExampleClosed from './ExampleClosed';
import ExampleUncollapsable from './ExampleUncollapsable';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

const ExpandableSectionPage = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Expandable Section" />

    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="ExpandableSection starting open"
          code={exampleOpenCode}
        />
        <ExampleOpen />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="ExpandableSection closed"
          code={exampleClosedCode}
        />
        <ExampleClosed />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="ExpandableSection uncollapsable"
          code={exampleUncollapsableCode}
        />
        <ExampleUncollapsable />
      </section>
    </div>
    <PropTypeDescription code={expandableSectionCode} />
  </div>
);

export default ExpandableSectionPage;
