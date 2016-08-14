import React from 'react';
import { Grid, Column } from 'react-lds';

import Masthead from '../../components/MastHead';
import HeaderIcon from '../../components/HeaderIcon';
import { PageNavigation, PageNavigationElement, PageNavigationMenu } from '../../components/PageNavigation';


const DockedComposer = ({ children }) =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Docked Composer" />
    <Grid>
      <Column size-of="1-1" large-size-of="5-6">
        {children}
      </Column>

      <Column size-of="1-1" large-size-of="1-6">
        <PageNavigation>
          <PageNavigationMenu title="Email" to="/docked-composer/email">
            <PageNavigationElement to="/docked-composer/email/default">Default</PageNavigationElement>
            <PageNavigationElement to="/docked-composer/email/extended">Extended Toolbar/Fields</PageNavigationElement>
          </PageNavigationMenu>
        </PageNavigation>
      </Column>
    </Grid>
  </div>;

DockedComposer.propTypes = {
  children: React.PropTypes.node,
};

export default DockedComposer;
