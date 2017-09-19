import React from 'react';
import PropTypes from 'prop-types';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleDisabledCode from '!raw!./ExampleDisabled';
import exampleErrorCode from '!raw!./ExampleError';
import exampleMultipleCode from '!raw!./ExampleMultiple';
import exampleRequiredCode from '!raw!./ExampleRequired';
import exampleFieldLevelHelpCode from '!raw!./ExampleFieldLevelHelp';
import selectCode from '!raw!react-lds/components/Form/Select';

import CodeExample from '../../../components/CodeExample';
import PropTypeDescription from '../../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleDisabled from './ExampleDisabled';
import ExampleError from './ExampleError';
import ExampleMultiple from './ExampleMultiple';
import ExampleRequired from './ExampleRequired';
import ExampleFieldLevelHelp from './ExampleFieldLevelHelp';

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
    case 'field-level-help':
      Component = ExampleFieldLevelHelp;
      componentCode = exampleFieldLevelHelpCode;
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
  params: PropTypes.object,
};

export default TextareaVariants;
