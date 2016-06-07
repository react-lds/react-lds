import React from 'react';

import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';
import CodeExample from './../../components/CodeExample';

import ExampleAutomatic from './ExampleAutomatic';
import exampleAutomaticCode from '!raw!./ExampleAutomatic';
import ExampleManual from './ExampleManual';
import exampleManualCode from '!raw!./ExampleManual';

const GridSystem = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Grid System" />
    <div className="slds-p-around--xx-large">

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Automatic Sizing"
          code={exampleAutomaticCode}
        />
        <ExampleAutomatic />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Manual Sizing"
          code={exampleManualCode}
        />
        <ExampleManual />
      </section>
    </div>
  </div>;

export default GridSystem;
