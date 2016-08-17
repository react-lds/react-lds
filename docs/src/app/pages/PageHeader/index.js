import React from 'react';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import PageHeaderExample from './ExampleNormal';
import pageHeaderExampleCode from '!raw!./ExampleNormal';
import RecordHomeExample from './ExampleRecordHome';
import recordHomeExampleCode from '!raw!./ExampleRecordHome';
import ObjectHomeExample from './ExampleObjectHome';
import objectHomeExampleCode from '!raw!./ExampleObjectHome';

import pageHeaderBaseCode from '!raw!react-lds/components/PageHeader/PageHeaderBase';
import recordHomeCode from '!raw!react-lds/components/PageHeader/RecordHome';
import objectHomeCode from '!raw!react-lds/components/PageHeader/ObjectHome';

const PageHeaders = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Page Header" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Base"
          code={pageHeaderExampleCode}
        />
        <PageHeaderExample />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Record Home"
          code={recordHomeExampleCode}
        />
        <RecordHomeExample />
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Object home"
          code={objectHomeExampleCode}
        />
        <ObjectHomeExample />
      </section>
    </div>

    <PropTypeDescription code={pageHeaderBaseCode} header="### PageHeaderBase" />
    <PropTypeDescription code={recordHomeCode} header="### RecordHome" />
    <PropTypeDescription code={objectHomeCode} header="### ObjectHome" />
  </div>
);

export default PageHeaders;
