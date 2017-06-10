import React from 'react';
import { ProgressBar } from 'react-lds';
import progressBarCode from '!raw!react-lds/components/ProgressBar/ProgressBar';

import exampleDefaultCode from '!raw!./ExampleDefault';
import ExampleDefault from './ExampleDefault';

import CodeExample from '../../components/CodeExample';

import DecoratorList from '../../components/DecoratorList';

import HeaderIcon from '../../components/HeaderIcon';

import Masthead from '../../components/MastHead';

import PropTypeDescription from '../../components/PropTypeDescription';


const ProgressBarPage = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Progress Bar" />

    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Default Progress Bar"
        code={exampleDefaultCode}
      />
      <ExampleDefault />
    </div>

    <h2 className="slds-text-heading--medium slds-p-left--xx-large slds-p-bottom--small">ProgressBar</h2>
    <DecoratorList component={ProgressBar} />
    <PropTypeDescription
      code={progressBarCode}
    />
  </div>
);

export default ProgressBarPage;
