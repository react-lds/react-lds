import React from 'react';

import exampleDefaultCode from '!raw!./ExampleDefault';
import exampleThemedCode from '!raw!./ExampleThemed';
import exampleAdvancedCode from '!raw!./ExampleAdvanced';
import examplePanelCode from '!raw!./ExamplePanel';
import exampleWarningPanelCode from '!raw!./ExampleWarningPanel';

import popoverCode from '!raw!react-lds/components/Popover/Popover';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleDefault from './ExampleDefault';
import ExampleThemed from './ExampleThemed';
import ExampleAdvanced from './ExampleAdvanced';
import ExamplePanel from './ExamplePanel';
import ExampleWarningPanel from './ExampleWarningPanel';

require('./index.scss');

const PopoverPage = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Popovers" />

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Default Popover"
        code={exampleDefaultCode}
      />
      <ExampleDefault />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Themed Popover"
        code={exampleThemedCode}
      />
      <ExampleThemed />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Advanced Popover"
        code={exampleAdvancedCode}
      />
      <ExampleAdvanced />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Panel Popover"
        code={examplePanelCode}
      />
      <ExamplePanel />
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Custom Layout Popover"
        code={exampleWarningPanelCode}
      />
      <ExampleWarningPanel />
    </div>

    <PropTypeDescription code={popoverCode} header="### Popover" />
  </div>
);

export default PopoverPage;
