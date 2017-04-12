import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

function createLocationDescriptor(to, { query, hash, state }) {
  if (query || hash || state) {
    return { pathname: to, query, hash, state };
  }

  return to;
}

const PageNavigationElement = (props, { router }) => {
  const { to, query, hash, state } = props;
  const location = createLocationDescriptor(to, { query, hash, state });
  let classNames = 'list__name';
  if (router.isActive(location, true)) {
    classNames = `${classNames} slds-is-active`;
  }

  return (
    <li className={classNames}>
      <Link {...props} />
    </li>
  );
};

PageNavigationElement.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  query: PropTypes.object,
  hash: PropTypes.string,
  state: PropTypes.object,
};

PageNavigationElement.contextTypes = {
  router: PropTypes.object,
};

export default PageNavigationElement;
