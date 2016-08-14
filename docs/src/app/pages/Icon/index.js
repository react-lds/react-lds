import React from 'react';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import ExampleBase from './ExampleBase';
import exampleBaseCode from '!raw!./ExampleBase';
import ExampleAction from './ExampleAction';
import exampleActionCode from '!raw!./ExampleAction';
import ExampleBackground from './ExampleBackground';
import exampleBackgroundCode from '!raw!./ExampleBackground';
import ExampleSizes from './ExampleSizes';
import exampleSizesCode from '!raw!./ExampleSizes';
import iconCode from '!raw!react-lds/components/Icon/Icon';

const Icons = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Icons" />
    <div className="slds-p-around--xx-large">

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Base"
          code={exampleBaseCode}
        />
        <ExampleBase />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Action"
          code={exampleActionCode}
        />
        <ExampleAction />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Background Colors"
          code={exampleBackgroundCode}
        />
        <ExampleBackground />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Sizes"
          code={exampleSizesCode}
        />
        <ExampleSizes />
      </section>
    </div>

    <PropTypeDescription code={iconCode} />
  </div>;

export default Icons;
