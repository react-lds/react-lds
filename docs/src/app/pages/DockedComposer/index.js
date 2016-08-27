import React from 'react';
import { Grid, Column } from 'react-lds';

import { PageNavigation, PageNavigationElement, PageNavigationMenu } from '../../components/PageNavigation';
import HeaderIcon from '../../components/HeaderIcon';
import Masthead from '../../components/MastHead';

const DockedComposer = ({ children }) =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Docked Composer" />
    <Grid>
      <Column sizeOf="1-1" large-sizeOf="5-6">
        {children}
      </Column>

      <Column sizeOf="1-1" large-sizeOf="1-6">
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
