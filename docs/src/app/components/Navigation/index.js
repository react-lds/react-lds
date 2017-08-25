import React from 'react';

import NavLink from './NavLink';

require('./index.scss');

const Navigation = () =>
  <div className="site-navigation">
    <nav id="navigation" role="navigation" tabIndex="-1">
      <ul className="slds-list--vertical slds-has-block-links">
        <NavLink to="/" label="Usage" />
        <NavLink unfinished to="/activity-timeline" label="Activity Timeline" />
        <NavLink to="/accordions" label="Accordions" />
        <NavLink to="/badges" label="Badges" />
        <NavLink to="/breadcrumbs" label="Breadcrumbs" />
        <NavLink to="/buttons" label="Buttons" />
        <NavLink to="/button-groups" label="Button Groups" />
        <NavLink to="/cards" label="Cards" />
        <NavLink to="/data-tables" label="Data Tables" />
        <NavLink to="/datepickers" label="Datepickers" />
        <NavLink to="/expandable-sections" label="Expandable Sections" />
        <NavLink unfinished to="/feeds" label="Feeds" />
        <NavLink to="/files" label="Files" />
        <NavLink to="/forms" label="Forms" />
        <NavLink to="/grid-system" label="Grid System" />
        <NavLink to="/icons" label="Icons" />
        <NavLink to="/images" label="Images" />
        <NavLink to="/lookups" label="Lookups" />
        <NavLink to="/media-objects" label="Media Objects" />
        <NavLink to="/menus" label="Menus" />
        <NavLink to="/modals" label="Modals" />
        <NavLink to="/navigation" label="Navigation" />
        <NavLink to="/notifications" label="Notifications" />
        <NavLink to="/page-headers" label="Page Headers" />
        <NavLink to="/pills" label="Pills" />
        <NavLink unfinished to="/process" label="Process" />
        <NavLink to="/popovers" label="Popovers" />
        <NavLink to="/progressbar" label="Progress Bar" />
        <NavLink unfinished to="/publishers" label="Publishers" />
        <NavLink to="/spinners" label="Spinners" />
        <NavLink to="/stateful-buttons" label="Stateful Buttons" />
        <NavLink to="/tabs" label="Tabs" />
        <NavLink unfinished to="/tiles" label="Tiles" />
        <NavLink unfinished to="/trees" label="Trees" />
      </ul>
    </nav>
  </div>;

export default Navigation;
