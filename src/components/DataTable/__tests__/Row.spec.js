jest.unmock('../Row');

import React from 'react';
import { shallow } from 'enzyme';
import { Row } from '../Row';

describe('<Row />', () => {
  let mounted = null;


  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    const frag = table.appendChild(tbody);
    options.attachTo = frag;
    mounted = shallow(<Row />, options);
  });

  it('renders children', () => {
    const child = <td className="foo" />;
    mounted.setProps({ children: child });
    expect(mounted.find('tr').contains(child)).toBeTruthy();
  });

  it('adds a class for header rows', () => {
    mounted.setProps({ head: true });
    expect(mounted.find('tr').hasClass('slds-text-heading--label')).toBeTruthy();
  });
});
