import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/jsx-one-expression-per-line */

export const Meta = ({
  author,
  isPastChat,
  meta,
  timestamp,
  translations: {
    at,
    said,
  },
}) => (
  <div className="slds-chat-message__meta" aria-label={`${said} ${author} ${at} ${timestamp}`}>
    {meta || (
      <>
        {isPastChat
          ? <b>{author}</b>
          : author
        }
        &bull; {timestamp}
      </>
    )}
  </div>
);

Meta.defaultProps = {
  author: null,
  meta: null,
  timestamp: null,
};

Meta.propTypes = {
  author: PropTypes.string,
  isPastChat: PropTypes.bool.isRequired,
  meta: PropTypes.node,
  timestamp: PropTypes.string,
  translations: PropTypes.shape({
    at: PropTypes.string,
    said: PropTypes.string,
  }).isRequired,
};
