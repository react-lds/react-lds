import React from 'react';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleControlledCode from '!raw!./ExampleControlled';
import exampleMultiCode from '!raw!./ExampleMulti';
import exampleMultiCustomRenderingCode from '!raw!./ExampleMultiCustomRendering';
import exampleMultiCreateCode from '!raw!./ExampleMultiCreate';
import exampleMultiTableCode from '!raw!./ExampleMultiTable';
import lookupCode from '!raw!react-lds/components/Lookup/Lookup';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleControlled from './ExampleControlled';
import ExampleMulti from './ExampleMulti';
import ExampleMultiCustomRendering from './ExampleMultiCustomRendering';
import ExampleMultiCreate from './ExampleMultiCreate';
import ExampleMultiTable from './ExampleMultiTable';

const LookupPage = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Lookups" />
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Single Lookup"
        code={exampleDefaultCode}
      />
      <ExampleDefault />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Controlled Lookup"
        code={exampleControlledCode}
      />
      <ExampleControlled />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Multi Lookup"
        code={exampleMultiCode}
      />
      <ExampleMulti />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Multi Lookup with custom rendering"
        code={exampleMultiCustomRenderingCode}
      />
      <ExampleMultiCustomRendering />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Multi Lookup with create on Enter"
        code={exampleMultiCreateCode}
      />
      <ExampleMultiCreate />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Multi Lookup with table results"
        code={exampleMultiTableCode}
      />
      <ExampleMultiTable />
    </div>

    <PropTypeDescription code={lookupCode} />
  </div>
);

export default LookupPage;
