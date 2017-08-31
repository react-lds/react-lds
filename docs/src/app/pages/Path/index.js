import React from 'react';

import pathCode from '!raw!react-lds/components/Path/Path';
import pathStageCode from '!raw!react-lds/components/Path/PathStage';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleControlledCode from '!raw!./ExampleControlled';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import ExampleDefault from './ExampleDefault';
import ExampleControlled from './ExampleControlled';

const Path = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Accordion" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Example Default"
          code={exampleDefaultCode}
        />
        <ExampleDefault />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Example controlled"
          code={exampleControlledCode}
        />
        <ExampleControlled />
      </section>
    </div>
    <PropTypeDescription
      code={pathCode}
    />
    <PropTypeDescription
      code={pathStageCode}
    />
  </div>
;

export default Path;
