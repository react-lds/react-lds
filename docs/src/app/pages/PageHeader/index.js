import React from 'react';

import objectHomeCode from '!raw!react-lds/components/PageHeader/ObjectHome';
import objectHomeExampleCode from '!raw!./ExampleObjectHome';
import pageHeaderBaseCode from '!raw!react-lds/components/PageHeader/PageHeaderBase';
import pageHeaderExampleCode from '!raw!./ExampleNormal';
import recordHomeCode from '!raw!react-lds/components/PageHeader/RecordHome';
import recordHomeExampleCode from '!raw!./ExampleRecordHome';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';


import ObjectHomeExample from './ExampleObjectHome';
import PageHeaderExample from './ExampleNormal';
import RecordHomeExample from './ExampleRecordHome';

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
