import React from 'react';

import { Spinner } from 'react-lds/components/Spinner/Spinner';
import spinnerCode from '!raw!react-lds/components/Spinner/Spinner';
import spinnerExampleBrandLargeCode from '!raw!./ExampleBrandLarge';
import spinnerExampleBrandMediumCode from '!raw!./ExampleBrandMedium';
import spinnerExampleBrandSmallCode from '!raw!./ExampleBrandSmall';
import spinnerExampleInverseLargeCode from '!raw!./ExampleInverseLarge';
import spinnerExampleInverseMediumCode from '!raw!./ExampleInverseMedium';
import spinnerExampleInverseSmallCode from '!raw!./ExampleInverseSmall';
import spinnerExampleLargeCode from '!raw!./ExampleLarge';
import spinnerExampleMediumCode from '!raw!./ExampleMedium';
import spinnerExampleSmallCode from '!raw!./ExampleSmall';

import CodeExample from '../../components/CodeExample';
import DecoratorList from '../../components/DecoratorList';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import SpinnerExampleBrandLarge from './ExampleBrandLarge';
import SpinnerExampleBrandMedium from './ExampleBrandMedium';
import SpinnerExampleBrandSmall from './ExampleBrandSmall';
import SpinnerExampleInverseLarge from './ExampleInverseLarge';
import SpinnerExampleInverseMedium from './ExampleInverseMedium';
import SpinnerExampleInverseSmall from './ExampleInverseSmall';
import SpinnerExampleLarge from './ExampleLarge';
import SpinnerExampleMedium from './ExampleMedium';
import SpinnerExampleSmall from './ExampleSmall';

require('./index.scss');

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

    <DecoratorList component={Spinner} />
    <PropTypeDescription code={spinnerCode} />
  </div>
);

export default Spinners;
