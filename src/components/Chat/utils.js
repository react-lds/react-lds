import React from 'react';

export const CHAT_ITEM_TYPES = {
  EVENT_ERROR: 'event_error',
  EVENT_START: 'event_start',
  EVENT_STOP: 'event_stop',
  EVENT: 'event',
  MESSAGE_DELIVERY_FAILURE: 'message_delivery_failure',
  MESSAGE_INBOUND: 'message_inbound',
  MESSAGE_OUTBOUND_AGENT: 'message_outbound_agent',
  MESSAGE_OUTBOUND: 'message_outbound',
  MESSAGE_TYPING: 'message_typing',
  MESSAGE_UNSUPPORTED_TYPE: 'message_unsupported_type',
};

/* eslint-disable react/jsx-one-expression-per-line */
export function renderMeta(message, timestamp) {
  return <p>{message} &bull; {timestamp}</p>;
}
/* eslint-enable react/jsx-one-expression-per-line */
