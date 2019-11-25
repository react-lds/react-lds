import React from 'react';
import { shallow } from 'enzyme';

import { Meta, MessageMeta } from '..';

describe('<MessageMeta />', () => {
  let mounted = null;
  const props = {
    author: 'foo',
    id: '1',
    isConsecutive: false,
    isDeliveryFailure: false,
    isPastChat: false,
    onResend: Function.prototype,
    timestamp: '',
    translations: {
      at: 'at',
      said: 'said',
    },
  };

  beforeEach(() => {
    mounted = shallow(<MessageMeta {...props} />);
  });

  it('renders the correct markup', () => {
    expect(mounted.find(Meta).length).toBe(1);
  });

  it('renders delivery failure message', () => {
    const mockFn = jest.fn();
    mounted.setProps({ isDeliveryFailure: true, onResend: mockFn });

    const button = mounted.find('.slds-chat-message__action');
    button.simulate('click');
    expect(mockFn).toBeCalled();
    expect(mounted.find(Meta).length).toBe(1);
  });

  it('returns null if message is followed by a consecutive one', () => {
    mounted.setProps({ isConsecutive: true });
    expect(mounted.type()).toEqual(null);
  });
});
