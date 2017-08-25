import React from 'react';
import { File } from 'react-lds';

const sampleImage = {
  alt: 'Description',
  src: 'https://lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg',
};

const ExampleNoTitle = () => (
  <div>
    <div className="slds-m-bottom--medium" style={{ width: '20rem' }}>
      <File
        onClick={() => { window.alert('File clicked') }}
        fileType="image"
        hideTitle
        image={sampleImage}
        title="Image Title"
      />
    </div>
  </div>
  );

export default ExampleNoTitle;
