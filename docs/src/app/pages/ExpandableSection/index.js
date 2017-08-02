import React from 'react';
import expandableSectionCode from '!raw!react-lds/components/ExpandableSection/ExpandableSection';

import exampleOpenCode from '!raw!./ExampleDefaultOpen';
import exampleClosedCode from '!raw!./ExampleDefaultClosed';
import exampleUncollapsableCode from '!raw!./ExampleUncollapsable';
import exampleControlledCode from '!raw!./ExampleControlled';
import ExampleOpen from './ExampleDefaultOpen';
import ExampleClosed from './ExampleDefaultClosed';
import ExampleUncollapsable from './ExampleUncollapsable';
import ExampleControlled from './ExampleControlled';

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
          title="ExpandableSection uncontrolled starting open"
          code={exampleOpenCode}
        />
        <ExampleOpen />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="ExpandableSection uncontrolled starting closed"
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
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="ExpandableSection controlled"
          code={exampleControlledCode}
        />
        <ExampleControlled />
      </section>
    </div>
    <PropTypeDescription code={expandableSectionCode} />
  </div>
);

export default ExpandableSectionPage;
