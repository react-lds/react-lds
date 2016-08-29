import React from 'react';
import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';

import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import ExampleDefault from './ExampleDefault';
import exampleDefaultCode from '!raw!./ExampleDefault';
import ExampleMulti from './ExampleMulti';
import exampleMultiCode from '!raw!./ExampleMulti';
import ExampleMultiCreate from './ExampleMultiCreate';
import exampleMultiCreateCode from '!raw!./ExampleMultiCreate';

import lookupCode from '!raw!react-lds/components/Lookup/Lookup';

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
