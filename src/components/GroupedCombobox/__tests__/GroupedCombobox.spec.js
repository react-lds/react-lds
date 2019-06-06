import React from 'react';
import { shallow } from 'enzyme';
import GroupedCombobox from '../GroupedCombobox';

const getComponent = (props = {}) => shallow(
  <GroupedCombobox
    {...props}
  />
);

describe('<GroupedCombobox />', () => {});

