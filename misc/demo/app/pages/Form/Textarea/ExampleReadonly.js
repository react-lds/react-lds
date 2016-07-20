import React from 'react';

import { Textarea } from 'react-lds';

const ExampleReadonly = () =>
  <div>
    <Textarea
      id="textarea-input-1"
      label="Textarea Label"
      placeholder="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
      amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis
      euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum."
      readOnly
    />
  </div>;

export default ExampleReadonly;
