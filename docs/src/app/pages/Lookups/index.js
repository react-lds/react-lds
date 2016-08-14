import React from 'react';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import ExampleDefault from './ExampleDefault';
import exampleDefaultCode from '!raw!./ExampleDefault';
import ExampleMulti from './ExampleMulti';
import exampleMultiCode from '!raw!./ExampleMulti';

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

    <PropTypeDescription code={lookupCode} />
  </div>
);

export default LookupPage;
