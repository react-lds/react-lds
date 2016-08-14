import React from 'react';
import { Link } from 'react-router';
import { IconSVG } from 'react-lds';

const PageNavigationMenu = ({ to, children, title }, { router }) => {
  const isActive = router.isActive(to, false);
  const classes = isActive ? 'list__name site-states-parent slds-is-open slds-is-selected' : 'list__name';
  const icon = children ?
    <IconSVG
      className="icon__svg"
      sprite="utility"
      icon="down"
      size="x-small"
      sldsClasses={['align-middle', 'col--bump-left', 'icon-text-default']}
    /> :
    '';

  return (
    <li className={classes}>
      <Link to={to}>{title} {icon}</Link>
      <ul className="site-states slds-list--vertical">
        {children}
      </ul>
    </li>
  );
};

PageNavigationMenu.propTypes = {
  title: React.PropTypes.string,
  /**
   * Instances of PageNavigationElement
   */
  children: React.PropTypes.node,
  to: React.PropTypes.string,
};

PageNavigationMenu.contextTypes = {
  router: React.PropTypes.object,
};

export default PageNavigationMenu;
