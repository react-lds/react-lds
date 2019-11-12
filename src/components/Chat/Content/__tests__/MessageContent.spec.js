import React from 'react';
import { shallow } from 'enzyme';

import {
  MessageContent,
  MessageFile,
  MessageMeta,
  MessageStatus,
} from '..';
import { CHAT_ITEM_TYPES } from '../../utils';

describe('<MessageContent />', () => {
  let mounted = null;
  const props = {
    attachment: null,
    author: 'bar',
    isConsecutive: false,
    isPastChat: false,
    message: 'foo',
    meta: 'foo',
    timestamp: '',
    translations: {},
    type: '',
  };

  beforeEach(() => {
    mounted = shallow(<MessageContent {...props} />);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-chat-message__text > span').text()).toEqual('foo');
    expect(mounted.find(MessageMeta).length).toBe(1);
  });

  it('renders typing indication', () => {
    mounted.setProps({ type: CHAT_ITEM_TYPES.MESSAGE_TYPING });
    expect(mounted.find('.slds-chat-message__text_sneak-peek').length).toBe(1);

    const div = mounted.find('div').at(0);
    expect(div.hasClass('slds-chat-message__text')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_inbound')).toBeTruthy();
  });

  it('renders delivery failure message', () => {
    mounted.setProps({ type: CHAT_ITEM_TYPES.MESSAGE_DELIVERY_FAILURE });
    expect(mounted.find(MessageStatus).length).toBe(1);
    expect(mounted.find(MessageMeta).length).toBe(1);

    const div = mounted.find('div').at(0);
    expect(div.find('.slds-chat-message__text_delivery-failure-reason').length).toBe(1);
    expect(div.hasClass('slds-chat-message__text')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_outbound')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_delivery-failure')).toBeTruthy();
  });

  it('renders unsupported type message', () => {
    mounted.setProps({ type: CHAT_ITEM_TYPES.MESSAGE_UNSUPPORTED_TYPE });
    expect(mounted.find(MessageStatus).length).toBe(1);
    expect(mounted.find(MessageMeta).length).toBe(1);

    const div = mounted.find('div').at(0);
    expect(div.hasClass('slds-chat-message__text')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_inbound')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_unsupported-type')).toBeTruthy();
  });

  it('renders outbound message', () => {
    mounted.setProps({ type: CHAT_ITEM_TYPES.MESSAGE_OUTBOUND });
    expect(mounted.find(MessageMeta).length).toBe(1);

    const div = mounted.find('div').at(0);
    expect(div.hasClass('slds-chat-message__text')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_outbound')).toBeTruthy();
  });

  it('renders outbound agent message', () => {
    mounted.setProps({ type: CHAT_ITEM_TYPES.MESSAGE_OUTBOUND_AGENT });
    expect(mounted.find(MessageMeta).length).toBe(1);

    const div = mounted.find('div').at(0);
    expect(div.hasClass('slds-chat-message__text')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_outbound-agent')).toBeTruthy();
  });

  it('renders inbound message', () => {
    mounted.setProps({ type: CHAT_ITEM_TYPES.MESSAGE_INBOUND });
    expect(mounted.find(MessageMeta).length).toBe(1);

    const div = mounted.find('div').at(0);
    expect(div.hasClass('slds-chat-message__text')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_inbound')).toBeTruthy();
  });

  it('renders image attachment', () => {
    mounted.setProps({
      type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
      attachment: {
        fileType: 'image',
        isLink: false,
        title: 'img',
      },
    });
    expect(mounted.find(MessageFile).length).toBe(1);

    const div = mounted.find('div').at(0);
    expect(div.hasClass('slds-chat-message__image')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__image_inbound')).toBeTruthy();
  });

  it('renders file attachment', () => {
    mounted.setProps({
      type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
      attachment: {
        fileType: 'file',
        isLink: false,
        title: 'file',
      },
    });
    expect(mounted.find(MessageFile).length).toBe(1);

    const div = mounted.find('div').at(0);
    expect(div.hasClass('slds-chat-message__file')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__file_inbound')).toBeTruthy();
  });

  it('renders attachment as link', () => {
    mounted.setProps({
      type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
      attachment: {
        fileType: 'image',
        isLink: true,
        title: 'img',
      },
    });
    expect(mounted.find(MessageFile).length).toBe(1);

    const div = mounted.find('div').at(0);
    expect(div.hasClass('slds-chat-message__text')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_inbound')).toBeTruthy();
  });

  it('renders past chat message', () => {
    mounted.setProps({
      type: CHAT_ITEM_TYPES.MESSAGE_OUTBOUND_AGENT,
      isPastChat: true,
    });
    expect(mounted.childAt(0).type()).toEqual(MessageMeta);

    const div = mounted.find('div').at(0);
    expect(div.hasClass('slds-chat-message__text')).toBeTruthy();
    expect(div.hasClass('slds-chat-message__text_outbound')).toBeFalsy();
  });
});
