import React from 'react';

import datepickerCode from '!raw!react-lds/components/Datepicker/Datepicker';
import exampleDisabledDatepickerCode from '!raw!./ExampleDisabledDatepicker';
import exampleDatepickerCode from '!raw!./ExampleDatepicker';
import exampleEmptyDatepickerCode from '!raw!./ExampleEmptyDatepicker';
import exampleControlledCode from '!raw!./ExampleControlled';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDatepicker from './ExampleDatepicker';
import ExampleDisabledDatepicker from './ExampleDisabledDatepicker';
import ExampleEmptyDatepicker from './ExampleEmptyDatepicker';
import ExampleControlled from './ExampleControlled';

const Datepickers = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Datepicker" />
    <div className="slds-p-around--xx-large" style={{ height: '500px' }}>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Default Datepicker"
          code={exampleEmptyDatepickerCode}
        />
        <div style={{ position: 'relative' }}>
          <ExampleEmptyDatepicker />
        </div>
      </section>
    </div>

    <div className="slds-p-around--xx-large" style={{ height: '500px' }}>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Preset Datepicker"
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

    <div className="slds-p-around--xx-large" style={{ height: 'auto' }}>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Controlled Datepicker"
          code={exampleDisabledDatepickerCode}
        />
        <div style={{ position: 'relative' }}>
          <ExampleDisabledDatepicker />
        </div>
      </section>
    </div>

    <PropTypeDescription code={datepickerCode} />
  </div>;

export default Datepickers;
