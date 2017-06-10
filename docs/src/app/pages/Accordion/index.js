import React from 'react';

import accordionCode from '!raw!react-lds/components/Accordion/Accordion';
import accordionExampleCodeNormal from '!raw!./ExampleNormal';
// import accordionExampleCodeStyled from '!raw!./ExampleStyled';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

const Accordions = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Accordion" />
    <div className="slds-accordion">
      <CodeExample
        title="Accordion"
        code={accordionExampleCodeNormal}
      />
      <accordionExampleCodeNormal />
    </div>
    <PropTypeDescription code={accordionCode} />
  </div>
;

export default Accordions;
