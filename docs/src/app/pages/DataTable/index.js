import React from 'react';

import cellCode from '!raw!react-lds/components/DataTable/Cell';
import exampleAdvancedCode from '!raw!./ExampleAdvanced';
import exampleBasicCode from '!raw!./ExampleBasic';
import rowCode from '!raw!react-lds/components/DataTable/Row';
import tableCode from '!raw!react-lds/components/DataTable/Table';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleAdvanced from './ExampleAdvanced';
import ExampleBasic from './ExampleBasic';

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

    <h2 className="slds-text-heading--medium">Table</h2>
    <PropTypeDescription code={tableCode} />

    <h2 className="slds-text-heading--medium">Row</h2>
    <PropTypeDescription code={rowCode} />

    <h2 className="slds-text-heading--medium">Cell</h2>
    <PropTypeDescription code={cellCode} />
  </div>;

export default DataTable;
