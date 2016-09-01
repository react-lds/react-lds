import React from 'react';
import { Link } from 'react-router';
import { Badge } from 'react-lds';

const NavLink = (props, context) => {
  const isActive = context.router.isActive(props.to, false);

  const className =
    isActive ? 'slds-list__item slds-is-selected slds-is-active' : 'slds-list__item';

  const renderLink = () => {
    if (!props.unfinished) {
      return (
        <Link {...props}>
          <span className="slds-media slds-media--center">
            <span className="slds-media__body">{props.label}</span>
          </span>
        </Link>
      );
    }

    return (
      <div className="slds-list__item is-unlinked">
        <span className="slds-media slds-media--center">
          <span className="slds-media__body">
            {props.label}
            <Badge label="N.A" theme="warning" />
          </span>
        </span>
      </div>
    );
  };

  return (
    <li className={className}>
      {renderLink()}
    </li>
  );
};

NavLink.propTypes = {
  to: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  unfinished: React.PropTypes.bool,
};

NavLink.contextTypes = {
  router: React.PropTypes.object,
};

export default NavLink;
