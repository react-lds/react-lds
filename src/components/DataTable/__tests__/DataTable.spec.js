import React from 'react';
import { mount } from 'enzyme';

import { DataTable, DataTableColumn, DataTableSelectColumn } from '..';
import { Row } from '../../Table';

describe('<DataTable />', () => {
  const getComponent = (props, selectable, nameProps, ageProps) => {
    const defaultProps = {
      data: [
        { name: 'Hans Wurst', age: 25 },
        { name: 'John Wayne', age: 40 },
      ],
    };
    return mount(
      <DataTable {...defaultProps} {...props}>
        {selectable && <DataTableSelectColumn dataKey="select" />}
        <DataTableColumn dataKey="name" title="Name" {...nameProps} />
        <DataTableColumn dataKey="age" title="Age" {...ageProps} />
      </DataTable>
    );
  };

  it('renders a table', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-table')).toHaveLength(1);
  });

  it('renders every row including header', () => {
    const mounted = getComponent();
    const rows = mounted.find('tr');

    expect(rows).toHaveLength(3);

    expect(rows.at(0).find('th').at(0).text()).toBe('Name');
    expect(rows.at(0).find('th').at(1).text()).toBe('Age');

    expect(rows.at(1).find('td').at(0).text()).toBe('Hans Wurst');
    expect(rows.at(1).find('td').at(1).text()).toBe('25');

    expect(rows.at(2).find('td').at(0).text()).toBe('John Wayne');
    expect(rows.at(2).find('td').at(1).text()).toBe('40');
  });

  it('supports a single column', () => {
    const mounted = mount(
      <DataTable data={[{ name: 'Foo' }]}>
        <DataTableColumn dataKey="name" />
      </DataTable>
    );
    expect(mounted.find('.slds-table')).toHaveLength(1);
  });

  it('applies className and rest-properties', () => {
    const mounted = getComponent();
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('table').hasClass('foo')).toBeTruthy();
    expect(mounted.find('table').prop('data-test')).toEqual('bar');
  });

  it('supports a custom row renderer', () => {
    const rowRenderer = ({ cells, rowId }) => <tr key={rowId} data-foo={rowId}>{cells}</tr>; // eslint-disable-line
    const mounted = getComponent({ rowRenderer });
    expect(mounted.find('tr[data-foo=0]')).toHaveLength(1);
  });

  it('supports sort indicators', () => {
    const mounted = getComponent({ sortBy: 'name' });

    expect(mounted.find('Cell').at(0).hasClass('slds-is-sorted')).toBe(true);
    expect(mounted.find('Cell').at(1).hasClass('slds-is-sorted')).toBe(false);

    mounted.setProps({ sortBy: 'age' });

    expect(mounted.find('Cell').at(0).hasClass('slds-is-sorted')).toBe(false);
    expect(mounted.find('Cell').at(1).hasClass('slds-is-sorted')).toBe(true);
  });

  it('supports initial selection', () => {
    const mounted = getComponent({ selection: [1] }, true);

    expect(mounted.find('CheckboxRaw')).toHaveLength(3);
    expect(mounted.find('CheckboxRaw').at(0).prop('checked')).toBe(false);
    expect(mounted.find('CheckboxRaw').at(1).prop('checked')).toBe(false);
    expect(mounted.find('CheckboxRaw').at(2).prop('checked')).toBe(true);
  });

  it('can render a custom message if the data array is empty', () => {
    const mounted = getComponent({
      // eslint-disable-next-line react/prop-types
      noRowsRenderer: ({ columns }) => (
        // eslint-disable-next-line react/prop-types
        <tbody><tr><td colSpan={columns.length}>No data</td></tr></tbody>
      )
    });

    expect(mounted.find('td[colSpan]')).toHaveLength(0);
    mounted.setProps({ data: [] });
    expect(mounted.find('td[colSpan]')).toHaveLength(1);
    expect(mounted.find('td[colSpan]').first().text()).toBe('No data');
  });

  it('triggers the select callback if a checkbox is touched', () => {
    const onSelect = jest.fn();
    const mounted = getComponent({ onSelect }, true);

    mounted.find('tr').at(1).find('td input[type="checkbox"]').simulate('change');

    expect(onSelect.mock.calls).toHaveLength(1);
    expect(onSelect.mock.calls[0]).toEqual([[0], 0]);
  });

  it('triggers the select callback with the full selection', () => {
    const onSelect = jest.fn();
    const mounted = getComponent({ onSelect, selection: [0] }, true);

    mounted.find('tr').at(2).find('td input[type="checkbox"]').simulate('change');

    expect(onSelect.mock.calls).toHaveLength(1);
    expect(onSelect.mock.calls[0]).toEqual([[0, 1], 1]);
  });

  it('enables the "all selected" checkbox if all rows are selected', () => {
    const mounted = getComponent({ }, true);

    expect(mounted.find('tr').at(0).find('th input[type="checkbox"]').prop('checked')).toBe(false);

    mounted.setProps({ selection: [0, 1] });

    expect(mounted.find('tr').at(0).find('th input[type="checkbox"]').prop('checked')).toBe(true);
  });

  it('can sort the data if there are sortable columns', () => {
    const mounted = getComponent({}, false, { sortable: true });

    expect(
      mounted
        .find('tr').at(1)
        .find('td').at(0)
        .text()
    ).toBe('Hans Wurst');

    mounted
      .find('tr').at(0)
      .find('th').at(0)
      .simulate('click');

    expect(
      mounted
        .find('tr').at(1)
        .find('td').at(0)
        .text()
    ).toBe('Hans Wurst');

    mounted
      .find('tr').at(0)
      .find('th').at(0)
      .simulate('click');

    expect(
      mounted
        .find('tr').at(1)
        .find('td').at(0)
        .text()
    ).toBe('John Wayne');
  });

  it('displays a sticky header and adds an additional scroll container', () => {
    const mounted = getComponent({ stickyHeader: true }, false);

    expect(mounted.find('thead').find(Row).find('tr').prop('style')).toEqual(Row.STICKY_SCROLLED_STYLE);
  });
});
