import React from 'react';
import { Grid, Column } from '../../../src/main';

import Masthead from './Masthead';
import HeaderIcon from './HeaderIcon';

const GridSystem = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Grid System" />
  </div>;

export default GridSystem;
