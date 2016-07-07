import React from 'react';

import { Grid, Column } from 'react-lds';

import Masthead from './../../Masthead';
import HeaderIcon from './../../HeaderIcon';
import PageNavigationElement from './../../components/PageNavigationElement';
import PageNavigationMenu from './../../components/PageNavigationMenu';
import PageNavigation from './../../components/PageNavigation';

const Forms = ({ children }) =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Forms" />
    <Grid>
      <Column size-of="1-1" large-size-of="5-6">
        {children}
      </Column>

      <Column size-of="1-1" large-size-of="1-6">
        <PageNavigation>
          <PageNavigationMenu title="Input" to="/forms/input">
            <PageNavigationElement to="/forms/input/default">Default</PageNavigationElement>
            <PageNavigationElement to="/forms/input/icon-left">With icon to the left</PageNavigationElement>
            <PageNavigationElement to="/forms/input/icon-right">With icon to the right</PageNavigationElement>
            <PageNavigationElement to="/forms/input/icon-left-right">
              With icon to the left and right
            </PageNavigationElement>
            <PageNavigationElement to="/forms/input/required">Required</PageNavigationElement>
            <PageNavigationElement to="/forms/input/disabled">Disabled</PageNavigationElement>
            <PageNavigationElement to="/forms/input/error">Error</PageNavigationElement>
            <PageNavigationElement to="forms/input/error-icon">Error with icon</PageNavigationElement>
          </PageNavigationMenu>
          <PageNavigationMenu title="Textarea" to="/forms/textarea" />
          <PageNavigationMenu title="Radio" to="/forms/radio" />
        </PageNavigation>
      </Column>
    </Grid>
  </div>;


Forms.propTypes = {
  children: React.PropTypes.node,
};

export default Forms;
