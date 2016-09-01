import React from 'react';

import buttonGroupCode from '!raw!react-lds/components/ButtonGroup/ButtonGroup';
import exampleBaseCode from '!raw!./ExampleBase';
import exampleIconCode from '!raw!./ExampleIcon';
import exampleMoreButtonCode from '!raw!./ExampleMoreButton';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleBase from './ExampleBase';
import ExampleIcon from './ExampleIcon';
import ExampleMoreButton from './ExampleMoreButton';

const ButtonGroups = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Button Groups" />
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
          title="More Menu"
          code={exampleMoreButtonCode}
        />
        <ExampleMoreButton />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Menu With Icons"
          code={exampleIconCode}
        />
        <ExampleIcon />
      </section>
    </div>

    <h2 className="slds-text-heading--medium slds-p-left--xx-large">Button</h2>
    <PropTypeDescription code={buttonGroupCode} />

  </div>;

export default ButtonGroups;
