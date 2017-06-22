import React from 'react';

import accordionCode from '!raw!react-lds/components/Accordion/Accordion';
import exampleNormalCode from '!raw!./ExampleNormal';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import ExampleNormal from './ExampleNormal';

const Accordions = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Accordion" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Accordion"
          code={exampleNormalCode}
        />
        <ExampleNormal />
      </section>
      {/* section*/}
    </div>
    <PropTypeDescription code={accordionCode} />
  </div>
;

export default Accordions;
