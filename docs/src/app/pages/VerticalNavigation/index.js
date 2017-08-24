import React from 'react';
import { VerticalNavigation } from 'react-lds/components/VerticalNavigation/VerticalNavigation';

import verticalNavigationCode from '!raw!react-lds/components/VerticalNavigation/VerticalNavigation';
import verticalNavigationSectionCode from '!raw!react-lds/components/VerticalNavigation/VerticalNavigationSection';
import verticalNavigationItemCode from '!raw!react-lds/components/VerticalNavigation/VerticalNavigationItem';
import verticalNavigationOverflowCode from '!raw!react-lds/components/VerticalNavigation/VerticalNavigationOverflow';


import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleOverflowCode from '!raw!./ExampleOverflow';
import ExampleDefault from './ExampleDefault';
import ExampleOverflow from './ExampleOverflow';


import CodeExample from '../../components/CodeExample';
import DecoratorList from '../../components/DecoratorList';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';


const ProgressBarPage = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Vertical Navigation" />

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Vertical Navigation"
        code={exampleDefaultCode}
      />
      <ExampleDefault />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Vertical Navigation Overflow"
        code={exampleOverflowCode}
      />
      <ExampleOverflow />
    </div>

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">Vertical Navigation</h2>
    <DecoratorList component={VerticalNavigation} />
    <PropTypeDescription
      code={verticalNavigationCode}
    />

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">
      Vertical Navigation Section
    </h2>
    <PropTypeDescription
      code={verticalNavigationSectionCode}
    />

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">
      Vertical Navigation Overflow
    </h2>
    <PropTypeDescription
      code={verticalNavigationOverflowCode}
    />

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">Vertical Navigation Item</h2>
    <PropTypeDescription
      code={verticalNavigationItemCode}
    />
  </div>
);

export default ProgressBarPage;
