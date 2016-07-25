import React from 'react';

import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';
import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import SpinnerExampleSmall from './ExampleSmall';
import spinnerExampleSmallCode from '!raw!./ExampleSmall';
import SpinnerExampleMedium from './ExampleMedium';
import spinnerExampleMediumCode from '!raw!./ExampleMedium';
import SpinnerExampleLarge from './ExampleLarge';
import spinnerExampleLargeCode from '!raw!./ExampleLarge';
import SpinnerExampleBrandSmall from './ExampleBrandSmall';
import spinnerExampleBrandSmallCode from '!raw!./ExampleBrandSmall';
import SpinnerExampleBrandMedium from './ExampleBrandMedium';
import spinnerExampleBrandMediumCode from '!raw!./ExampleBrandMedium';
import SpinnerExampleBrandLarge from './ExampleBrandLarge';
import spinnerExampleBrandLargeCode from '!raw!./ExampleBrandLarge';
import SpinnerExampleInverseSmall from './ExampleInverseSmall';
import spinnerExampleInverseSmallCode from '!raw!./ExampleInverseSmall';
import SpinnerExampleInverseMedium from './ExampleInverseMedium';
import spinnerExampleInverseMediumCode from '!raw!./ExampleInverseMedium';
import SpinnerExampleInverseLarge from './ExampleInverseLarge';
import spinnerExampleInverseLargeCode from '!raw!./ExampleInverseLarge';
import spinnerCode from '!raw!react-lds/components/Spinner/Spinner';

require('./spinners.scss');

const Spinners = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Spinner" />
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Small Spinner"
        code={spinnerExampleSmallCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleSmall />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Medium Spinner"
        code={spinnerExampleMediumCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleMedium />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Large Spinner"
        code={spinnerExampleLargeCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleLarge />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Brand Small Spinner"
        code={spinnerExampleBrandSmallCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleBrandSmall />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Brand Medium Spinner"
        code={spinnerExampleBrandMediumCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleBrandMedium />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Brand Large Spinner"
        code={spinnerExampleBrandLargeCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleBrandLarge />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Inverse Small Spinner"
        code={spinnerExampleInverseSmallCode}
      />
      <div className="demo-spinner demo-spinner--inverse">
        <SpinnerExampleInverseSmall />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Inverse Medium Spinner"
        code={spinnerExampleInverseMediumCode}
      />
      <div className="demo-spinner demo-spinner--inverse">
        <SpinnerExampleInverseMedium />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Inverse Large Spinner"
        code={spinnerExampleInverseLargeCode}
      />
      <div className="demo-spinner demo-spinner--inverse">
        <SpinnerExampleInverseLarge />
      </div>
    </div>
    <PropTypeDescription code={spinnerCode} />
  </div>
);

export default Spinners;
