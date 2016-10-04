import React from 'react';
import { Email, Lookup, Select } from 'react-lds';

const footerButtons = [
  {
    icon: 'link',
    key: 'link_icon',
    // eslint-disable-next-line no-alert
    onClick: () => alert('foo'),
  },
  {
    icon: 'insert_template',
    key: 'insert_template_icon',
  },
  {
    icon: 'insert_tag_field',
    key: 'insert_tag_field_icon',
  },
  {
    icon: 'preview',
    key: 'preview_icon',
  },
  {
    icon: 'delete',
    key: 'delete_icon',
  },
];

const initialRecipients = [
  {
    id: '1',
    label: 'Jimmy Salesforce',
    meta: 'jimmy@salesforce.com',
    objectType: 'contact',
  },
];

const exampleData = [
  {
    id: '1',
    label: 'Jimmy Salesforce',
    meta: 'jimmy@salesforce.com',
    objectType: 'contact',
  },
  {
    id: '2',
    label: 'Tom Propertybase',
    meta: 'tom@propertybase.com',
    objectType: 'contact',
  },
  {
    id: '3',
    label: 'Peter Griffin',
    meta: 'petergriffin@maericandad.com',
    objectType: 'contact',
  },
  {
    id: '4',
    label: 'Spider Man',
    meta: 'spiderman@marvel.com',
    objectType: 'contact',
  },
  {
    id: '5',
    label: 'Montgomery Burns',
    meta: 'mrburns@simposons.com',
    objectType: 'contact',
  },
  {
    id: '6',
    label: 'Darth Vader',
    meta: 'vader@deathstar.com',
    objectType: 'contact',
  },
  {
    id: '7',
    label: 'Mikey Mouse',
    meta: 'mikey@disney.com',
    objectType: 'contact',
  },
];

const listings = [
  {
    id: '66',
    label: 'Nice Apartment',
    meta: 'Munic, Germany',
    objectType: 'custom85',
  },
  {
    id: '67',
    label: 'Ugly Apartment',
    meta: 'Cologne, Germany',
    objectType: 'custom85',
  },
];

const loadRecipients = searchTerm => exampleData.filter(elem => elem.label.startsWith(searchTerm));
const loadListings = searchTerm => listings.filter(elem => elem.label.startsWith(searchTerm));
const selectSomething = (
  <form className="slds-form--inline">
    <Select label="Selct" id="select-something">
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
    </Select>
  </form>
);

class ExampleEmailExtended extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialContent: '<b>This is</b> the initial value',
      to: initialRecipients,
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeListings = this.onChangeListings.bind(this);
  }

  onChange(value) {
    this.setState(value);
  }

  onChangeListings(newListings) {
    this.setState({ listings: newListings });
  }

  renderListingLookup() {
    return (
      <Lookup
        emailLayout
        multi
        loadOnFocus
        loadOnMount
        id="listings-lookup"
        listLabel="Search for listings"
        inputLabel="Listings"
        load={loadListings}
        onChange={this.onChangeListings}
      />
    );
  }

  render() {
    return (
      <div>
        <Email
          value={this.state}
          onChange={this.onChange}
          footerButtons={footerButtons}
          loadRecipients={loadRecipients}
          loadRecipientsLabel="Search for Contacts"
          additionalLookup={this.renderListingLookup()}
          toolbarButtonGroupRight={selectSomething}
          id="important-email"
        />
        <div style={{ clear: 'both' }} />
        <h2 className="slds-m-top--medium">Current Value:</h2>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default ExampleEmailExtended;
