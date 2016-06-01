import React from 'react';
import { Icon, MediaObject, MediaObjectBody, MediaObjectFigure } from '../../../src/main';

const MediaObjects = () => {
  const icon = <Icon category="standard" icon="opportunity" />;
  const sampleText = (
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur
    sapiente. Modi veritatis totam accusantium numquam assumenda.</p>
  );

  return (
    <div>
      <MediaObject>
        <MediaObjectFigure>{icon}</MediaObjectFigure>
        <MediaObjectBody>{sampleText}</MediaObjectBody>
      </MediaObject>
      <MediaObject responsive>
        <MediaObjectFigure>{icon}</MediaObjectFigure>
        <MediaObjectBody>{sampleText}</MediaObjectBody>
      </MediaObject>
    </div>
  );
};

export default MediaObjects;
