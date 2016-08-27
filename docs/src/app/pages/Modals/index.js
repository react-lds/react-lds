import React from 'react';

import backdropCode from '!raw!react-lds/components/Modal/Backdrop';
import exampleDirectionalCode from '!raw!./ExampleDirectional';
import exampleHeaderEmptyCode from '!raw!./ExampleHeaderEmpty';
import exampleLargeCode from '!raw!./ExampleLarge';
import exampleNoFooterCode from '!raw!./ExampleNoFooter';
import exampleNormalCode from '!raw!./ExampleNormal';
import exampleTaglinesCode from '!raw!./ExampleTaglines';
import modalCode from '!raw!react-lds/components/Modal/Modal';
import modalContentCode from '!raw!react-lds/components/Modal/ModalContent';
import modalFooterCode from '!raw!react-lds/components/Modal/ModalFooter';
import modalHeaderCode from '!raw!react-lds/components/Modal/ModalHeader';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDirectional from './ExampleDirectional';
import ExampleHeaderEmpty from './ExampleHeaderEmpty';
import ExampleLarge from './ExampleLarge';
import ExampleNoFooter from './ExampleNoFooter';
import ExampleNormal from './ExampleNormal';
import ExampleTaglines from './ExampleTaglines';

require('./index.scss');

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
