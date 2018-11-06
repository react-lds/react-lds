import React from 'react';
import Moment from 'moment-timezone';
// eslint-disable-next-line
import { extendMoment } from 'moment-range';
import { shallow } from 'enzyme';

import { DatepickerRaw as Datepicker } from '../Datepicker';
import { IconButton, Input } from '../../../';

let moment;
const onChangeMock = jest.fn();

const getComponent = (props = {}) => shallow(
  <Datepicker open onChange={onChangeMock} locale="en" {...props} />
);

describe('<Datepicker />', () => {
  beforeEach(() => {
    moment = extendMoment(Moment);
    onChangeMock.mockClear();
  });

  it('renders input field', () => {
    const mounted = getComponent();
    expect(mounted.find(Input).first().length).toBe(1);
  });

  it('hides datepicker', () => {
    const mounted = getComponent({ open: false });
    expect(mounted.find('.datepicker').length).toBe(0);
  });

  it('renders the current month and year by default', () => {
    const mounted = getComponent();
    expect(mounted.find('h2').first().text()).toBe(moment().format('MMMM'));
  });

  it('renders additional className', () => {
    const mounted = getComponent({ className: 'foo' });
    expect(mounted.children().hasClass('foo')).toBe(true);
  });

  it('can render as disabled', () => {
    const mounted = getComponent({ disabled: true });
    expect(mounted.find(Input).first().prop('disabled')).toBe(true);
  });

  it('highlights the current day', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-is-today').children().first().text()).toBe(`Today: ${moment().format('D')}`);
  });

  it('allows the user to select the next month', () => {
    const mounted = getComponent();
    const lastButton = mounted.find(IconButton).last();
    lastButton.simulate('click');
    expect(mounted.find('h2').first().text()).toBe(moment().add(1, 'month').format('MMMM'));
  });

  it('allows the user to select the previous month', () => {
    const mounted = getComponent();
    const firstButton = mounted.find(IconButton).first();
    firstButton.simulate('click');
    expect(mounted.find('h2').first().text()).toBe(moment().subtract(1, 'month').format('MMMM'));
  });

  it('calls the callback function if a date is selected', () => {
    const mounted = getComponent();
    mounted.setState({ viewedDate: moment('2016-05-11') });
    const sampleDate = mounted.find('.slds-day').at(10);
    sampleDate.simulate('click');
    expect(onChangeMock).toHaveBeenCalledWith('2016-05-11', true);
    expect(mounted.find(Input).first().props().error).toBeFalsy();
  });

  it('calls the callback function if a date is input', () => {
    const mounted = getComponent();
    const input = mounted.find(Input).first();
    const sampleDate = '1/10/2017';
    input.simulate('change', { target: { value: sampleDate } });
    expect(onChangeMock).toHaveBeenCalledWith('2017-01-10', true);
    expect(mounted.find(Input).first().props().error).toBeFalsy();
  });

  it('displays an error message if the input date is invalid', () => {
    const mounted = getComponent();
    const input = mounted.find(Input).first();
    const falseSampleDate = '13/10/2017';
    input.simulate('change', { target: { value: falseSampleDate } });
    expect(onChangeMock).toHaveBeenCalledWith('13/10/2017', false);
    expect(mounted.find(Input).first().props().error).toBeDefined();
  });

  it('datepicker mirrors the date of the input', () => {
    const mounted = getComponent();
    const input = mounted.find(Input).first();
    const sampleDate = '1/10/2017';
    input.simulate('change', { target: { value: sampleDate } });
    expect(onChangeMock).toBeCalled();
    expect(mounted.state('viewedDate').toString()).toEqual(moment(mounted.state('inputValue'), 'M/D/YYYY').toString());
  });

  it('input mirrors the date of the datepicker', () => {
    const mounted = getComponent();
    mounted.setState({ viewedDate: moment('2016-05-11') });
    const sampleDate = mounted.find('.slds-day').at(10);
    sampleDate.simulate('click');
    const input = mounted.find(Input).first();
    expect(mounted.state('viewedDate').toString()).toEqual(moment(input.props().value, 'MM/DD/YYYY').toString());
  });

  it('highlights the selected date', () => {
    const mounted = getComponent();
    const sampleDate = mounted.find('.slds-day').at(10);
    const sampleDateContent = sampleDate.text();
    sampleDate.simulate('click');
    mounted.setState({ open: true });
    const sampleDateParent = mounted.find('.slds-is-selected');
    expect(sampleDateParent.text()).toContain(sampleDateContent);
  });

  it('allows the user to select a different year', () => {
    const mounted = getComponent();
    const yearSelector = mounted.find('select');
    yearSelector.simulate('change', { target: { value: 2014 } });
    expect(moment(mounted.state().viewedDate).year()).toEqual(2014);
  });

  it('shows the correct number of years in the dropdown', () => {
    const expectLen = (cmp, len) => { expect(cmp.find('select > option').length).toEqual(len); };
    const mounted = getComponent({ date: '2018-10-01', yearSpan: 2 });
    expectLen(mounted, 5);
    mounted.setProps({ yearSpan: 3 });
    mounted.setState({ open: true });
    expectLen(mounted, 7);
  });

  it('adjusts the available years depending on the year selection', () => {
    const mounted = getComponent();
    mounted.setState({ viewedDate: moment([2012, 5, 1]) });
    const yearOptions = mounted.find('option');
    expect(yearOptions.map(opt => opt.text())).toEqual(['2010', '2011', '2012', '2013', '2014']);
  });

  it('allows the user to return to the current month', () => {
    const mounted = getComponent();
    const todayLink = mounted.find('a');
    todayLink.simulate('click');
    expect(moment(mounted.state().viewedDate).month()).toEqual(moment().month());
  });

  it('makes the input field required', () => {
    const mounted = getComponent({ required: true });
    const input = mounted.find(Input).first();
    expect(input.props().required).toEqual(true);
  });

  it('shows the correct translation strings', () => {
    const mounted = getComponent({ translations: { today: 'heute' } });
    const translatedTodayLink = mounted.find('a');
    expect(translatedTodayLink.text()).toEqual('heute');
  });

  it('sets the correct locale', () => {
    const mounted = getComponent({ locale: 'de' });
    expect(moment.locale()).toEqual(mounted.instance().props.locale);
  });

  it('sets the correct time zone', () => {
    const mounted = getComponent({ timezone: 'America/Los_Angeles' });
    expect(moment().tz()).toEqual(mounted.instance().props.timezone);
  });

  it('works as a controlled component', () => {
    const mounted = getComponent({ date: '2017-10-10' });
    expect(mounted.state('viewedDate').toString()).toEqual(moment('2017-10-10', 'YYYY-MM-DD').toString());
    expect(mounted.state('inputValue')).toEqual(moment('2017-10-10', 'YYYY-MM-DD').format('MM/DD/YYYY').toString());
    mounted.setProps({ date: null });
    expect(mounted.state('viewedDate').toString()).toEqual(moment().toString());
    expect(mounted.state('inputValue')).toEqual(null);
  });
});
