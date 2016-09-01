import React from 'react';

import exampleAlertErrorCode from '!raw!./ExampleAlertError';
import exampleAlertNormalCode from '!raw!./ExampleAlertNormal';
import exampleAlertOfflineCode from '!raw!./ExampleAlertOffline';
import exampleAlertSuccessCode from '!raw!./ExampleAlertSuccess';
import exampleToastErrorCode from '!raw!./ExampleToastError';
import exampleToastErrorDetailsCode from '!raw!./ExampleToastErrorDetails';
import exampleToastNormalCode from '!raw!./ExampleToastNormal';
import exampleToastSuccessCode from '!raw!./ExampleToastSuccess';
import exampleToastWarningCode from '!raw!./ExampleToastWarning';

import exampleModalToastCode from '!raw!./ExampleModalToast';
import examplePromptCode from '!raw!./ExamplePrompt';
import examplePromptTouchCode from '!raw!./ExamplePromptTouch';
import examplePromptTouchHeaderCode from '!raw!./ExamplePromptTouchHeader';
import examplePromptTouchIconCode from '!raw!./ExamplePromptTouchIcon';
import examplePromptTouchTaglineCode from '!raw!./ExamplePromptTouchTagline';

import { Notification } from 'react-lds/components/Notifications/Notification';
import notificationCode from '!raw!react-lds/components/Notifications/Notification';
import promptCode from '!raw!react-lds/components/Notifications/Prompt';
import promptForTouchCode from '!raw!react-lds/components/Notifications/PromptForTouch';

import CodeExample from '../../components/CodeExample';
import DecoratorList from '../../components/DecoratorList';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import ExampleAlertError from './ExampleAlertError';
import ExampleAlertNormal from './ExampleAlertNormal';
import ExampleAlertOffline from './ExampleAlertOffline';
import ExampleAlertSuccess from './ExampleAlertSuccess';

import ExampleToastError from './ExampleToastError';
import ExampleToastErrorDetails from './ExampleToastErrorDetails';
import ExampleToastNormal from './ExampleToastNormal';
import ExampleToastSuccess from './ExampleToastSuccess';
import ExampleToastWarning from './ExampleToastWarning';

import ExamplePrompt from './ExamplePrompt';

import ExamplePromptTouch from './ExamplePromptTouch';
import ExamplePromptTouchHeader from './ExamplePromptTouchHeader';
import ExamplePromptTouchIcon from './ExamplePromptTouchIcon';
import ExamplePromptTouchTagline from './ExamplePromptTouchTagline';

import ExampleModalToast from './ExampleModalToast';

require('./index.scss');

const Notifications = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Notifications" />
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Base Alert"
        code={exampleAlertNormalCode}
      />
      <div className="demo-notifications">
        <ExampleAlertNormal />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Error Alert"
        code={exampleAlertErrorCode}
      />
      <div className="demo-notifications">
        <ExampleAlertError />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Offline Alert"
        code={exampleAlertOfflineCode}
      />
      <div className="demo-notifications">
        <ExampleAlertOffline />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Success Alert"
        code={exampleAlertSuccessCode}
      />
      <div className="demo-notifications">
        <ExampleAlertSuccess />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Normal Toast"
        code={exampleToastNormalCode}
      />
      <div className="demo-notifications">
        <ExampleToastNormal />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Error Toast"
        code={exampleToastErrorCode}
      />
      <div className="demo-notifications">
        <ExampleToastError />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Warning Toast"
        code={exampleToastWarningCode}
      />
      <div className="demo-notifications">
        <ExampleToastWarning />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Success Toast"
        code={exampleToastSuccessCode}
      />
      <div className="demo-notifications">
        <ExampleToastSuccess />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Error with Details Toast"
        code={exampleToastErrorDetailsCode}
      />
      <div className="demo-notifications">
        <ExampleToastErrorDetails />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Example Prompt"
        code={examplePromptCode}
      />
      <div className="demo-modal">
        <ExamplePrompt />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Example PromptForTouch"
        code={examplePromptTouchCode}
      />
      <div className="demo-modal">
        <ExamplePromptTouch />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Example PromptForTouch with Header"
        code={examplePromptTouchHeaderCode}
      />
      <div className="demo-modal">
        <ExamplePromptTouchHeader />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Example PromptForTouch with Tagline"
        code={examplePromptTouchTaglineCode}
      />
      <div className="demo-modal">
        <ExamplePromptTouchTagline />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Example PromptForTouch with Icon"
        code={examplePromptTouchIconCode}
      />
      <div className="demo-modal">
        <ExamplePromptTouchIcon />
      </div>
    </div>

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Example Modal Toast"
        code={exampleModalToastCode}
      />
      <div className="demo-modal">
        <ExampleModalToast />
      </div>
    </div>

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">Notification</h2>
    <DecoratorList component={Notification} />
    <PropTypeDescription
      code={notificationCode}
    />

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">Prompt</h2>
    <PropTypeDescription
      code={promptCode}
    />

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">Prompt For Touch</h2>
    <PropTypeDescription
      code={promptForTouchCode}
    />

  </div>
);

export default Notifications;
