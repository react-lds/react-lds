import React from 'react';

import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';
import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import ExampleEmail from './ExampleEmail';
import exampleEmailCode from '!raw!./ExampleEmail';

import emailCode from '!raw!react-lds/components/DockedComposer/Email';

const DockedComposer = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Docked Composer" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Email"
          code={exampleEmailCode}
        />
        <ExampleEmail />
      </section>
    </div>

    <PropTypeDescription code={emailCode} header="### Email" />
  </div>;


export default DockedComposer;
