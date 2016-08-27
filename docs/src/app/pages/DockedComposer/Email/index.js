import React from 'react';

import emailCode from '!raw!react-lds/components/DockedComposer/Email';
import exampleEmailCode from '!raw!./ExampleEmail';
import exampleEmailExtendedCode from '!raw!./ExampleEmailExtended';

import CodeExample from '../../../components/CodeExample';
import PropTypeDescription from '../../../components/PropTypeDescription';

import ExampleEmail from './ExampleEmail';
import ExampleEmailExtended from './ExampleEmailExtended';

const mapId = (id) => {
  let Component = ExampleEmail;
  let componentCode = exampleEmailCode;

  switch (id) {
    case 'default':
      Component = ExampleEmail;
      componentCode = exampleEmailCode;
      break;
    case 'extended':
      Component = ExampleEmailExtended;
      componentCode = exampleEmailExtendedCode;
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="slds-p-around--xx-large">

        <section className="slds-m-bottom--xx-large slds-p-top--x-large">
          <CodeExample
            title="Email"
            code={`${componentCode}`}
          />
          <Component />
        </section>

      </div>
      <PropTypeDescription code={emailCode} header="### Input" />
    </div>
  );
};

const EmailVariants = ({ params }) =>
  <div>
    {mapId(params.exampleId)}
  </div>;

EmailVariants.propTypes = {
  params: React.PropTypes.object,
};

export default EmailVariants;
