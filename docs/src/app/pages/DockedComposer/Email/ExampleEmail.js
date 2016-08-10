import React from 'react';
import { Email } from 'react-lds';

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

const loadRecipients = (searchTerm) => exampleData.filter((elem) => elem.label.startsWith(searchTerm));

class ExampleEmail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialContent: '<b>This is</b> the initial value',
      to: initialRecipients,
      attachments: [
        {
          icon: 'pdf',
          name: 'Listing 1',
        },
        {
          icon: 'pdf',
          name: 'Listing 2',
        },
      ],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState(value);
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
          id="important-email"
        />
        <div style={{ clear: 'both' }} />
        <h2 className="slds-m-top--medium">Current Value:</h2>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default ExampleEmail;
