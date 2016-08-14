import React from 'react';

import CodeExample from '../../components/CodeExample';
import PropTypeDescription from '../../components/PropTypeDescription';
import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';

import MediaObjectExampleNormal from './ExampleNormal';
import mediaObjectExampleNormalCode from '!raw!./ExampleNormal';
import MediaObjectExampleResponsive from './ExampleResponsive';
import mediaObjectExampleResponsiveCode from '!raw!./ExampleResponsive';
import mediaObjectCode from '!raw!react-lds/components/MediaObject/MediaObject';

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
