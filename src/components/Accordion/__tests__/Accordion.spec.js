import React from 'react';
import { shallow } from 'enzyme';

import Accordion from '../Accordion';

const getAccordion = (props = { sections: [
  {
    summary: 'Section 1',
    id: 'section-1',
    content: <p>I am the first section!</p>,
  },
  {
    summary: 'Section 2',
    id: 'section-2',
    content: <p>I am the second section!</p>,
  },
  {
    summary: 'Section 3',
    id: 'section-3',
    content: <p>I am the third section!</p>,
  },
], }) => shallow(<Accordion {...props} />);

describe('<Accordion />', () => {
  it('renders the first section initially open', () => {
    const mounted = getAccordion();

    expect(mounted.find('ul > li').find('section').first().hasClass('slds-is-open')).toBeTruthy();
    expect(mounted.find('#section-1').first().hasClass('slds-is-open')).toBeTruthy();
  });

  it('renders the other sections initially closed', () => {
    const mounted = getAccordion();

    expect(mounted.find('ul > li').find('section').at(1).hasClass('slds-is-open')).toBeFalsy();
  });

  it('defaults to default classes', () => {
    const mounted = getAccordion();

    const ulItem = mounted.find('ul');
    const liItem = mounted.find('ul > li').first();
    const sectionItem = liItem.find('section');
    const SummaryDivItem = sectionItem.find('div').first();
    const h3Item = SummaryDivItem.find('h3');
    expect(ulItem.hasClass('slds-accordion')).toBeTruthy();
    expect(liItem.hasClass('slds-accordion__list-item')).toBeTruthy();
    expect(sectionItem.hasClass('slds-accordion__section')).toBeTruthy();
    expect(SummaryDivItem.hasClass('slds-accordion__summary')).toBeTruthy();
    expect(h3Item.hasClass('slds-text-heading_small slds-accordion__summary-heading')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    const mounted = getAccordion({
      className: 'foo',
      'data-test': 'bar',
      sections: [
        {
          summary: 'Section 1',
          id: 'section-1',
          content: <p>I am the first section!</p>,
        },
        {
          summary: 'Section 2',
          id: 'section-2',
          content: <p>I am the second section!</p>,
        },
      ],
    });

    expect(mounted.find('.slds-accordion').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-accordion').prop('data-test')).toEqual('bar');
  });

  it('takes styled prop and does something', () => {
    const mounted = getAccordion({
      sections: [
        {
          summary: 'Section 1',
          id: 'section-1',
          content: <p>I am the first section!</p>,
        },
        {
          summary: 'Section 2',
          id: 'section-2',
          content: <p>I am the second section!</p>,
        },
      ],
      styled: true,
    });

    expect(mounted.find('div').first().hasClass('slds-card')).toBeTruthy();
  });

  it('takes defaultOpen prop and does something', () => {
    const mounted = getAccordion({
      sections: [
        {
          summary: 'Section 1',
          id: 'section-1',
          content: <p>I am the first section!</p>,
        },
        {
          summary: 'Section 2',
          id: 'section-2',
          content: <p>I am the second section!</p>,
        },
      ],
      defaultOpen: 'section-2',
    });

    expect(mounted.find('#section-2').first().hasClass('slds-is-open')).toBeTruthy();
    expect(mounted.find('#section-1').first().hasClass('slds-is-open')).toBeFalsy();
  });
});
