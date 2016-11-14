import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { Datepicker } from '../Datepicker';

describe('<Datepicker />', () => {
  let mounted = null;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };
  const selected = jest.fn();

  beforeEach(() => {
    mounted = shallow(<Datepicker onSelectDate={selected} />, options);
  });

  it('renders the current month and year by default', () => {
    expect(mounted.find('h2').first().text()).toBe(moment().format('MMMM'));
  });

  it('highlights the current day', () => {
    expect(mounted.find('.slds-is-today').children().first().text()).toBe(moment().format('DD'));
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
    mounted.setState({ viewedDate: moment([2016, 5, 1]) });
    const sampleDate = mounted.find('.slds-day').first();
    sampleDate.simulate('click');
    expect(selected).toHaveBeenCalledTimes(1);
    expect(selected).toHaveBeenCalledWith('2016-05-29');
  });

  it('highlights the selected date', () => {
    const sampleDate = mounted.find('.slds-day').first();
    const sampleDateContent = sampleDate.text();
    sampleDate.simulate('click');
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
    mounted.setProps({ translations: { today: 'Heute' } });
    const translatedTodayLink = mounted.find('a');
    expect(translatedTodayLink.text()).toEqual('Heute');
  });
});
