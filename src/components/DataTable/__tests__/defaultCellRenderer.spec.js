import { shallow } from 'enzyme';

import defaultCellRenderer from '../defaultCellRenderer';

describe('<DataCell />', () => {
  const defaultProps = {
    dataKey: 'foo',
    cellData: 'bar',
  };

  const getComponent = props => shallow(defaultCellRenderer({ ...defaultProps, ...props }));

  it('renders as a td by default', () => {
    expect(getComponent().find('td').length).toBe(1);
  });

  it('renders a title', () => {
    const component = getComponent({ cellData: 'Title' });
    expect(component.find('div').prop('title')).toEqual('Title');
  });

  it('renders the value as string', () => {
    const component = getComponent({ cellData: 'Text' });
    expect(component.find('td').text()).toEqual('Text');
  });
});
