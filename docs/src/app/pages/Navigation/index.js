import React from 'react';

import navigationCode from '!raw!react-lds/components/Navigation/Navigation';
import navigationListCode from '!raw!react-lds/components/Navigation/NavigationList';
import navigationListElementCode from '!raw!react-lds/components/Navigation/NavigationListElement';
import exampleVerticalDefaultCode from '!raw!./ExampleVerticalDefault';
import exampleVerticalInverseCode from '!raw!./ExampleVerticalInverse';

import { Navigation } from 'react-lds/components/Navigation/Navigation';
import ExampleVerticalDefault from './ExampleVerticalDefault';
import ExampleVerticalInverse from './ExampleVerticalInverse';

import CodeExample from '../../components/CodeExample';
import DecoratorList from '../../components/DecoratorList';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';


const NavigationPage = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Navigation" />
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Vertical Default"
        code={exampleVerticalDefaultCode}
      />
      <ExampleVerticalDefault />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Vertical Inverse"
        code={exampleVerticalInverseCode}
      />
      <ExampleVerticalInverse />
    </div>

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">Navigation</h2>
    <DecoratorList component={Navigation} />
    <PropTypeDescription
      code={navigationCode}
    />

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">NavigationList</h2>
    <PropTypeDescription
      code={navigationListCode}
    />

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">NavigationListElement</h2>
    <PropTypeDescription
      code={navigationListElementCode}
    />

  </div>;

export default NavigationPage;
