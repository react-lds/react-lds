import React from 'react';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleMultiCode from '!raw!./ExampleMulti';
import exampleMultiCreateCode from '!raw!./ExampleMultiCreate';
import lookupCode from '!raw!react-lds/components/Lookup/Lookup';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleMulti from './ExampleMulti';
import ExampleMultiCreate from './ExampleMultiCreate';

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
        title="Multi Lookup"
        code={exampleMultiCode}
      />
      <ExampleMulti />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Multi Lookup with create on Enter"
        code={exampleMultiCreateCode}
      />
      <ExampleMultiCreate />
    </div>

    <PropTypeDescription code={lookupCode} />
  </div>
);

export default LookupPage;
