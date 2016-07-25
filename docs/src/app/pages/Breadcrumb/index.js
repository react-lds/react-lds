import React from 'react';

import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';
import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';

import ExampleNormal from './ExampleNormal';
import exampleNormalCode from '!raw!./ExampleNormal';
import breadcrumbCode from '!raw!react-lds/components/Breadcrumb/Breadcrumb';

const Breadcrumb = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Buttons" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="Breadcrumb"
          code={exampleNormalCode}
        />
        <ExampleNormal />
      </section>

    </div>

    <PropTypeDescription code={breadcrumbCode} />
  </div>;

export default Breadcrumb;
