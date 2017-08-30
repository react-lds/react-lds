import React from 'react';
import {
  Input,
  VerticalNavigation,
  VerticalNavigationSection,
  VerticalNavigationItem,
 } from 'react-lds';

const searchInput = (
  <Input
    hideLabel
    id="search"
    label="search"
    placeholder="Quick Search"
    type="text"
    value={undefined}
  />
);

const clickHander = () => { window.alert('A folder!'); };
const fileIcon = { icon: 'open_folder', sprite: 'utility', title: 'Folder' };

const ExampleDefault = () => (
  <VerticalNavigation prependElement={searchInput}>
    <VerticalNavigationSection title="Reports" id="entity-header">
      <VerticalNavigationItem href="#" isActive>Recent</VerticalNavigationItem>
      <VerticalNavigationItem href="#">Created By Me</VerticalNavigationItem>
      <VerticalNavigationItem href="#">Private Reports</VerticalNavigationItem>
      <VerticalNavigationItem href="#" notification={3} notificationLabel="New Items">
        All Reports
      </VerticalNavigationItem>
    </VerticalNavigationSection>
    <VerticalNavigationSection title="Folders" id="folder-header">
      <VerticalNavigationItem icon={fileIcon} onClick={clickHander}>Created By Me</VerticalNavigationItem>
      <VerticalNavigationItem icon={fileIcon} onClick={clickHander}>Shared with me</VerticalNavigationItem>
      <VerticalNavigationItem icon={fileIcon} onClick={clickHander}>All Reports</VerticalNavigationItem>
    </VerticalNavigationSection>
  </VerticalNavigation>
);

export default ExampleDefault;
