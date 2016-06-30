import React from 'react';
import CodeExample from './../../components/CodeExample';
import PropTypeDescription from './../../components/PropTypeDescription';

import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';
import modalCode from '!raw!react-lds/components/Modal/Modal';
import modalHeaderCode from '!raw!react-lds/components/Modal/ModalHeader';
import modalFooterCode from '!raw!react-lds/components/Modal/ModalFooter';
import modalContentCode from '!raw!react-lds/components/Modal/ModalContent';
import backdropCode from '!raw!react-lds/components/Modal/Backdrop';

import ExampleNormal from './ExampleNormal';
import exampleNormalCode from '!raw!./ExampleNormal';
import ExampleLarge from './ExampleLarge';
import exampleLargeCode from '!raw!./ExampleLarge';
import ExampleTaglines from './ExampleTaglines';
import exampleTaglinesCode from '!raw!./ExampleTaglines';
import ExampleHeaderEmpty from './ExampleHeaderEmpty';
import exampleHeaderEmptyCode from '!raw!./ExampleHeaderEmpty';
import ExampleNoFooter from './ExampleNoFooter';
import exampleNoFooterCode from '!raw!./ExampleNoFooter';
import ExampleDirectional from './ExampleDirectional';
import exampleDirectionalCode from '!raw!./ExampleDirectional';

require('./modals.scss');

const Modals = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Modals" />
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Normal Modal"
        code={exampleNormalCode}
      />
      <ExampleNormal />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Large Modal"
        code={exampleLargeCode}
      />
      <ExampleLarge />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Modal with Taglines"
        code={exampleTaglinesCode}
      />
      <ExampleTaglines />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Modal with empty header"
        code={exampleHeaderEmptyCode}
      />
      <ExampleHeaderEmpty />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Modal without a footer"
        code={exampleNoFooterCode}
      />
      <ExampleNoFooter />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Directional Modal"
        code={exampleDirectionalCode}
      />
      <ExampleDirectional />
    </div>

    <PropTypeDescription
      code={modalCode}
      header="### Modal"
    />

    <PropTypeDescription
      code={modalHeaderCode}
      header="### Modal Header"
    />

    <PropTypeDescription
      code={modalContentCode}
      header="### Modal Content"
    />

    <PropTypeDescription
      code={modalFooterCode}
      header="### Modal Footer"
    />

    <PropTypeDescription
      code={backdropCode}
      header="### Backdrop"
    />
  </div>;

export default Modals;
