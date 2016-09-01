import React from 'react';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleNestedCode from '!raw!./ExampleNested';
import exampleScopedCode from '!raw!./ExampleScoped';
import tabCode from '!raw!react-lds/components/Tab/Tab';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleNested from './ExampleNested';
import ExampleScoped from './ExampleScoped';

const Tabs = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Tabs" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Default Tab"
          code={exampleDefaultCode}
        />
        <ExampleDefault />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Scoped Tab"
          code={exampleScopedCode}
        />
        <ExampleScoped />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Nested Tab"
          code={exampleNestedCode}
        />
        <ExampleNested />
      </section>
    </div>

    <PropTypeDescription code={tabCode} title="Tab" />
  </div>
);

export default Tabs;
