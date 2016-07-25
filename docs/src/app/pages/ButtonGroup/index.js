import React from 'react';

import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';
import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import ExampleBase from './ExampleBase';
import exampleBaseCode from '!raw!./ExampleBase';
import ExampleMoreButton from './ExampleMoreButton';
import exampleMoreButtonCode from '!raw!./ExampleMoreButton';
import ExampleIcon from './ExampleIcon';
import exampleIconCode from '!raw!./ExampleIcon';
import buttonGroupCode from '!raw!react-lds/components/ButtonGroup/ButtonGroup';

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
