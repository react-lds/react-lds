import React from 'react';
import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';

import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import ExampleNormal from './ExampleNormal';
import exampleNormalCode from '!raw!./ExampleNormal';
import ExampleEmpty from './ExampleEmpty';
import exampleEmptyCode from '!raw!./ExampleEmpty';
import ExampleRound from './ExampleRound';
import exampleRoundCode from '!raw!./ExampleRound';
import ExampleSmall from './ExampleSmall';
import exampleSmallCode from '!raw!./ExampleSmall';
import ExampleMedium from './ExampleMedium';
import exampleMediumCode from '!raw!./ExampleMedium';
import ExampleLarge from './ExampleLarge';
import exampleLargeCode from '!raw!./ExampleLarge';
import ExampleXSmall from './ExampleXSmall';
import exampleXSmallCode from '!raw!./ExampleXSmall';
import avatarCode from '!raw!react-lds/components/Images/Avatar';

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

    <PropTypeDescription code={avatarCode} />

  </div>
);

export default Images;
