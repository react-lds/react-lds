import React from 'react';
import { shallow } from 'enzyme';

import ChatListItemEvent from '../ChatListItemEvent';
import { EventContent } from '../Content';

describe('<ChatListItemEvent />', () => {
  let mounted = null;
  const props = {
    icon: null,
    isError: false,
    message: 'message',
    meta: null,
    timestamp: '',
  };

  beforeEach(() => {
    mounted = shallow(<ChatListItemEvent {...props} />);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-chat-event > .slds-chat-event__body').length).toBe(1);
    expect(mounted.find(EventContent).length).toBe(1);
  });

  it('renders the correct markup if `isError` is true', () => {
    mounted.setProps({ isError: true });
    expect(mounted.find('.slds-chat-event.slds-has-error > .slds-chat-event__body').length).toBe(1);
    expect(mounted.find(EventContent).length).toBe(1);
  });

  it('renders optional agent message', () => {
    mounted.setProps({ meta: 'meta' });
    expect(mounted.find('.slds-chat-event__agent-message').length).toBe(1);
  });
});
