import React from 'react';
import { File } from 'react-lds';

const ExampleLoadingNoTitle = () => (
  <div>
    <div className="slds-m-bottom--medium" style={{ width: '20rem' }}>
      <File
        isLoading
        hideTitle
        title="Image Title"
      />
    </div>
  </div>
  );

export default ExampleLoadingNoTitle;
