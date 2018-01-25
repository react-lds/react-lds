import React from 'react';
import { mount } from 'enzyme';

import Prompt from '../Notification';

describe('<Prompt />', () => {
  let mounted = null;
  let props = {};

  const child = <p>Foobar</p>;

  beforeEach(() => {
    props = {
      title: 'foo',
      label: 'lel',
    };

    mounted = mount(<Prompt {...props}>{child}</Prompt>);
  });

  it('applies theme', () => {
    mounted.setProps({ theme: 'offline' });
    expect(mounted.find('.slds-theme_offline')).toHaveLength(1);
  });
});
