import React from 'react';
import { shallow } from 'enzyme';

import ChatListItemBookend from '../ChatListItemBookend';
import { EventContent } from '../Content';

describe('<ChatListItem />', () => {
  let mounted = null;
  const props = {
    isEnd: false,
    message: 'foo',
    timestamp: '',
  };

  beforeEach(() => {
    mounted = shallow(<ChatListItemBookend {...props} />);
  });

  it('renders the correct markup', () => {
    expect(mounted.hasClass('slds-chat-bookend')).toBeTruthy();
    expect(mounted.find(EventContent).prop('icon')).toEqual('chat');
  });

  it('renders the correct markup if `isEnd` is true', () => {
    mounted.setProps({ isEnd: true });
    expect(mounted.hasClass('slds-chat-bookend_stop')).toBeTruthy();
    expect(mounted.find(EventContent).prop('icon')).toEqual('end_chat');
  });
});
