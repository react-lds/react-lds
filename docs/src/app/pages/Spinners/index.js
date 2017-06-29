import React from 'react';

import { Spinner } from 'react-lds/components/Spinner/Spinner';
import spinnerCode from '!raw!react-lds/components/Spinner/Spinner';
import spinnerContainerCode from '!raw!react-lds/components/Spinner/SpinnerContainer';
import spinnerExampleBrandLargeCode from '!raw!./ExampleBrandLarge';
import spinnerExampleBrandMediumCode from '!raw!./ExampleBrandMedium';
import spinnerExampleBrandSmallCode from '!raw!./ExampleBrandSmall';
import spinnerExampleBrandXSmallCode from '!raw!./ExampleBrandXSmall';
import spinnerExampleBrandXXSmallCode from '!raw!./ExampleBrandXXSmall';
import spinnerExampleInverseLargeCode from '!raw!./ExampleInverseLarge';
import spinnerExampleInverseMediumCode from '!raw!./ExampleInverseMedium';
import spinnerExampleInverseSmallCode from '!raw!./ExampleInverseSmall';
import spinnerExampleInverseXSmallCode from '!raw!./ExampleInverseXSmall';
import spinnerExampleInverseXXSmallCode from '!raw!./ExampleInverseXXSmall';
import spinnerExampleLargeCode from '!raw!./ExampleLarge';
import spinnerExampleMediumCode from '!raw!./ExampleMedium';
import spinnerExampleSmallCode from '!raw!./ExampleSmall';
import spinnerExampleXSmallCode from '!raw!./ExampleXSmall';
import spinnerExampleXXSmallCode from '!raw!./ExampleXXSmall';
import spinnerExampleWithContainerCode from '!raw!./ExampleWithContainer';
import spinnerExampleWithoutContainerCode from '!raw!./ExampleWithoutContainer';

import CodeExample from '../../components/CodeExample';
import DecoratorList from '../../components/DecoratorList';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import SpinnerExampleBrandLarge from './ExampleBrandLarge';
import SpinnerExampleBrandMedium from './ExampleBrandMedium';
import SpinnerExampleBrandSmall from './ExampleBrandSmall';
import SpinnerExampleBrandXSmall from './ExampleBrandXSmall';
import SpinnerExampleBrandXXSmall from './ExampleBrandXXSmall';
import SpinnerExampleInverseLarge from './ExampleInverseLarge';
import SpinnerExampleInverseMedium from './ExampleInverseMedium';
import SpinnerExampleInverseSmall from './ExampleInverseSmall';
import SpinnerExampleInverseXSmall from './ExampleInverseXSmall';
import SpinnerExampleInverseXXSmall from './ExampleInverseXXSmall';
import SpinnerExampleLarge from './ExampleLarge';
import SpinnerExampleMedium from './ExampleMedium';
import SpinnerExampleSmall from './ExampleSmall';
import SpinnerExampleXSmall from './ExampleXSmall';
import SpinnerExampleXXSmall from './ExampleXXSmall';
import SpinnerExampleWithContainer from './ExampleWithContainer';
import SpinnerExampleWithoutContainer from './ExampleWithoutContainer';

require('./index.scss');

const Spinners = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Spinner" />
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Extra Extra Small Spinner"
        code={spinnerExampleXXSmallCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleXXSmall />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Extra Small Spinner"
        code={spinnerExampleXSmallCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleXSmall />
      </div>
    </div>
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
        title="Brand Extra Extra Small Spinner"
        code={spinnerExampleBrandXXSmallCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleBrandXXSmall />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Brand Extra Small Spinner"
        code={spinnerExampleBrandXSmallCode}
      />
      <div className="demo-spinner">
        <SpinnerExampleBrandXSmall />
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
        title="Inverse Extra Extra Small Spinner"
        code={spinnerExampleInverseXXSmallCode}
      />
      <div className="demo-spinner demo-spinner--inverse">
        <SpinnerExampleInverseXXSmall />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Inverse Extra Small Spinner"
        code={spinnerExampleInverseXSmallCode}
      />
      <div className="demo-spinner demo-spinner--inverse">
        <SpinnerExampleInverseXSmall />
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
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Medium Spinner without container"
        code={spinnerExampleWithoutContainerCode}
      />
      <div className="demo-spinner demo-spinner--colorBackground">
        <SpinnerExampleWithoutContainer />
      </div>
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Medium Spinner with container"
        code={spinnerExampleWithContainerCode}
      />
      <div className="demo-spinner demo-spinner--colorBackground">
        <SpinnerExampleWithContainer />
      </div>
    </div>

    <DecoratorList component={Spinner} />
    <PropTypeDescription code={spinnerCode} />
    <PropTypeDescription code={spinnerContainerCode} />
  </div>
);

export default Spinners;
