import React from 'react';
import PropTypes from 'prop-types';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleDisabledCode from '!raw!./ExampleDisabled';
import exampleErrorCode from '!raw!./ExampleError';
import exampleGroupCode from '!raw!./ExampleGroup';
import exampleGroupDisabledCode from '!raw!./ExampleGroupDisabled';
import exampleGroupErrorCode from '!raw!./ExampleGroupError';
import exampleGroupRequiredCode from '!raw!./ExampleGroupRequired';
import exampleRequiredCode from '!raw!./ExampleRequired';
import exampleGroupFieldLevelHelpCode from '!raw!./ExampleGroupFieldLevelHelp';
import inputCode from '!raw!react-lds/components/Form/Input';

import CodeExample from '../../../components/CodeExample';
import PropTypeDescription from '../../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleDisabled from './ExampleDisabled';
import ExampleError from './ExampleError';
import ExampleGroup from './ExampleGroup';
import ExampleGroupDisabled from './ExampleGroupDisabled';
import ExampleGroupError from './ExampleGroupError';
import ExampleGroupRequired from './ExampleGroupRequired';
import ExampleRequired from './ExampleRequired';
import ExampleGroupFieldLevelHelp from './ExampleGroupFieldLevelHelp';

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
    case 'disabled':
      Component = ExampleDisabled;
      componentCode = exampleDisabledCode;
      break;
    case 'error':
      Component = ExampleError;
      componentCode = exampleErrorCode;
      break;
    case 'group':
      Component = ExampleGroup;
      componentCode = exampleGroupCode;
      break;
    case 'group_disabled':
      Component = ExampleGroupDisabled;
      componentCode = exampleGroupDisabledCode;
      break;
    case 'group_error':
      Component = ExampleGroupError;
      componentCode = exampleGroupErrorCode;
      break;
    case 'group_required':
      Component = ExampleGroupRequired;
      componentCode = exampleGroupRequiredCode;
      break;
    case 'group-field-level-help':
      Component = ExampleGroupFieldLevelHelp;
      componentCode = exampleGroupFieldLevelHelpCode;
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="slds-p-around--xx-large">

        <section className="slds-m-bottom--xx-large slds-p-top--x-large">
          <CodeExample
            title="Checkbox"
            code={`${componentCode}`}
          />
          <Component />
        </section>

      </div>

      <PropTypeDescription code={inputCode} header="### Checkbox" />
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
