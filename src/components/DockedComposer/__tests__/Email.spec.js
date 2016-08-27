import React from 'react';
import { mount } from 'enzyme';

import Email from './../Email/index';

jest.unmock('./../Email/index');
jest.mock('./../Email/Rte', () => () => <p>Mocked out RTE</p>);

describe('<Email />', () => {
  let props = {};
  let mounted = null;

  const context = { assetBasePath: '/assets', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      header: 'New Telegraph',
      value: {
        initialContent: '<p>Hallo</p>',
        to: [
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
        ],
        cc: [
          {
            id: '3',
            label: 'Peter Griffin',
            meta: 'petergriffin@familyguy.com',
            objectType: 'contact',
          },
        ],
        bcc: [
          {
            id: '4',
            label: 'Spider Man',
            meta: 'spiderman@marvel.com',
            objectType: 'contact',
          },
        ],
        subject: 'hello my friend',
        attachments: [
          {
            icon: 'pdf',
            name: 'Nice PDF Document',
          },
        ],
      },
      onChange: jest.fn(),
      id: '1337',
      footerButtons: [
        {
          icon: 'delete',
          key: 'del',
          onClick: jest.fn(),
        },
        {
          icon: 'attachment',
          key: 'attach',
          onClick: jest.fn(),
        },
      ],
      onSend: jest.fn(),
      sendLabel: 'Throw away',
      loadRecipients: jest.fn(),
      loadRecipientsLabel: 'Load it',
      subjectPlaceholder: 'Enter something nice!',
    };

    mounted = mount(
      <Email {...props} />, options
    );
  });

  it('renders header', () => {
    expect(mounted.find('header').text()).toContain(props.header);
  });

  it('renders subject', () => {
    const input = mounted.find('#1337-subject');

    expect(input.prop('value')).toEqual(props.value.subject);
    expect(input.prop('placeholder')).toEqual(props.subjectPlaceholder);
  });

  it('passes `to` recipients into lookup component', () => {
    const toLookup = mounted.find('Lookup').first();

    expect(toLookup.prop('initialSelection')).toEqual(props.value.to);
    expect(toLookup.prop('load')).toEqual(props.loadRecipients);
    expect(toLookup.prop('listLabel')).toEqual(props.loadRecipientsLabel);
  });

  it('passes `cc` recipients into lookup component', () => {
    const toLookup = mounted.find('Lookup').at(1);

    expect(toLookup.prop('initialSelection')).toEqual(props.value.cc);
    expect(toLookup.prop('load')).toEqual(props.loadRecipients);
    expect(toLookup.prop('listLabel')).toEqual(props.loadRecipientsLabel);
  });

  it('passes `bcc` recipients into lookup component', () => {
    const toLookup = mounted.find('Lookup').at(2);

    expect(toLookup.prop('initialSelection')).toEqual(props.value.bcc);
    expect(toLookup.prop('load')).toEqual(props.loadRecipients);
    expect(toLookup.prop('listLabel')).toEqual(props.loadRecipientsLabel);
  });

  it('renders attachments', () => {
    const attachments = mounted.find('ul > li MediaObject');
    expect(attachments.length).toEqual(1);
    expect(attachments.text()).toEqual(props.value.attachments[0].name);
  });

  describe('footer', () => {
    let footerButtons = null;

    beforeEach(() => {
      footerButtons = mounted.find('footer > div Button');
    });

    it('renders footerButtons', () => {
      props.footerButtons.forEach((button, key) => {
        const elem = footerButtons.at(key);
        expect(elem.prop('onClick')).toEqual(button.onClick);
      });
    });

    it('binds onSend callback', () => {
      const elem = footerButtons.last();
      expect(elem.prop('onClick')).toEqual(props.onSend);
    });

    it('renders sendLabel', () => {
      const elem = footerButtons.last();
      expect(elem.text()).toEqual(props.sendLabel);
    });
  });
});
