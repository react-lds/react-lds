import React from 'react';

import { Button } from 'react-lds/components/Button/Button';
import buttonCode from '!raw!react-lds/components/Button/Button';
import buttonIconCode from '!raw!react-lds/components/Button/ButtonIcon';
import exampleIconOnlyCode from '!raw!./ExampleIconOnly';
import exampleIconsCode from '!raw!./ExampleIcons';
import exampleNormalCode from '!raw!./ExampleNormal';

import CodeExample from '../../components/CodeExample';
import DecoratorList from '../../components/DecoratorList';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleIconOnly from './ExampleIconOnly';
import ExampleIcons from './ExampleIcons';
import ExampleNormal from './ExampleNormal';

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


    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">Button</h2>
    <DecoratorList component={Button} />
    <PropTypeDescription code={buttonCode} />

    <h2 className="slds-text-heading--medium slds-p-left--xx-large  slds-p-bottom--medium">Button Icon</h2>
    <PropTypeDescription code={buttonIconCode} />
  </div>;

export default Buttons;
