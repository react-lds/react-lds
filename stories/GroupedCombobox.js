import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import {
  GroupedCombobox,
  GroupedComboboxContainer,
} from '../src';

const stories = storiesOf('GroupedCombobox', module);

const ACCOUNTS = {
  SOYLENT: {
    id: 'soylent',
    label: 'Soylent Corporation',
    icon: {
      sprite: 'standard',
      icon: 'account'
    },
  },
  SPECTRE: {
    id: 'spectre',
    label: 'SPECTRE',
    icon: {
      sprite: 'standard',
      icon: 'account'
    },
  },
  TYRELL: {
    id: 'tyrell',
    label: 'Tyrell Corporation',
    icon: {
      sprite: 'standard',
      icon: 'account'
    },
  },
};

const CONTACTS = {
  TONY: {
    id: 'tony',
    label: 'Tony Stark',
    icon: {
      sprite: 'standard',
      icon: 'contact'
    },
  },
  CAROL: {
    id: 'carol',
    label: 'Carol Danvers',
    icon: {
      sprite: 'standard',
      icon: 'contact'
    },
  }
}

const ITEMS = {
  CONTACTS: [CONTACTS.CAROL, CONTACTS.TONY],
  CONTACTS_SELECTED: [CONTACTS.CAROL],
  ACCOUNTS: [ACCOUNTS.SOYLENT, ACCOUNTS.SPECTRE, ACCOUNTS.TYRELL],
  ACCOUNTS_SELECTED: [ACCOUNTS.SOYLENT, ACCOUNTS.TYRELL],
};

const SWITCHER_ITEMS = [{
  id: 'accounts',
  label: 'Accounts'
}, {
  id: 'contacts',
  label: 'Contacts',
}];

class GroupedComboboxDemo extends Component {
  state = {
    isSwitcherOpen: false,
    switcherItems: [...SWITCHER_ITEMS],
    selectedSwitcherItems: [SWITCHER_ITEMS[0]],
  }

  onToggle = (val) => {
    this.setState({ isSwitcherOpen: val });
  }

  onSelect = (id) => {
    this.setState({
      selectedSwitcherItems: [SWITCHER_ITEMS.find(x => x.id === id)],
    });
  }

  render() {
    const {
      isSwitcherOpen,
      selectedSwitcherItems,
      switcherItems,
    } = this.state;

    const sharedComboboxProps = {
      isExpanded: false,
      onExpand: () => {},
      onToggle: () => {},
      onSelect: () => {},
    };

    return (
      <GroupedComboboxContainer
        isOpen={isSwitcherOpen}
        items={switcherItems}
        label="Select Recipients"
        selectedItems={selectedSwitcherItems}
        onSelect={this.onSelect}
        onToggle={this.onToggle}
      >
        {({
          activeId,
          comboboxProps,
        }) => (
          <Fragment>
            {activeId === 'accounts' && (
            <GroupedCombobox
              {...sharedComboboxProps}
              {...comboboxProps}
              key="accounts"
              id="accounts"
              items={ITEMS.ACCOUNTS}
              label="Select Recipients"
              placeholder="Search Accounts..."
              selectedItems={ITEMS.ACCOUNTS_SELECTED}
            />
            )}
            {activeId === 'contacts' && (
            <GroupedCombobox
              {...sharedComboboxProps}
              {...comboboxProps}
              key="contacts"
              id="contacts"
              items={ITEMS.CONTACTS}
              placeholder="Search Contacts..."
              selectedItems={ITEMS.CONTACTS_SELECTED}
            />
            )}
          </Fragment>
        )}
      </GroupedComboboxContainer>
    );
  }
}

stories
  .add('Default', () => (
    <GroupedComboboxDemo />
  ));
