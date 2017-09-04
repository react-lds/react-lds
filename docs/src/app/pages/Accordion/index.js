import React from 'react';

import accordionCode from '!raw!react-lds/components/Accordion/Accordion';
import accordionSectionCode from '!raw!react-lds/components/Accordion/AccordionSection';

import exampleNormalCode from '!raw!./ExampleNormal';
import exampleStyledCode from '!raw!./ExampleStyled';
import exampleOpenCode from '!raw!./ExampleOpen';
import exampleControlledCode from '!raw!./ExampleControlled';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import ExampleNormal from './ExampleNormal';
import ExampleStyled from './ExampleStyled';
import ExampleOpen from './ExampleOpen';
import ExampleControlled from './ExampleControlled';

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
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Accordion with defaultOpen"
          code={exampleOpenCode}
        />
        <ExampleOpen />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Accordion styled"
          code={exampleStyledCode}
        />
        <ExampleStyled />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Accordion controlled"
          code={exampleControlledCode}
        />
        <ExampleControlled />
      </section>
    </div>
    <PropTypeDescription code={accordionCode} />
    <PropTypeDescription code={accordionSectionCode} />
  </div>
;

export default Accordions;
