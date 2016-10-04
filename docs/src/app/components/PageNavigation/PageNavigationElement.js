import React from 'react';

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
  to: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]).isRequired,
  query: React.PropTypes.object,
  hash: React.PropTypes.string,
  state: React.PropTypes.object,
};

PageNavigationElement.contextTypes = {
  router: React.PropTypes.object,
};

export default PageNavigationElement;
