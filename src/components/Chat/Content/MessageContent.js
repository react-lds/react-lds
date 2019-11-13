import React from 'react';
import { PropTypes } from 'prop-types';
import cx from 'classnames';

import { CHAT_ITEM_TYPES } from '../utils';
import { MessageMeta } from './MessageMeta';
import { MessageFile } from './MessageFile';
import { MessageStatus } from './MessageStatus';

/* eslint-disable react/jsx-one-expression-per-line */
export const MessageContent = ({
  attachment,
  author,
  isConsecutive,
  isPastChat,
  message,
  meta,
  type,
  ...rest
}) => {
  const hasAttachment = !!attachment;
  const isLink = hasAttachment && attachment.isLink;
  const isImage = hasAttachment && attachment.fileType === 'image';
  const isCoAuthor = type === CHAT_ITEM_TYPES.MESSAGE_OUTBOUND_AGENT;
  const isDeliveryFailure = type === CHAT_ITEM_TYPES.MESSAGE_DELIVERY_FAILURE;
  const isTyping = type === CHAT_ITEM_TYPES.MESSAGE_TYPING;
  const isUnsupportedType = type === CHAT_ITEM_TYPES.MESSAGE_UNSUPPORTED_TYPE;

  function getMessageSourceCssClass() {
    if (type === CHAT_ITEM_TYPES.MESSAGE_INBOUND || isUnsupportedType || isTyping) return 'inbound';
    if (isCoAuthor) return 'outbound-agent';
    return 'outbound';
  }

  const classNamesMessageText = cx([
    { 'slds-chat-message__text': isLink || !hasAttachment },
    { [`slds-chat-message__text_${getMessageSourceCssClass()}`]: !isPastChat && (isLink || !hasAttachment) },
    { 'slds-chat-message__text_unsupported-type': isUnsupportedType },
    { 'slds-chat-message__text_delivery-failure': isDeliveryFailure },
    { 'slds-chat-message__text_sneak-peek': isTyping && message },
    { 'slds-chat-message__image': !isLink && isImage },
    { [`slds-chat-message__image_${getMessageSourceCssClass()}`]: !isLink && isImage },
    { 'slds-chat-message__file': hasAttachment && !isLink && !isImage },
    { [`slds-chat-message__file_${getMessageSourceCssClass()}`]: hasAttachment && !isLink && !isImage },
  ]);

  if (isTyping) {
    return (
      <div className={classNamesMessageText}>
        <span className="slds-icon-typing slds-is-animated" title={meta}>
          <span className="slds-icon-typing__dot" />
          <span className="slds-icon-typing__dot" />
          <span className="slds-icon-typing__dot" />
          <span className="slds-assistive-text">{meta}</span>
        </span>
        <span aria-hidden="true">{message}</span>
      </div>
    );
  }

  const messageMeta = (
    <MessageMeta
      author={author}
      isConsecutive={isConsecutive}
      isDeliveryFailure={isDeliveryFailure}
      isPastChat={isPastChat}
      meta={meta}
      {...rest}
    />
  );

  const renderMessageStatus = msg => (
    <MessageStatus
      message={msg}
      isDeliveryFailure={isDeliveryFailure}
      isUnsupportedType={isUnsupportedType}
    />
  );

  return (
    <React.Fragment>
      {isPastChat && messageMeta}
      <div className={classNamesMessageText}>
        {hasAttachment && <MessageFile {...attachment} />}
        {isUnsupportedType
          ? renderMessageStatus(message)
          : <span>{message}</span>
        }
        {isDeliveryFailure && (
          <div className="slds-chat-message__text_delivery-failure-reason" role="alert">
            {renderMessageStatus(meta)}
          </div>
        )}
      </div>
      {!isPastChat && messageMeta}
    </React.Fragment>
  );
};
/* eslint-enable react/jsx-one-expression-per-line */

MessageContent.defaultProps = {
  attachment: null,
  message: null,
  meta: null,
};

MessageContent.propTypes = {
  attachment: PropTypes.object,
  author: PropTypes.string.isRequired,
  isConsecutive: PropTypes.bool.isRequired,
  isPastChat: PropTypes.bool.isRequired,
  message: PropTypes.node,
  meta: PropTypes.string,
  type: PropTypes.string.isRequired,
};
