import React from 'react';

import datepickerCode from '!raw!react-lds/components/Datepicker/Datepicker';
import exampleDatepickerCode from '!raw!./ExampleDatepicker';
import exampleControlledCode from '!raw!./ExampleControlled';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDatepicker from './ExampleDatepicker';
import ExampleControlled from './ExampleControlled';

const Datepickers = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Datepicker" />
    <div className="slds-p-around--xx-large" style={{ height: '500px' }}>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Datepicker"
          code={exampleDatepickerCode}
        />
        <div style={{ position: 'relative' }}>
          <ExampleDatepicker />
        </div>
      </section>
    </div>

    <div className="slds-p-around--xx-large" style={{ height: 'auto' }}>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Controlled Datepicker"
          code={exampleControlledCode}
        />
        <div style={{ position: 'relative' }}>
          <ExampleControlled />
        </div>
      </section>
    </div>

    <PropTypeDescription code={datepickerCode} />
  </div>;

export default Datepickers;
