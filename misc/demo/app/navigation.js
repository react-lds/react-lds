import React from "react";
import { Link } from 'react-router'

import NavLink from './navLink'

require('./navigation.scss');

const Navigation = (props) => {
  return (
    <div className="site-navigation">
      <nav id="navigation" role="navigation" tabindex="-1">
        <ul class="slds-list--vertical slds-has-block-links">
          <NavLink to="activity-timeline" label="Activity Timeline" />
          <NavLink to="badges" label="Badges" />
          <NavLink to="breadcrumbs" label="Breadcrumbs" />
          <NavLink to="buttons" label="Buttons" />
          <NavLink to="button-groups" label="Button Groups" />
          <NavLink to="cards" label="Cards" />
          <NavLink to="data-tables" label="Data Tables" />
          <NavLink to="datepickers" label="Datepickers" />
          <NavLink to="docked-composer" label="Docked Composer" />
          <NavLink to="feeds" label="Feeds" />
          <NavLink to="forms" label="Forms" />
          <NavLink to="grid-system" label="Grid System" />
          <NavLink to="icons" label="Icons" />
          <NavLink to="images" label="Images" />
          <NavLink to="lookups" label="Lookups" />
          <NavLink to="media-objects" label="Media Objects" />
          <NavLink to="menus" label="Menus" />
          <NavLink to="modals" label="Modals" />
          <NavLink to="notifications" label="Notifications" />
          <NavLink to="/page-headers" label="Page Headers" />
          <NavLink to="pills" label="Pills" />
          <NavLink to="process" label="Process" />
          <NavLink to="popovers" label="Popovers" />
          <NavLink to="publishers" label="Publishers" />
          <NavLink to="spinners" label="Spinners" />
          <NavLink to="tabs" label="Tabs" />
          <NavLink to="tiles" label="Tiles" />
          <NavLink to="trees" label="Trees" />
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
