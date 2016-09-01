import React from 'react';

import breadcrumbCode from '!raw!react-lds/components/Breadcrumb/Breadcrumb';
import exampleNormalCode from '!raw!./ExampleNormal';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleNormal from './ExampleNormal';

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
