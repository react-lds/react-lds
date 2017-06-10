import React from 'react';

import Accordion from 'react-lds/components/Accordion/Accordion';
import accordionCode from '!raw!react-lds/components/Accordion/Accordion';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import accordionExampleCodeNormal from '!raw!./ExampleNormal';
import accordionExampleCodeStyled from '!raw!./ExampleStyled';

const Accordion = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Accordion" />
    <div className="slds-accordion">
      <CodeExample
        title="Accordion"
        code={accordionExampleCodeNormal}
      />
    </div>
);

export default Accordion;
