import React from 'react';
import { File } from 'react-lds';

const ExampleLoading = () => (
  <div>
    <div className="slds-m-bottom--medium" style={{ width: '20rem' }}>
      <File
        fileType="image"
        isLoading
        title="Image Title"
      />
    </div>
  </div>
  );

export default ExampleLoading;
