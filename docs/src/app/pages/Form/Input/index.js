import React from 'react';
import PropTypes from 'prop-types';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleDisabledCode from '!raw!./ExampleDisabled';
import exampleErrorCode from '!raw!./ExampleError';
import exampleErrorIconCode from '!raw!./ExampleErrorIcon';
import exampleErrorMessageCode from '!raw!./ExampleErrorMessage';
import exampleIconLeftCode from '!raw!./ExampleIconLeft';
import exampleIconLeftRightCode from '!raw!./ExampleIconLeftRight';
import exampleIconRightCode from '!raw!./ExampleIconRight';
import exampleIconRightSpinnerCode from '!raw!./ExampleIconRightSpinner';
import exampleRequiredCode from '!raw!./ExampleRequired';
import exampleReadOnlyCode from '!raw!./ExampleReadOnly';
import inputCode from '!raw!react-lds/components/Form/Input';

import CodeExample from '../../../components/CodeExample';
import PropTypeDescription from '../../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleDisabled from './ExampleDisabled';
import ExampleError from './ExampleError';
import ExampleErrorIcon from './ExampleErrorIcon';
import ExampleErrorMessage from './ExampleErrorMessage';
import ExampleIconLeft from './ExampleIconLeft';
import ExampleIconLeftRight from './ExampleIconLeftRight';
import ExampleIconRight from './ExampleIconRight';
import ExampleIconRightSpinner from './ExampleIconRightSpinner';
import ExampleRequired from './ExampleRequired';
import ExampleReadOnly from './ExampleReadOnly';

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
    case 'icon-right-spinner':
      Component = ExampleIconRightSpinner;
      componentCode = exampleIconRightSpinnerCode;
      break;
    case 'icon-left-right':
      Component = ExampleIconLeftRight;
      componentCode = exampleIconLeftRightCode;
      break;
    case 'required':
      Component = ExampleRequired;
      componentCode = exampleRequiredCode;
      break;
    case 'read-only':
      Component = ExampleReadOnly;
      componentCode = exampleReadOnlyCode;
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
    case 'error-message':
      Component = ExampleErrorMessage;
      componentCode = exampleErrorMessageCode;
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
