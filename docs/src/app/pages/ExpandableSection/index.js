import React from 'react';
import { ExpandableSection } from 'react-lds';
import expandableSectionCode from '!raw!react-lds/components/ExpandableSection/ExpandableSection';

import exampleDefaultCode from '!raw!./ExampleDefault';
import ExampleNonCollapsableCode from '!raw!./ExampleNonCollapsable';
import ExampleDefault from './ExampleDefault';
import ExampleNonCollapsable from './ExampleNonCollapsable';

import CodeExample from '../../components/CodeExample';
import DecoratorList from '../../components/DecoratorList';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

const ExpandableSectionPage = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Expandable Section" />

    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Default Expandable Section"
          code={exampleDefaultCode}
        />
        <ExampleDefault />
      </section>
    </div>

    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Noncollapsable Section"
          code={ExampleNonCollapsableCode}
        />
        <ExampleNonCollapsable />
      </section>
    </div>
    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">Expandable Section</h2>
    <DecoratorList component={ExpandableSection} />
    <PropTypeDescription code={expandableSectionCode} />
  </div>
);

export default ExpandableSectionPage;
