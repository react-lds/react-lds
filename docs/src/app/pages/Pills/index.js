import React from 'react';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import pillCode from '!raw!react-lds/components/Pill/Pill';
import pillContainerCode from '!raw!react-lds/components/Pill/PillContainer';

import ExampleDefault from './ExampleDefault';
import exampleDefaultCode from '!raw!./ExampleDefault';
import ExamplePortrait from './ExamplePortrait';
import examplePortraitCode from '!raw!./ExamplePortrait';
import ExampleIcon from './ExampleIcon';
import exampleIconCode from '!raw!./ExampleIcon';
import ExampleUnlinked from './ExampleUnlinked';
import exampleUnlinkedCode from '!raw!./ExampleUnlinked';
import ExampleTruncated from './ExampleTruncated';
import exampleTruncatedCode from '!raw!./ExampleTruncated';
import ExampleContainer from './ExampleContainer';
import exampleContainerCode from '!raw!./ExampleContainer';

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
