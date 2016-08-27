import React from 'react';

import mediaObjectCode from '!raw!react-lds/components/MediaObject/MediaObject';
import mediaObjectExampleNormalCode from '!raw!./ExampleNormal';
import mediaObjectExampleResponsiveCode from '!raw!./ExampleResponsive';

import CodeExample from '../../components/CodeExample';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';
import PropTypeDescription from '../../components/PropTypeDescription';

import MediaObjectExampleNormal from './ExampleNormal';
import MediaObjectExampleResponsive from './ExampleResponsive';

const descriptions = {
  normal: '`MediaObject` with a `MediaObjectBody` and `MediaObejctFigure` sub-component',
  responsive: 'The same but responsive',
};

const MediaObjectPage = () => (
  <div>
    <Masthead figure={<HeaderIcon />} title="Media Object" />
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Normal MediaObject"
        description={descriptions.normal}
        code={mediaObjectExampleNormalCode}
      />
      <MediaObjectExampleNormal />
    </div>
    <div className="slds-p-around--xx-large">
      <CodeExample
        title="Responsive MediaObject"
        description={descriptions.responsive}
        code={mediaObjectExampleResponsiveCode}
      />
      <MediaObjectExampleResponsive />
    </div>

    <PropTypeDescription code={mediaObjectCode} />
  </div>
);

export default MediaObjectPage;
