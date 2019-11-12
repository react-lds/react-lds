import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/jsx-one-expression-per-line */

export const Meta = ({
  author,
  isPastChat,
  timestamp,
  translations: {
    at,
    said,
  },
}) => (
  <div className="slds-chat-message__meta" aria-label={`${said} ${author} ${at} ${timestamp}`}>
    {isPastChat
      ? <b>{author}</b>
      : author
    } &bull; {timestamp}
  </div>
);

Meta.propTypes = {
  author: PropTypes.string.isRequired,
  isPastChat: PropTypes.bool.isRequired,
  timestamp: PropTypes.string.isRequired,
  translations: PropTypes.shape({
    at: PropTypes.string,
    said: PropTypes.string,
  }).isRequired,
};
