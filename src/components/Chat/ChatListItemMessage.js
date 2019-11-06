import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CHAT_ITEM_TYPES } from './utils';
import { File } from '../File';
import { Grid } from '../Grid';
import { Button } from '../Button';
import { Icon } from '../Icon';

const ChatListItemMessage = ({
  attachment,
  author,
  avatar,
  labelResend,
  isConsecutive,
  isFirstMessage,
  isPastChat,
  message,
  meta,
  onResend,
  timestamp,
  type,
}) => {
  const hasAvatar = !!avatar;
  const hasAttachment = !!attachment;
  const isLink = hasAttachment && attachment.isLink;
  const isImage = hasAttachment && attachment.type === 'image';
  const isUnsupportedType = type === CHAT_ITEM_TYPES.MESSAGE_UNSUPPORTED_TYPE;
  const isDeliveryFailure = type === CHAT_ITEM_TYPES.MESSAGE_DELIVERY_FAILURE;
  const isTyping = type === CHAT_ITEM_TYPES.MESSAGE_TYPING;
  const isCoAuthor = type === CHAT_ITEM_TYPES.MESSAGE_OUTBOUND_AGENT;

  function getMessageSourceCssClass() {
    if (type === CHAT_ITEM_TYPES.MESSAGE_INBOUND || isUnsupportedType || isTyping) return 'inbound';
    if (isCoAuthor) return 'outbound-agent';
    return 'outbound';
  }

  const classNamesMessage = cx([
    'slds-chat-message',
    { 'slds-chat-message_faux-avatar': hasAvatar && !isFirstMessage },
  ]);
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
  const classNamesStatusIcon = cx([
    { 'slds-icon-text-warning': isUnsupportedType },
    { 'slds-icon-text-error': isDeliveryFailure },
  ]);

  const renderStatusMessage = msg => (
    <React.Fragment>
      <Icon
        className="slds-chat-icon"
        icon={isUnsupportedType ? 'warning' : 'error'}
        svgClassName={classNamesStatusIcon}
        size="x-small"
        sprite="utility"
      />
      <span>{msg}</span>
    </React.Fragment>
  );

  const renderFile = () => {
    const {
      alt,
      src,
      title,
      fileType,
      ...rest
    } = attachment;

    return isLink
      ? (
        <React.Fragment>
          <Icon
            className="slds-chat-icon"
            icon="attachment"
            size="small"
            sprite="doctype"
          />
          <a href={src} title={title}>
            {title}
          </a>
        </React.Fragment>
      ) : (
        <div style={{ width: '18rem' }}>
          <File
            fileType={fileType}
            image={src && {
              alt: alt || title,
              src,
            }}
            title={title}
            {...rest}
          />
        </div>
      );
  };

  /* eslint-disable react/jsx-one-expression-per-line */
  const renderMessageMeta = () => {
    const renderedAuthor = isPastChat
      ? <b>{author}</b>
      : author;

    return (
      <div className="slds-chat-message__meta" aria-label={`${meta} ${timestamp}`}>
        {renderedAuthor} &bull; {timestamp}
      </div>
    );
  };
  /* eslint-enable react/jsx-one-expression-per-line */

  const renderMeta = () => (isDeliveryFailure
    ? (
      <Grid align="spread">
        {renderMessageMeta(author, timestamp)}
        <Button
          className="slds-chat-message__action slds-m-top_xxx-small"
          flavor="bare"
          onClick={onResend}
          title={labelResend}
        >
          <Icon
            className="slds-chat-icon"
            icon="redo"
            size="xx-small"
            sprite="utility"
          />
          {labelResend}
        </Button>
      </Grid>
    )
    : !isConsecutive && renderMessageMeta(author, timestamp)
  );

  const renderMessageBody = () => {
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

    return (
      <React.Fragment>
        {isPastChat && renderMeta()}
        <div className={classNamesMessageText}>
          {!!attachment && renderFile(attachment)}
          {isUnsupportedType
            ? renderStatusMessage(message)
            : <span>{message}</span>
          }
          {isDeliveryFailure && (
            <div className="slds-chat-message__text_delivery-failure-reason" role="alert">
              {renderStatusMessage(meta)}
            </div>
          )}
        </div>
        {!isPastChat && renderMeta()}
      </React.Fragment>
    );
  };

  return (
    <div className={classNamesMessage}>
      {!isPastChat && hasAvatar && isFirstMessage && (
        <span aria-hidden="true" className="slds-avatar slds-avatar_circle slds-chat-avatar">
          <abbr className="slds-avatar__initials slds-avatar__initials_inverse" title={author}>{avatar}</abbr>
        </span>
      )}
      <div className="slds-chat-message__body">
        {renderMessageBody()}
      </div>
    </div>
  );
};

ChatListItemMessage.defaultProps = {
  avatar: null,
  attachment: null,
  labelResend: 'Resend',
  meta: null,
  onResend: Function.prototype,
};

ChatListItemMessage.propTypes = {
  attachment: PropTypes.object,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isConsecutive: PropTypes.bool.isRequired,
  isFirstMessage: PropTypes.bool.isRequired,
  isPastChat: PropTypes.bool.isRequired,
  labelResend: PropTypes.string,
  message: PropTypes.node.isRequired,
  meta: PropTypes.string,
  onResend: PropTypes.func,
  timestamp: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ChatListItemMessage;
