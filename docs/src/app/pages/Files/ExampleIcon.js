import React from 'react';
import { File } from 'react-lds';

const ExampleIcon = () => (
  <div>
    <div className="slds-m-bottom--medium" style={{ width: '20rem' }}>
      <File
        fileType="image"
        title="Image Title"
      />
    </div>
  </div>
  );

export default ExampleIcon;
