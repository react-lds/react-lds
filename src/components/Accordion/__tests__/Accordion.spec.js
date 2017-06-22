import React from 'react';
import { shallow } from 'enzyme';

import Accordion from '../Accordion';

const getAccordion = (props = {}) => shallow(<Accordion {...props} />);

describe('<Accordion />', () => {
  it('renders the first section initially active', () => {
    const mounted = getAccordion({ sections: [
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
    ] });
    expect(mounted.find('ul > li').find('section').first().hasClass('slds-is-open')).toBeTruthy();
    expect(mounted.find('#section-1').first().hasClass('slds-is-open')).toBeTruthy();
  });
});
