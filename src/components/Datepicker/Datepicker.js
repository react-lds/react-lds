import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Moment from 'moment-timezone';
// eslint-disable-next-line
import { extendMoment } from 'moment-range';
import { ClickOutside, Input, IconButton } from '../../';

const moment = extendMoment(Moment);

const defaultDateFormat = 'l';
const placeholderDateFormat = 'L';
const iso8601DateFormat = 'YYYY-MM-DD';
const defaultTranslations = {
  inputFieldError: '',
  inputFieldLabel: 'Date',
  today: 'Today',
};

export class DatepickerRaw extends Component {
  /**
   * Renders visible weekdays
   * @return {ReactElement} thead
   */
  static renderWeekHeader() {
    return (
      <thead>
        <tr id="weekdays">
          {moment.weekdaysShort().map(wd => (
            <th key={wd} id={wd}>
              <abbr title={wd}>{wd}</abbr>
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  /**
   * Checks whether a date is valid
   * @param {String|Object} date date as string or moment object
   * @return {ReactElement}      thead
   */
  static validate = date => moment(date, iso8601DateFormat, true).isValid();

  /**
   * Checks whether the date is controlled
   * @param {String} date date as string or moment object
   * @return {Bool}
   */
  static isControlled = date => typeof date !== 'undefined';

  constructor(props, context) {
    super(props, context);
    const { date, initialDate, locale, open, timezone, translations } = this.props;

    moment.locale(locale.toLowerCase());
    moment.tz.setDefault(timezone);

    defaultTranslations.inputFieldError = `Please enter a valid date in the following format:
      ${moment().localeData().longDateFormat(placeholderDateFormat)}`;

    if (date && initialDate) {
      // eslint-disable-next-line no-console
      console.warn(
        '[react-lds] Datepicker:',
        'You are supplying both `initialDate` & `date`, ignoring `initialDate`.',
        'The component will work as a controlled component'
      );
    }

    let initial;
    let isValid;
    const isControlled = DatepickerRaw.isControlled(date);

    if (isControlled) {
      initial = date;
      isValid = DatepickerRaw.validate(date);
    } else {
      initial = initialDate;
      isValid = DatepickerRaw.validate(initialDate);
    }

    this.state = {
      open,
      inputValue: isValid ? moment(initial).format(defaultDateFormat).toString() : '',
      isValid: true,
      viewedDate: isValid ? moment(initial) : moment(),
    };

    this.mergedTranslations = {
      ...defaultTranslations,
      ...translations,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { date: nextDate } = nextProps;
    const { date: previousDate, required } = this.props;
    const isControlled = DatepickerRaw.isControlled(previousDate);

    if (isControlled) {
      const nextValidDate = moment(nextDate, [iso8601DateFormat, defaultDateFormat]);
      const isValid = DatepickerRaw.validate(nextDate);
      const isEmptyDate = nextDate === null || nextDate === '';

      this.setState({
        inputValue: isValid ? nextValidDate.format(defaultDateFormat).toString() : nextDate,
        isValid: isEmptyDate ? !required : isValid,
        viewedDate: isValid ? nextValidDate : moment(),
        open: isEmptyDate ? !!required : !isValid,
      });
    }
  }

  /**
   * Callback when a day is selected or the link to reset to today is clicked
   * @param  {Object} value moment object
   * @return {void}         interacts with component state and callback from props
   */
  onDatepickerChange = (day) => {
    const { date, onChange } = this.props;
    const isControlled = DatepickerRaw.isControlled(date);
    const inputValue = day ?
      moment(day).format(defaultDateFormat).toString() :
      moment().format(defaultDateFormat).toString();
    const viewedDate = day ? moment(day) : moment();

    if (!isControlled) {
      this.setState({
        inputValue,
        isValid: true,
        open: false,
        viewedDate,
      });
    }

    const output = day ? day.format(iso8601DateFormat) : moment().format(iso8601DateFormat);
    onChange(output, true);
  }

  /**
   * Callback when the input field changes
   * @param  {String} value input value as string
   * @return {void}         interacts with component state and callback from props
   */
  onInputFieldChange = (value) => {
    const { date, onChange, required } = this.props;
    const newDate = moment(value, defaultDateFormat);
    const isControlled = DatepickerRaw.isControlled(date);

    if (moment(value, defaultDateFormat, true).isValid()) {
      if (!isControlled) {
        this.setState({
          inputValue: value,
          isValid: true,
          open: false,
          viewedDate: newDate,
        });
      }
      onChange(newDate.format(iso8601DateFormat), true);
    } else if (value === '') {
      if (!isControlled) {
        this.setState({
          inputValue: '',
          isValid: !required,
          open: !!required,
          viewedDate: moment(),
        });
      }
      onChange(null, !required);
    } else {
      if (!isControlled) {
        this.setState({
          inputValue: value,
          isValid: false,
          open: true,
        });
      }
      onChange(value, false);
    }
  }

  /**
   * Callback when the year changes
   * @param  {Object} e <select /> onChange event
   * @return {void}     interacts with component state
   */
  onYearChange = (e) => {
    const { viewedDate } = this.state;

    this.setState({ viewedDate: viewedDate.set('year', e.target.value) });
  };

  /**
   * Callback when the month changes
   * @param  {Number} relativeMonth one month forward or backward
   * @return {void}                 interacts with component state
   */
  onMonthChange = (relativeMonth) => {
    const { viewedDate } = this.state;

    this.setState({ viewedDate: viewedDate.add(relativeMonth, 'month') });
  };

  /**
   * Callback when the input field is clicked or gets focused
   * @return {void} interacts with component state
   */
  onInputFieldClick = (value) => {
    const { required } = this.props;
    const date = moment(value, defaultDateFormat);
    const isValid = DatepickerRaw.validate(date);

    this.setState({
      isValid: value === null || value === '' ? !required : isValid,
      open: true,
    });
  }

  /**
   * Callback when an outside click occurs
   * @return {void} interacts with component state
   */
  onClickOutside = () => {
    this.setState({ open: false });
  }

  /**
   * Get provided translations or fall back to default values
   * @param  {String} key translation key
   * @return {String}     translation string
   */
  getTranslations(key) {
    return this.mergedTranslations[key];
  }

  /**
   * Get all weeks touched by the current month and mark days within it
   * @return {Array} all visible days organized by week
   */
  getMonthDays() {
    const { viewedDate } = this.state;

    // Construct range consisting of all days in month and another range consisting
    // of all days of all weeks which the month is in
    const firstDay = moment(viewedDate).startOf('month');
    const lastDay = moment(viewedDate).endOf('month');

    // Get the first Sunday of the first week and the last Saturday of the last week
    // touched by the current month
    const firstDayFirstWeek = moment(firstDay).isoWeekday() === 7 ?
      moment(firstDay) :
      moment(firstDay).startOf('isoweek').subtract(1, 'days');
    const lastDayLastWeek = moment(lastDay).isoWeekday() === 7 ?
      moment(lastDay).add(6, 'days') :
      moment(lastDay).endOf('isoweek').subtract(1, 'days');

    // Create two ranges, one spanning all weeks touched by the current month,
    // and one spanning only the month
    const monthRange = moment.range(firstDay, lastDay);
    const fullWeekRange = moment.range(firstDayFirstWeek, lastDayLastWeek);

    // Return filled week bins
    return Array.from(fullWeekRange.by('days')).reduce((acc, val) => {
      if (moment(val).day() % 7 === 0) { acc.push([]); }
      acc[acc.length - 1].push([moment(val), monthRange.contains(val)]);
      return acc;
    }, [[]]).filter(bin => bin.length > 1);
  }

  /**
   * Renders year options
   * @return {ReactElement} option
   */
  renderYearOptions() {
    const { yearSpan } = this.props;
    const { viewedDate } = this.state;

    const prevYears = moment(viewedDate).subtract(yearSpan, 'years');
    const nextYears = moment(viewedDate).add(yearSpan, 'years');
    const yearsRange = moment.range(prevYears, nextYears);
    return Array.from(yearsRange.by('years')).map((momentYear) => {
      const year = moment(momentYear).year();
      return <option key={year} value={year}>{year}</option>;
    });
  }

  /**
   * Renders year picker
   * @return {ReactElement} select
   */
  renderYearPicker() {
    const { viewedDate } = this.state;

    return (
      <div className="slds-shrink-none">
        <label className="slds-assistive-text" htmlFor="select-01">Pick a Year</label>
        <div className="slds-select_container">
          <select
            value={viewedDate.year()}
            className="slds-select"
            onChange={this.onYearChange}
          >
            {this.renderYearOptions()}
          </select>
        </div>
      </div>
    );
  }

  /**
   * Renders the monthly view including weeks and days
   * @return {ReactElement} tbody
   */
  renderMonth() {
    const today = this.getTranslations('today');
    const onClick = () => this.onDatepickerChange();

    return (
      <tbody>
        {this.getMonthDays().map((week, weekIndex) => this.renderWeek(week, weekIndex))}
        <tr>
          <td colSpan="7" role="gridcell">
            <a
              onClick={onClick}
              className="slds-show_inline-block slds-p-bottom_x-small"
            >
              {today}
            </a>
          </td>
        </tr>
      </tbody>
    );
  }

  /**
   * Renders a week
   * @return {ReactElement} tr
   */
  renderWeek(week, weekIndex) {
    return (
      <tr key={weekIndex}>
        {week.map(([day, inRange], dayIndex) => this.renderDay(day, inRange, dayIndex))}
      </tr>
    );
  }

  /**
   * Renders a day
   * @return {ReactElement} td
   */
  renderDay(day, inRange, dayIndex) {
    const { inputValue } = this.state;

    const onClick = () => inRange && this.onDatepickerChange(day);

    const isToday = day.isSame(moment(), 'day');

    const isSelected = day.isSame(moment(inputValue, defaultDateFormat), 'day');

    const classes = {
      'slds-is-today': day.isSame(moment(), 'day'),
      'slds-disabled-text': !inRange,
      'slds-is-selected': isSelected,
    };

    return (
      <td
        aria-disabled={!inRange ? 'true' : null}
        aria-selected={isSelected}
        className={cx(classes)}
        key={dayIndex}
        role="gridcell"
        tabIndex={inRange ? '0' : null}
      >
        <span className="slds-day" onClick={onClick}>
          {isToday && <span className="slds-assistive-text">Today: </span>}
          {day.date()}
        </span>
      </td>
    );
  }

  render() {
    const { className, disabled, closeOnClickOutside, required } = this.props;
    const { inputValue, isValid, open, viewedDate } = this.state;
    const viewedMonthName = moment(viewedDate).format('MMMM');

    const inputFieldLabel = this.getTranslations('inputFieldLabel');
    const inputFieldError = this.getTranslations('inputFieldError');
    const error = isValid ? undefined : inputFieldError;
    const placeholder = moment().localeData().longDateFormat(placeholderDateFormat);

    const condition = closeOnClickOutside && open;

    return (
      <ClickOutside onClickOutside={this.onClickOutside} condition={condition}>
        <div className={className} style={{ position: 'relative' }}>
          <Input
            disabled={disabled}
            id="date-input"
            label={inputFieldLabel}
            placeholder={placeholder}
            iconRight="monthlyview"
            error={error}
            value={inputValue || ''}
            onFocus={e => this.onInputFieldClick(e.target.value)}
            onChange={e => this.onInputFieldChange(e.target.value)}
            required={required}
          />
          {open && (
            <div
              aria-label={`Date picker: ${viewedMonthName}`}
              className="slds-datepicker slds-dropdown slds-dropdown_left"
              role="dialog"
            >
              <div className="slds-datepicker__filter slds-grid">
                <div className="slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow">
                  <div className="slds-align-middle">
                    <IconButton
                      onClick={() => this.onMonthChange(-1)}
                      sprite="utility"
                      icon="left"
                      container
                    />
                  </div>
                  <h2 id="month" className="slds-align-middle">
                    {viewedDate.format('MMMM')}
                  </h2>
                  <div className="slds-align-middle">
                    <IconButton
                      onClick={() => this.onMonthChange(1)}
                      sprite="utility"
                      icon="right"
                      container
                    />
                  </div>
                </div>
                {this.renderYearPicker()}
              </div>
              <table
                className="slds-datepicker__month"
                role="grid"
              >
                {DatepickerRaw.renderWeekHeader()}
                {this.renderMonth()}
              </table>
            </div>
          )}
        </div>
      </ClickOutside>
    );
  }
}

DatepickerRaw.defaultProps = {
  className: null,
  closeOnClickOutside: false,
  date: undefined,
  disabled: false,
  initialDate: null,
  locale: 'en',
  open: false,
  required: false,
  timezone: 'America/Los_Angeles',
  translations: defaultTranslations,
  yearSpan: 2,
};

DatepickerRaw.propTypes = {
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Date in ISO 8601 format (controlled component)
   */
  date: PropTypes.string,
  /**
   * Disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Optional initial date in ISO 8601 format
   */
  initialDate: PropTypes.string,
  /**
   * Optional locale
   */
  locale: PropTypes.string,
  /**
   * Callback function once a date has been selected or the input has been changed
   * Returns the input value and whether it is valid or not
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Whether the datepicker closes automatically on an outside click
   */
  closeOnClickOutside: PropTypes.bool,
  /**
   * Whether the datepicker is open or closed
   */
  open: PropTypes.bool,
  /**
   * Whether input is required
   */
  required: PropTypes.bool,
  /**
   * Optional timezone
   */
  timezone: PropTypes.string,
  /**
   * Optional translations, default is english
   */
  translations: PropTypes.shape({
    inputFieldError: PropTypes.string,
    inputFieldLabel: PropTypes.string,
    today: PropTypes.string,
  }),
  /**
   * How many years to show before and after the current year
   */
  yearSpan: PropTypes.number,
};

const Datepicker = props => <DatepickerRaw closeOnClickOutside {...props} />;

export default Datepicker;
