import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Column } from 'react-lds';

import { PageNavigation, PageNavigationElement, PageNavigationMenu } from '../../components/PageNavigation';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';

const Forms = ({ children }) =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Forms" />
    <Grid>
      <Column sizeOf="1-1" large-sizeOf="5-6">
        {children}
      </Column>

      <Column sizeOf="1-1" large-sizeOf="1-6">
        <PageNavigation>
          <PageNavigationMenu title="Input" to="/forms/input">
            <PageNavigationElement to="/forms/input/default">Default</PageNavigationElement>
            <PageNavigationElement to="/forms/input/icon-left">With icon to the left</PageNavigationElement>
            <PageNavigationElement to="/forms/input/icon-right">With icon to the right</PageNavigationElement>
            <PageNavigationElement to="/forms/input/icon-left-right">
              With icon to the left and right
            </PageNavigationElement>
            <PageNavigationElement to="/forms/input/icon-right-spinner">
              With icon and spinner to the right
            </PageNavigationElement>
            <PageNavigationElement to="/forms/input/required">Required</PageNavigationElement>
            <PageNavigationElement to="/forms/input/disabled">Disabled</PageNavigationElement>
            <PageNavigationElement to="/forms/input/error">Error</PageNavigationElement>
            <PageNavigationElement to="forms/input/error-icon">Error with icon</PageNavigationElement>
          </PageNavigationMenu>
          <PageNavigationMenu title="Textarea" to="/forms/textarea">
            <PageNavigationElement to="/forms/textarea/default">Default</PageNavigationElement>
            <PageNavigationElement to="/forms/textarea/required">Required</PageNavigationElement>
            <PageNavigationElement to="/forms/textarea/error">Error</PageNavigationElement>
            <PageNavigationElement to="/forms/textarea/disabled">Disabled</PageNavigationElement>
            <PageNavigationElement to="/forms/textarea/readonly">Read-Only</PageNavigationElement>
          </PageNavigationMenu>
          <PageNavigationMenu title="Radio" to="/forms/radio" />
          <PageNavigationMenu title="Select" to="/forms/select">
            <PageNavigationElement to="/forms/select/default">Default</PageNavigationElement>
            <PageNavigationElement to="/forms/select/required">Required</PageNavigationElement>
            <PageNavigationElement to="/forms/select/error">Error</PageNavigationElement>
            <PageNavigationElement to="/forms/select/disabled">Disabled</PageNavigationElement>
            <PageNavigationElement to="/forms/select/multiple">Multiple Selection</PageNavigationElement>
          </PageNavigationMenu>
          <PageNavigationMenu title="Picklist" to="/forms/picklist">
            <PageNavigationElement to="/forms/picklist/default">Default</PageNavigationElement>
          </PageNavigationMenu>
          <PageNavigationMenu title="Checkbox" to="/forms/checkbox">
            <PageNavigationElement to="/forms/checkbox/default">Default</PageNavigationElement>
            <PageNavigationElement to="/forms/checkbox/required">Required</PageNavigationElement>
            <PageNavigationElement to="/forms/checkbox/error">Error</PageNavigationElement>
            <PageNavigationElement to="/forms/checkbox/disabled">Disabled</PageNavigationElement>
            <PageNavigationElement to="/forms/checkbox/group">Group</PageNavigationElement>
            <PageNavigationElement to="/forms/checkbox/group_error">Group with Error</PageNavigationElement>
            <PageNavigationElement to="/forms/checkbox/group_disabled">Group Disabled</PageNavigationElement>
          </PageNavigationMenu>
        </PageNavigation>
      </Column>
    </Grid>
  </div>;


Forms.propTypes = {
  children: PropTypes.node,
};

export default Forms;
