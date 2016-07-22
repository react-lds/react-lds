import React from 'react';

import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';
import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import ExampleDefault from './ExampleDefault';
import exampleDefaultCode from '!raw!./ExampleDefault';
import ExampleScoped from './ExampleScoped';
import exampleScopedCode from '!raw!./ExampleScoped';
import ExampleNested from './ExampleNested';
import exampleNestedCode from '!raw!./ExampleNested';
import tabCode from '!raw!react-lds/components/Tab/Tab';

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
