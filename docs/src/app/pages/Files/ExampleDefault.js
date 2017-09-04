import React from 'react';
import { File } from 'react-lds';

const sampleImage = {
  alt: 'Description',
  src: 'https://lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg',
};

const ExampleDefault = () => (
  <div>
    <div className="slds-m-bottom--medium" style={{ width: '20rem' }}>
      <File
        href="#"
        fileType="pdf"
        title="Proposal.pdf"
        image={sampleImage}
      />
    </div>
  </div>
  );

export default ExampleDefault;
