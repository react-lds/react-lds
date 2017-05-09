import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { shallow } from 'enzyme';
import { Datepicker } from '../Datepicker';

describe('<Datepicker />', () => {
  let mounted = null;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };
  const changed = jest.fn();

  beforeEach(() => {
    mounted = shallow(<Datepicker open onValidDateChange={changed} />, options);
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
    expect(mounted.find('.slds-is-today').children().first().text()).toBe(moment().format('D'));
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
    expect(changed).toHaveBeenCalledWith('2016-05-11');
    expect(mounted.find('Input').first().props().error).toBeUndefined();
  });

  it('calls the callback function if a valid date is input', () => {
    const input = mounted.find('Input').first();
    const sampleDate = '1/10/2017';
    input.simulate('change', { target: { value: sampleDate } });
    expect(changed).toBeCalled();
    expect(changed).toHaveBeenCalledWith('2017-01-10');
    expect(mounted.find('Input').first().props().error).toBeUndefined();
  });

  it('displays an error message if the input date is invalid', () => {
    const input = mounted.find('Input').first();
    const falseSampleDate = '13/10/2017';
    input.simulate('change', { target: { value: falseSampleDate } });
    expect(mounted.find('Input').first().props().error).toBeDefined();
  });

  it('datepicker mirrors the same date as the input', () => {
    const input = mounted.find('Input').first();
    const sampleDate = '1/10/2017';
    input.simulate('change', { target: { value: sampleDate } });
    expect(changed).toBeCalled();
    expect(mounted.state().viewedDate.toString()).toEqual(moment(mounted.state().inputDate, 'M/D/YYYY').toString());
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

  it('shows the correct translation strings', () => {
    mounted.setProps({ translations: { inputFieldError: 'Fehler', inputFieldLabel: 'Datum', today: 'Heute' } });
    const translatedTodayLink = mounted.find('a');
    expect(translatedTodayLink.text()).toEqual('Heute');
  });
});
