import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from '../ButtonGroup';
import { Button } from '../../Button/Button';

jest.unmock('../ButtonGroup');
jest.unmock('../../Button/Button');

describe('<ButtonGroup />', () => {
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  it('renders the correct markup', () => {
    const child = <Button title="foobar" neutral />;
    const mounted = shallow(<ButtonGroup>{child}</ButtonGroup>, options);

    expect(mounted.hasClass('slds-button-group')).toBeTruthy();
    expect(mounted.contains(child)).toBeTruthy();
  });
});
