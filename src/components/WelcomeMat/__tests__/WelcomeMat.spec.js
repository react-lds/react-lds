import React from 'react';
import { shallow } from 'enzyme';
import WelcomeMat from '../WelcomeMat';

const getComponent = (props = {}) => shallow(
  <WelcomeMat
    {...props}
  />
);

describe('<WelcomeMat />', () => {});

