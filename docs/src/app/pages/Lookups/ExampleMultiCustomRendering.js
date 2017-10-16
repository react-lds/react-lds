import React from 'react';
import { Icon, Lookup } from 'react-lds';

const initialSelection = [
  {
    id: '1',
    icon: 'add_contact',
    label: 'Add contact',
    objectType: 'custom',
  },
];

const exampleData = [
  {
    id: '1',
    icon: 'add_contact',
    label: 'Add contact',
    objectType: 'custom',
  },
  {
    id: '2',
    icon: 'announcement',
    label: 'Announcement',
    objectType: 'custom',
  },
  {
    id: '3',
    icon: 'approval',
    label: 'Approval',
    objectType: 'custom',
  },
];

const ExampleMultiCustomRendering = () => {
  const loadFunction = (searchTerm) => {
    // eslint-disable-next-line no-console
    console.log('load called');
    return exampleData.filter(data => data.label.startsWith(searchTerm));
  };

  const onChange = (selectedItems) => {
    // eslint-disable-next-line no-console
    console.log(selectedItems);
  };

  return (
    <Lookup
      id="lookup-multi"
      initialSelection={initialSelection}
      inputLabel="Icons"
      listLabel="All icons"
      load={loadFunction}
      multi
      onChange={onChange}
      placeholder="Search Icons"
      renderSelection={(item, { onClose }) =>
        <Icon
          key={item.id}
          icon={item.icon}
          sprite="action"
          onClick={onClose}
        />
      }
    />
  );
};

export default ExampleMultiCustomRendering;
