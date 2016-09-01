import React from 'react';

import { Avatar } from 'react-lds/components/Images/Avatar';
import avatarCode from '!raw!react-lds/components/Images/Avatar';
import exampleEmptyCode from '!raw!./ExampleEmpty';
import exampleLargeCode from '!raw!./ExampleLarge';
import exampleMediumCode from '!raw!./ExampleMedium';
import exampleNormalCode from '!raw!./ExampleNormal';
import exampleRoundCode from '!raw!./ExampleRound';
import exampleSmallCode from '!raw!./ExampleSmall';
import exampleXSmallCode from '!raw!./ExampleXSmall';

import CodeExample from '../../components/CodeExample';
import DecoratorList from '../../components/DecoratorList';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleEmpty from './ExampleEmpty';
import ExampleLarge from './ExampleLarge';
import ExampleMedium from './ExampleMedium';
import ExampleNormal from './ExampleNormal';
import ExampleRound from './ExampleRound';
import ExampleSmall from './ExampleSmall';
import ExampleXSmall from './ExampleXSmall';

const Images = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Images" />

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Normal Image"
        code={exampleNormalCode}
      />
      <ExampleNormal />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Round Image"
        code={exampleRoundCode}
      />
      <ExampleRound />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Empty Image"
        code={exampleEmptyCode}
      />
      <ExampleEmpty />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="x-small Image"
        code={exampleXSmallCode}
      />
      <ExampleXSmall />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Small Image"
        code={exampleSmallCode}
      />
      <ExampleSmall />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Medium Image"
        code={exampleMediumCode}
      />
      <ExampleMedium />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Large Image"
        code={exampleLargeCode}
      />
      <ExampleLarge />
    </div>

    <DecoratorList component={Avatar} />
    <PropTypeDescription code={avatarCode} />

  </div>
);

export default Images;
