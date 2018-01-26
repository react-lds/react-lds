import React from 'react';
import { mount } from 'enzyme';

import Prompt from '../Prompt';

describe('<Prompt />', () => {
  let mounted = null;
  const props = { buttonText: 'foo', description: 'bar', label: 'baz', title: 'foobar' };
  const child = <p>Foobar</p>;

  beforeEach(() => {
    mounted = mount(<Prompt {...props}>{child}</Prompt>);
  });

  it('applies theme', () => {
    mounted.setProps({ theme: 'offline' });
    expect(mounted.find('.slds-theme_offline')).toHaveLength(1);
  });
});
