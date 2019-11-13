import React from 'react';
import { shallow } from 'enzyme';

import ChatListItemMessage from '../ChatListItemMessage';
import { MessageContent } from '../Content';

describe('<ChatListItemMessage />', () => {
  let mounted = null;
  const props = {
    author: 'foo',
    avatar: null,
    isConsecutive: false,
    isFirstMessage: true,
    isPastChat: false,
    type: '',
  };

  beforeEach(() => {
    mounted = shallow(<ChatListItemMessage {...props} />);
  });

  it('renders the correct markup', () => {
    expect(mounted.hasClass('slds-chat-message')).toBeTruthy();
    expect(mounted.find('.slds-chat-message__body').length).toBe(1);
    expect(mounted.find(MessageContent).length).toBe(1);
  });

  it('renders avatar for first message', () => {
    mounted.setProps({ avatar: 'bar' });
    expect(mounted.find('.slds-chat-avatar').length).toBe(1);
    expect(mounted.hasClass('slds-chat-message_faux-avatar')).toBeFalsy();

    mounted.setProps({ isFirstMessage: false });
    expect(mounted.find('.slds-chat-avatar').length).toBe(0);
    expect(mounted.hasClass('slds-chat-message_faux-avatar')).toBeTruthy();
  });

  it('renders no avatar if `isPastChat` is true', () => {
    mounted.setProps({ avatar: 'bar', isPastChat: true });
    expect(mounted.find('.slds-chat-avatar').length).toBe(0);
  });
});
