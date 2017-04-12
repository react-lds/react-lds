import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { IconSVG, prefixClasses as prefix } from 'react-lds';

const PageNavigationMenu = ({ to, children, title }, { cssPrefix, router }) => {
  const isActive = router.isActive(to, false);
  const classes = isActive ? 'list__name site-states-parent slds-is-open slds-is-selected' : 'list__name';
  const icon = children ?
    <IconSVG
      className={prefix(cssPrefix, ['align-middle', 'col--bump-left', 'icon-text-default'], 'icon__svg')}
      sprite="utility"
      icon="down"
      size="x-small"
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
  title: PropTypes.string,
  /**
   * Instances of PageNavigationElement
   */
  children: PropTypes.node,
  to: PropTypes.string,
};

PageNavigationMenu.contextTypes = {
  cssPrefix: PropTypes.string,
  router: PropTypes.object,
};

export default PageNavigationMenu;
