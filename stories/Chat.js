import React from 'react';
import { storiesOf } from '@storybook/react';
import Moment from 'moment-timezone';
import { boolean } from '@storybook/addon-knobs';

import { Chat, CHAT_ITEM_TYPES } from '../src';

/* eslint-disable react/jsx-one-expression-per-line */

const stories = storiesOf('Chat', module);

const date = new Date();
const now = Moment(date).format('hh:mm A');

const startItem = {
  message: <React.Fragment>Chat started by <b>Andy Martinez</b></React.Fragment>,
  timestamp: now,
  type: CHAT_ITEM_TYPES.EVENT_START,
};

const endItem = {
  message: <React.Fragment>Chat ended by <b>Andy Martinez</b></React.Fragment>,
  timestamp: now,
  type: CHAT_ITEM_TYPES.EVENT_STOP,
};

const advancedItems = [
  startItem,
  {
    author: 'Andy Martinez',
    message: 'Hi',
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
    timestamp: now,
  },
  {
    author: 'Andy Martinez',
    message: 'my CloudWidget only speaks French',
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
    timestamp: now,
  },
  {
    author: 'Andy Martinez',
    attachment: {
      isLink: true,
      src: '#',
      title: 'Attachmentfilename_of_attachment.jpg',
      fileType: 'image',
    },
    timestamp: now,
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
  },
  {
    author: 'Andy Martinez',
    attachment: {
      hideTitle: true,
      src: 'https://lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg',
      fileType: 'image',
      title: 'File.jpg',
    },
    timestamp: now,
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
  },
  {
    author: 'Andy Martinez',
    attachment: {
      src: 'https://lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg',
      fileType: 'image',
      title: 'File.jpg',
    },
    timestamp: now,
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
  },
  {
    author: 'Andy Martinez',
    attachment: {
      fileType: 'pdf',
      title: 'File.pdf',
    },
    timestamp: now,
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
  },
  {
    author: 'Andy Martinez',
    message: 'Trying again...',
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
    timestamp: now,
  },
  {
    author: 'Andy Martinez',
    icon: 'error',
    type: CHAT_ITEM_TYPES.EVENT_ERROR,
    message: <React.Fragment>The file sent by <b>Andy Martinez</b> is too large</React.Fragment>,
    timestamp: now,
  },
  {
    message: 'Message type is not supported',
    author: 'Andy Martinez',
    timestamp: now,
    type: CHAT_ITEM_TYPES.MESSAGE_UNSUPPORTED_TYPE,
  },
  {
    author: 'Amber Cann',
    message: 'It might be the cause of the problem',
    type: CHAT_ITEM_TYPES.MESSAGE_DELIVERY_FAILURE,
    meta: 'Message was not delivered because Andy stopped receiving messages.',
    timestamp: now,
    labelResend: 'Resend',
    onResend: Function.prototype,
  },
  {
    author: 'Andy Martinez',
    type: CHAT_ITEM_TYPES.MESSAGE_TYPING,
    meta: 'Customer is typing',
  },
  {
    message: 'I&#x27;m having trouble changing that.',
    author: 'Andy Martinez',
    type: CHAT_ITEM_TYPES.MESSAGE_TYPING,
    meta: 'Customer is typing',
  },
];

const items = [
  startItem,
  {
    author: 'Andy Martinez',
    avatar: 'AM',
    message: 'Hi, my CloudWidget only speaks French',
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
    timestamp: now,
  },
  {
    author: 'Jason Dewar',
    message: `Hi Andy, thank you for contacting Widget Support.
      Can you please tell me what language you are trying to program on your CloudWidget?`,
    type: CHAT_ITEM_TYPES.MESSAGE_OUTBOUND_AGENT,
    timestamp: now,
  },
  {
    author: 'Jason Dewar',
    message: 'Have you tried turning it off and on again?',
    type: CHAT_ITEM_TYPES.MESSAGE_OUTBOUND_AGENT,
    timestamp: now,
  },
  {
    author: 'Andy Martinez',
    avatar: 'AM',
    message: 'yes, of course',
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
    timestamp: now,
  },
  {
    author: 'Jason Dewar',
    message: 'Sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patience!',
    type: CHAT_ITEM_TYPES.MESSAGE_OUTBOUND_AGENT,
    timestamp: now,
  },
  {
    icon: 'change_owner',
    type: CHAT_ITEM_TYPES.EVENT,
    message: <React.Fragment><b>Jason Dewar</b> sent a transfer request to <b>Technical Support Team</b></React.Fragment>,
    meta: 'Andy needs help changing the language on his CloudWidget',
    timestamp: now,
  },
  {
    icon: 'change_owner',
    type: CHAT_ITEM_TYPES.EVENT,
    message: <React.Fragment><b>Technical Support Team</b> accepted the transfer request</React.Fragment>,
    timestamp: now,
  },
  {
    icon: 'change_owner',
    type: CHAT_ITEM_TYPES.EVENT,
    message: <React.Fragment><b>Amber Cann</b> accepted this chat</React.Fragment>,
    timestamp: now,
  },
  {
    author: 'Amber Cann',
    message: 'Hi Andy, my name is Amber and I can help you solve your issue.',
    type: CHAT_ITEM_TYPES.MESSAGE_OUTBOUND,
    timestamp: now,
  },
  {
    author: 'Andy Martinez',
    avatar: 'AM',
    message: 'Nevermind, I speak french.',
    type: CHAT_ITEM_TYPES.MESSAGE_INBOUND,
    timestamp: now,
  },
  endItem,
];

stories
  .add('Default', () => (
    <Chat
      isPastChat={boolean('Is Past Chat', false)}
      items={items}
    />
  ))
  .add('Advanced', () => (
    <Chat
      isPastChat={boolean('Is Past Chat', false)}
      items={advancedItems}
    />
  ));
