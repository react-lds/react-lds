import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from '../Tooltip';

const getComponent = (props = {}) => shallow(
  <Tooltip
    {...props}
  />
);

describe('<Tooltip />', () => {});

