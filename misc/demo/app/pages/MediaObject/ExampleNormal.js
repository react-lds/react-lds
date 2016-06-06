import React from 'react';
import { MediaObject, Icon } from 'react-lds';

const MediaObjectExampleSimple = () => {
  const icon = <Icon sprite="standard" icon="opportunity" />;
  const sampleText = (
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur
    sapiente. Modi veritatis totam accusantium numquam assumenda.</p>
  );

  return (
    <div>
      <MediaObject figureLeft={icon}>{sampleText}</MediaObject>
    </div>
  );
};

export default MediaObjectExampleSimple;
