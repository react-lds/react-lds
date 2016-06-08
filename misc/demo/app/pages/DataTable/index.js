import React from 'react';

import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';
import CodeExample from './../../components/CodeExample';

import ExampleBasic from './ExampleBasic';
import exampleBasicCode from '!raw!./ExampleBasic';
import ExampleAdvanced from './ExampleAdvanced';
import exampleAdvancedCode from '!raw!./ExampleAdvanced';

const DataTable = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Data Tables" />
    <div className="slds-p-around--xx-large">

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Basic"
          code={exampleBasicCode}
        />
        <ExampleBasic />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Advanced"
          code={exampleAdvancedCode}
        />
        <ExampleAdvanced />
      </section>

    </div>
  </div>;

export default DataTable;
