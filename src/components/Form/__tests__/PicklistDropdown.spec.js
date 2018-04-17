import React from 'react';
import { shallow } from 'enzyme';

import PicklistDropdown from '../PicklistDropdown';

describe('<PicklistDropdown />', () => {
  let mounted = null;
  let props = {};
  const children = [<li key="1">one</li>, <li key="2">two</li>];
  const input = <input />;

  props = {
    children,
    error: 'Error',
    hideLabel: false,
    id: 'picklist-1',
    input,
    isOpen: true,
    labelInput: 'Label',
    isRequired: false,
  };

  beforeEach(() => {
    mounted = shallow(
      <PicklistDropdown {...props} />
    );
  });

  it('renders input', () => {
    expect(mounted.find('input').contains(input)).toBeTruthy();
  });

  it('renders children', () => {
    expect(mounted.find('li')).toHaveLength(props.children.length);
  });
});
