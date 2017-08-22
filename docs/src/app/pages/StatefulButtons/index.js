import React from 'react';

import { StatefulButton } from 'react-lds/components/StatefulButton/StatefulButton';
import statefulButtonCode from '!raw!react-lds/components/StatefulButton/StatefulButton';
import exampleSelectedCode from '!raw!./ExampleSelected';
import exampleUnselectedCode from '!raw!./ExampleUnselected';

import CodeExample from '../../components/CodeExample';
import DecoratorList from '../../components/DecoratorList';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleSelected from './ExampleSelected';
import ExampleUnselected from './ExampleUnselected';

const StatefulButtons = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Stateful Buttons" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Unselected stateful buttons"
          code={exampleUnselectedCode}
        />
        <ExampleUnselected />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Selected stateful buttons"
          code={exampleSelectedCode}
        />
        <ExampleSelected />
      </section>
    </div>


    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">StatefulButton</h2>
    <DecoratorList component={StatefulButton} />
    <PropTypeDescription code={statefulButtonCode} />
  </div>;

export default StatefulButtons;
