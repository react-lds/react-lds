import React from 'react';

import { Navigation, NavigationList, NavigationListElement } from 'react-lds';

const ExampleVerticalInverse = () =>
  <Navigation vertical vertical-inverse>
    <NavigationList title="Reports" id="reports-headline">
      <NavigationListElement active>
        <a>Recent</a>
      </NavigationListElement>
      <NavigationListElement>
        <a>Created by Me</a>
      </NavigationListElement>
      <NavigationListElement>
        <a>Private Reports</a>
      </NavigationListElement>
      <NavigationListElement>
        <a>Public Reports</a>
      </NavigationListElement>
      <NavigationListElement>
        <a>All Reports</a>
      </NavigationListElement>
    </NavigationList>
    <NavigationList title="Folders" id="folders-headline">
      <NavigationListElement>
        <a>Created by Me</a>
      </NavigationListElement>
      <NavigationListElement>
        <a>Shared with Me</a>
      </NavigationListElement>
      <NavigationListElement>
        <a>All Reports</a>
      </NavigationListElement>
    </NavigationList>
  </Navigation>;

export default ExampleVerticalInverse;
