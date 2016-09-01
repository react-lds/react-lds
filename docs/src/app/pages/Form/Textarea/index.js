import React from 'react';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleDisabledCode from '!raw!./ExampleDisabled';
import exampleErrorCode from '!raw!./ExampleError';
import exampleReadonlyCode from '!raw!./ExampleReadonly';
import exampleRequiredCode from '!raw!./ExampleRequired';
import inputCode from '!raw!react-lds/components/Form/Textarea';

import CodeExample from '../../../components/CodeExample';
import PropTypeDescription from '../../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleDisabled from './ExampleDisabled';
import ExampleError from './ExampleError';
import ExampleReadonly from './ExampleReadonly';
import ExampleRequired from './ExampleRequired';

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
    case 'readonly':
      Component = ExampleReadonly;
      componentCode = exampleReadonlyCode;
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="slds-p-around--xx-large">

        <section className="slds-m-bottom--xx-large slds-p-top--x-large">
          <CodeExample
            title="Textarea"
            code={`${componentCode}`}
          />
          <Component />
        </section>

      </div>
      <PropTypeDescription code={inputCode} header="### Textarea" />
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
