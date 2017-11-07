import React from 'react';

import exampleControlledCode from '!raw!./ExampleControlled';
import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleErrorCode from '!raw!./ExampleError';
import exampleMultiCode from '!raw!./ExampleMulti';
import exampleMultiCustomRenderingCode from '!raw!./ExampleMultiCustomRendering';
import exampleMultiCreateCode from '!raw!./ExampleMultiCreate';
import exampleMultiTableCode from '!raw!./ExampleMultiTable';
import exampleRequiredCode from '!raw!./ExampleRequired';
import lookupCode from '!raw!react-lds/components/Lookup/Lookup';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleControlled from './ExampleControlled';
import ExampleDefault from './ExampleDefault';
import ExampleError from './ExampleError';
import ExampleMulti from './ExampleMulti';
import ExampleMultiCustomRendering from './ExampleMultiCustomRendering';
import ExampleMultiCreate from './ExampleMultiCreate';
import ExampleMultiTable from './ExampleMultiTable';
import ExampleRequired from './ExampleRequired';

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
        title="Required Single Lookup"
        code={exampleRequiredCode}
      />
      <ExampleRequired />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Errored Single Lookup"
        code={exampleErrorCode}
      />
      <ExampleError />
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
