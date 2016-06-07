import React from 'react';
import CodeExample from './../../components/CodeExample';

import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';
import MediaObjectExampleNormal from './ExampleNormal';
import mediaObjectExampleNormalCode from '!raw!./ExampleNormal';
import MediaObjectExampleResponsive from './ExampleResponsive';
import mediaObjectExampleResponsiveCode from '!raw!./ExampleResponsive';

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
  </div>
);

export default MediaObjectPage;
