import React from 'react';

import CodeExample from '../../../components/CodeExample';
import PropTypeDescription from '../../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import exampleDefaultCode from '!raw!./ExampleDefault';
import ExampleIconLeft from './ExampleIconLeft';
import exampleIconLeftCode from '!raw!./ExampleIconLeft';
import ExampleIconRight from './ExampleIconRight';
import exampleIconRightCode from '!raw!./ExampleIconRight';
import ExampleIconLeftRight from './ExampleIconLeftRight';
import exampleIconLeftRightCode from '!raw!./ExampleIconLeftRight';
import ExampleRequired from './ExampleRequired';
import exampleRequiredCode from '!raw!./ExampleRequired';
import ExampleDisabled from './ExampleDisabled';
import exampleDisabledCode from '!raw!./ExampleDisabled';
import ExampleError from './ExampleError';
import exampleErrorCode from '!raw!./ExampleError';
import ExampleErrorIcon from './ExampleErrorIcon';
import exampleErrorIconCode from '!raw!./ExampleErrorIcon';

import inputCode from '!raw!react-lds/components/Form/Input';

const mapId = (id) => {
  let Component = ExampleDefault;
  let componentCode = exampleDefaultCode;

  switch (id) {
    case 'default':
      Component = ExampleDefault;
      componentCode = exampleDefaultCode;
      break;
    case 'icon-left':
      Component = ExampleIconLeft;
      componentCode = exampleIconLeftCode;
      break;
    case 'icon-right':
      Component = ExampleIconRight;
      componentCode = exampleIconRightCode;
      break;
    case 'icon-left-right':
      Component = ExampleIconLeftRight;
      componentCode = exampleIconLeftRightCode;
      break;
    case 'required':
      Component = ExampleRequired;
      componentCode = exampleRequiredCode;
      break;
    case 'disabled':
      Component = ExampleDisabled;
      componentCode = exampleDisabledCode;
      break;
    case 'error':
      Component = ExampleError;
      componentCode = exampleErrorCode;
      break;
    case 'error-icon':
      Component = ExampleErrorIcon;
      componentCode = exampleErrorIconCode;
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="slds-p-around--xx-large">

        <section className="slds-m-bottom--xx-large slds-p-top--x-large">
          <CodeExample
            title="Input"
            code={`${componentCode}`}
          />
          <Component />
        </section>

      </div>
      <PropTypeDescription code={inputCode} header="### Input" />
    </div>
  );
};

const InputVariants = ({ params }) =>
  <div>
    {mapId(params.exampleId)}
  </div>;

InputVariants.propTypes = {
  params: React.PropTypes.object,
};

export default InputVariants;
