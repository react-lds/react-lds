import React from 'react';
import PropTypes from 'prop-types';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleDisabledCode from '!raw!./ExampleDisabled';
import exampleErrorCode from '!raw!./ExampleError';
import exampleErrorIconCode from '!raw!./ExampleErrorIcon';
import exampleIconLeftCode from '!raw!./ExampleIconLeft';
import exampleIconLeftRightCode from '!raw!./ExampleIconLeftRight';
import exampleIconRightCode from '!raw!./ExampleIconRight';
import exampleRequiredCode from '!raw!./ExampleRequired';
import inputCode from '!raw!react-lds/components/Form/Input';

import CodeExample from '../../../components/CodeExample';
import PropTypeDescription from '../../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleDisabled from './ExampleDisabled';
import ExampleError from './ExampleError';
import ExampleErrorIcon from './ExampleErrorIcon';
import ExampleIconLeft from './ExampleIconLeft';
import ExampleIconLeftRight from './ExampleIconLeftRight';
import ExampleIconRight from './ExampleIconRight';
import ExampleRequired from './ExampleRequired';

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
  params: PropTypes.object,
};

export default InputVariants;
