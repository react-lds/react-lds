import React from 'react'
import { Link } from 'react-router'

const NavLink = (props, context) => {
  let isActive = context.router.isActive(props.to, true),
      className = isActive ? "slds-list__item slds-is-selected slds-is-active" : "slds-list__item"

  return (
    <li className={className}>
      <Link {...props}>
        <span className="slds-media slds-media--center">
          <span className="slds-media__body">{props.label}</span>
        </span>
      </Link>
    </li>
  );
};

NavLink.contextTypes = {
  router: React.PropTypes.object
}

export default NavLink;
