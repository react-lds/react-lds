import React from 'react';

import exampleContainerCode from '!raw!./ExampleContainer';
import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleIconCode from '!raw!./ExampleIcon';
import examplePortraitCode from '!raw!./ExamplePortrait';
import exampleTruncatedCode from '!raw!./ExampleTruncated';
import exampleUnlinkedCode from '!raw!./ExampleUnlinked';
import pillCode from '!raw!react-lds/components/Pill/Pill';
import pillContainerCode from '!raw!react-lds/components/Pill/PillContainer';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleContainer from './ExampleContainer';
import ExampleDefault from './ExampleDefault';
import ExampleIcon from './ExampleIcon';
import ExamplePortrait from './ExamplePortrait';
import ExampleTruncated from './ExampleTruncated';
import ExampleUnlinked from './ExampleUnlinked';

require('./index.scss');

const PillPage = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Pills" />

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Default Pill"
        code={exampleDefaultCode}
      />
      <ExampleDefault />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Pill with Portrait"
        code={examplePortraitCode}
      />
      <ExamplePortrait />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Pill with Icon"
        code={exampleIconCode}
      />
      <ExampleIcon />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Unlinked Pill"
        code={exampleUnlinkedCode}
      />
      <ExampleUnlinked />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Truncated Pill"
        code={exampleTruncatedCode}
      />
      <ExampleTruncated />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="PillContainer"
        code={exampleContainerCode}
      />
      <ExampleContainer />
    </div>

    <PropTypeDescription
      code={pillCode}
      header="### Pill"
    />

    <PropTypeDescription
      code={pillContainerCode}
      header="### PillContainer"
    />

  </div>
);

export default PillPage;
