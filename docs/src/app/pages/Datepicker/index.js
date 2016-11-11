import React from 'react';

import datepickerCode from '!raw!react-lds/components/Datepicker/Datepicker';
import exampleDatepickerCode from '!raw!./ExampleDatepicker';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDatepicker from './ExampleDatepicker';

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

    <PropTypeDescription code={datepickerCode} />
  </div>;

export default Datepickers;
