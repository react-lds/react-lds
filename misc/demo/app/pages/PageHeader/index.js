import React from 'react';

import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';
import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import PageHeaderExample from './ExampleNormal';
import pageHeaderExampleCode from '!raw!./ExampleNormal';
import pageHeaderCode from '!raw!react-lds/components/PageHeader';

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
    </div>

    <PropTypeDescription code={pageHeaderCode} />
  </div>
);

export default PageHeaders;
