import React from 'react';

import CodeExample from '../../../components/CodeExample';
import PropTypeDescription from '../../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import exampleDefaultCode from '!raw!./ExampleDefault';
import ExampleRequired from './ExampleRequired';
import exampleRequiredCode from '!raw!./ExampleRequired';
import ExampleError from './ExampleError';
import exampleErrorCode from '!raw!./ExampleError';
import ExampleDisabled from './ExampleDisabled';
import exampleDisabledCode from '!raw!./ExampleDisabled';
import ExampleMultiple from './ExampleMultiple';
import exampleMultipleCode from '!raw!./ExampleMultiple';

import selectCode from '!raw!react-lds/components/Form/Select';

const mapId = (id) => {
  let Component = ExampleDefault;
  let componentCode = exampleDefaultCode;

  switch (id) {
    case 'default':
      Component = ExampleDefault;
      componentCode = exampleDefaultCode;
      break;
    case 'required':
      Component = ExampleRequired;
      componentCode = exampleRequiredCode;
      break;
    case 'error':
      Component = ExampleError;
      componentCode = exampleErrorCode;
      break;
    case 'disabled':
      Component = ExampleDisabled;
      componentCode = exampleDisabledCode;
      break;
    case 'multiple':
      Component = ExampleMultiple;
      componentCode = exampleMultipleCode;
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="slds-p-around--xx-large">

        <section className="slds-m-bottom--xx-large slds-p-top--x-large">
          <CodeExample
            title="Select"
            code={`${componentCode}`}
          />
          <Component />
        </section>

      </div>
      <PropTypeDescription code={selectCode} header="### Select" />
    </div>
  );
};

const TextareaVariants = ({ params }) =>
  <div>
    {mapId(params.exampleId)}
  </div>;

TextareaVariants.propTypes = {
  params: React.PropTypes.object,
};

export default TextareaVariants;
