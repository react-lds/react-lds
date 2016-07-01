import React from 'react';

import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';
import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import ExampleDefault from './ExampleDefault';
import exampleDefaultCode from '!raw!./ExampleDefault';
import ExampleTable from './ExampleTable';
import exampleTableCode from '!raw!./ExampleTable';

import cardCode from '!raw!react-lds/components/Card/Card';

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
