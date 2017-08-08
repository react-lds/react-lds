import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { Datepicker } from '../Datepicker';

describe('<Datepicker />', () => {
  let mounted = null;

  const changed = jest.fn();

  beforeEach(() => {
    mounted = shallow(<Datepicker open onChange={changed} locale="en" />);
  });

  it('renders input field', () => {
    expect(mounted.find('Input').first().length).toBe(1);
  });

  it('hides datepicker', () => {
    mounted.setProps({ open: false });
    expect(mounted.find('.datepicker').length).toBe(0);
  });

  it('renders the current month and year by default', () => {
    expect(mounted.find('h2').first().text()).toBe(moment().format('MMMM'));
  });

  it('highlights the current day', () => {
    expect(mounted.find('.slds-is-today').children().first().text()).toBe(`Today: ${moment().format('D')}`);
  });

  it('allows the user to select the next month', () => {
    const lastButton = mounted.find('Flavored_Button').last();
    lastButton.simulate('click');
    expect(mounted.find('h2').first().text()).toBe(moment().add(1, 'month').format('MMMM'));
  });

  it('allows the user to select the previous month', () => {
    const firstButton = mounted.find('Flavored_Button').first();
    firstButton.simulate('click');
    expect(mounted.find('h2').first().text()).toBe(moment().subtract(1, 'month').format('MMMM'));
  });

  it('calls the callback function if a date is selected', () => {
    mounted.setState({ viewedDate: moment('2016-05-11') });
    const sampleDate = mounted.find('.slds-day').at(10);
    sampleDate.simulate('click');
    expect(changed).toBeCalled();
    expect(changed).toHaveBeenCalledWith('2016-05-11', true);
    expect(mounted.find('Input').first().props().error).toBeFalsy();
  });

  it('calls the callback function if a date is input', () => {
    const input = mounted.find('Input').first();
    const sampleDate = '1/10/2017';
    input.simulate('change', { target: { value: sampleDate } });
    expect(changed).toBeCalled();
    expect(changed).toHaveBeenCalledWith('2017-01-10', true);
    expect(mounted.find('Input').first().props().error).toBeFalsy();
  });

  it('displays an error message if the input date is invalid', () => {
    const input = mounted.find('Input').first();
    const falseSampleDate = '13/10/2017';
    input.simulate('change', { target: { value: falseSampleDate } });
    expect(changed).toBeCalled();
    expect(changed).toHaveBeenCalledWith('13/10/2017', false);
    expect(mounted.find('Input').first().props().error).toBeDefined();
  });

  it('datepicker mirrors the date of the input', () => {
    const input = mounted.find('Input').first();
    const sampleDate = '1/10/2017';
    input.simulate('change', { target: { value: sampleDate } });
    expect(changed).toBeCalled();
    expect(mounted.state('viewedDate').toString()).toEqual(moment(mounted.state('inputValue'), 'M/D/YYYY').toString());
  });

  it('input mirrors the date of the datepicker', () => {
    mounted.setState({ viewedDate: moment('2016-05-11') });
    const sampleDate = mounted.find('.slds-day').at(10);
    sampleDate.simulate('click');
    const input = mounted.find('Input').first();
    expect(mounted.state('viewedDate').toString()).toEqual(moment(input.props().value, 'MM/DD/YYYY').toString());
  });

  it('highlights the selected date', () => {
    const sampleDate = mounted.find('.slds-day').at(10);
    const sampleDateContent = sampleDate.text();
    sampleDate.simulate('click');
    mounted.setState({ open: true });
    const sampleDateParent = mounted.find('.slds-is-selected');
    expect(sampleDateParent.text()).toContain(sampleDateContent);
  });

  it('allows the user to select a different year', () => {
    const yearSelector = mounted.find('select');
    yearSelector.simulate('change', { target: { value: 2014 } });
    expect(moment(mounted.state().viewedDate).year()).toEqual(2014);
  });

  it('shows the correct number of years in the dropdown', () => {
    const yearOptions = mounted.find('select').children();
    expect(yearOptions.length).toEqual(5);
    mounted.setProps({ yearSpan: 3 });
    const changedYearOptions = mounted.find('select').children();
    expect(changedYearOptions.length).toEqual(7);
  });

  it('adjusts the available years depending on the year selection', () => {
    mounted.setState({ viewedDate: moment([2012, 5, 1]) });
    const yearOptions = mounted.find('option');
    expect(yearOptions.map(opt => opt.text())).toEqual(['2010', '2011', '2012', '2013', '2014']);
  });

  it('allows the user to return to the current month', () => {
    const todayLink = mounted.find('a');
    todayLink.simulate('click');
    expect(moment(mounted.state().viewedDate).month()).toEqual(moment().month());
  });

  it('makes the input field required', () => {
    mounted = shallow(<Datepicker open onChange={changed} required />);
    const input = mounted.find('Input').first();
    expect(input.props().required).toEqual(true);
  });

  it('shows the correct translation strings', () => {
    mounted = shallow(<Datepicker open onChange={changed} locale="de" translations={{ today: 'Heute' }} />);
    const translatedTodayLink = mounted.find('a');
    expect(translatedTodayLink.text()).toEqual('Heute');
  });

  it('sets the correct locale', () => {
    mounted = shallow(<Datepicker open onChange={changed} locale="de" />);
    expect(moment.locale()).toEqual(mounted.instance().props.locale);
  });

  it('sets the correct time zone', () => {
    mounted = shallow(<Datepicker open onChange={changed} timezone="America/Los_Angeles" />);
    expect(moment().tz()).toEqual(mounted.instance().props.timezone);
  });

  it('works as a controlled component', () => {
    mounted = shallow(<Datepicker open onChange={changed} date="2017-10-10" />);
    mounted.setProps({ date: '2017-10-11' });
    expect(changed).toBeCalled();
    expect(mounted.state('viewedDate').toString()).toEqual(moment('2017-10-11', 'YYYY-MM-DD').toString());
    expect(mounted.state('inputValue')).toEqual(moment('2017-10-11', 'YYYY-MM-DD').format('MM/DD/YYYY').toString());
    mounted.setProps({ date: null });
    expect(changed).toBeCalled();
    expect(mounted.state('viewedDate').toString()).toEqual(moment().toString());
    expect(mounted.state('inputValue')).toEqual(null);
  });
});
