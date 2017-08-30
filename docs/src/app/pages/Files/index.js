import React from 'react';

import fileCode from '!raw!react-lds/components/File/File';
import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleIconCode from '!raw!./ExampleIcon';
import exampleNoTitleCode from '!raw!./ExampleNoTitle';
import exampleLoadingCode from '!raw!./ExampleLoading';
import exampleLoadingNoTitleCode from '!raw!./ExampleLoadingNoTitle';
import exampleActionsCode from '!raw!./ExampleActions';
import exampleActionsNoTitleCode from '!raw!./ExampleActionsNoTitle';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import ExampleDefault from './ExampleDefault';
import ExampleIcon from './ExampleIcon';
import ExampleNoTitle from './ExampleNoTitle';
import ExampleLoading from './ExampleLoading';
import ExampleLoadingNoTitle from './ExampleLoadingNoTitle';
import ExampleActions from './ExampleActions';
import ExampleActionsNoTitle from './ExampleActionsNoTitle';


const Badge = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Files" />
    <div className="slds-p-around--xx-large">
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="File"
          code={exampleDefaultCode}
        />
        <ExampleDefault />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="File with Icon"
          code={exampleIconCode}
        />
        <ExampleIcon />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="File with title hidden"
          code={exampleNoTitleCode}
        />
        <ExampleNoTitle />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="File in loading state"
          code={exampleLoadingCode}
        />
        <ExampleLoading />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="File with title hidden in loading state"
          code={exampleLoadingNoTitleCode}
        />
        <ExampleLoadingNoTitle />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="File with actions"
          code={exampleActionsCode}
        />
        <ExampleActions />
      </section>
      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <CodeExample
          title="File with title hidden with actions"
          code={exampleActionsNoTitleCode}
        />
        <ExampleActionsNoTitle />
      </section>
    </div>

    <PropTypeDescription code={fileCode} />
  </div>;

export default Badge;
