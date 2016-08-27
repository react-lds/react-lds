import React from 'react';

import cardCode from '!raw!react-lds/components/Card/Card';
import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleTableCode from '!raw!./ExampleTable';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleTable from './ExampleTable';

const Cards = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Cards" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Default"
          code={exampleDefaultCode}
        />
        <ExampleDefault />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="With Table"
          code={exampleTableCode}
        />
        <ExampleTable />
      </section>
    </div>

    <PropTypeDescription code={cardCode} />
  </div>;

export default Cards;
