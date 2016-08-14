import React from 'react';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import ExampleNormal from './ExampleNormal';
import exampleNormalCode from '!raw!./ExampleNormal';
import ExampleIcons from './ExampleIcons';
import exampleIconsCode from '!raw!./ExampleIcons';
import ExampleIconOnly from './ExampleIconOnly';
import exampleIconOnlyCode from '!raw!./ExampleIconOnly';
import buttonCode from '!raw!react-lds/components/Button/Button';
import buttonIconCode from '!raw!react-lds/components/Button/ButtonIcon';

const Buttons = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Buttons" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Normal Buttons"
          code={exampleNormalCode}
        />
        <ExampleNormal />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Buttons with Icons"
          code={exampleIconsCode}
        />
        <ExampleIcons />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Icon only Buttons"
          code={exampleIconOnlyCode}
        />
        <ExampleIconOnly />
      </section>
    </div>

    <h2 className="slds-text-heading--medium slds-p-left--xx-large">Button</h2>
    <PropTypeDescription code={buttonCode} />

    <h2 className="slds-text-heading--medium slds-p-left--xx-large">Button Icon</h2>
    <PropTypeDescription code={buttonIconCode} />
  </div>;

export default Buttons;
