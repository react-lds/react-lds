import React from 'react';

import columnCode from '!raw!react-lds/components/Grid/Column';
import exampleAutomaticCode from '!raw!./ExampleAutomatic';
import exampleContainersCode from '!raw!./ExampleContainers';
import exampleManualCode from '!raw!./ExampleManual';
import gridCode from '!raw!react-lds/components/Grid/Grid';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleAutomatic from './ExampleAutomatic';
import ExampleContainers from './ExampleContainers';
import ExampleManual from './ExampleManual';

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

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Containers"
          code={exampleContainersCode}
        />
        <ExampleContainers />
      </section>
    </div>

    <h2 className="slds-text-heading--medium">Grid</h2>
    <PropTypeDescription code={gridCode} />

    <h2 className="slds-text-heading--medium">Column</h2>
    <PropTypeDescription code={columnCode} />
  </div>;

export default GridSystem;
