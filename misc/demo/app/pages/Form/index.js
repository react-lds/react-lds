import React from 'react';

import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';
import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';

import ExampleInput from './ExampleInput';
import exampleInputCode from '!raw!./ExampleInput';

import inputCode from '!raw!react-lds/components/Form/Input';

const DataTable = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Forms" />
    <div className="slds-p-around--xx-large">

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Input"
          code={exampleInputCode}
        />
        <ExampleInput />
      </section>

    </div>
    <PropTypeDescription code={inputCode} header="### Input" />
  </div>;

export default DataTable;
