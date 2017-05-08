import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonIcon, Input } from 'react-lds';
import classnames from 'classnames';

import moment from 'moment';
import 'moment-range';

import { prefixClasses } from '../../utils';

const iso8601DateFormat = 'YYYY-MM-DD';
const salesforceDateFormat = 'M/D/YYYY';

export class Datepicker extends React.Component {

  static renderWeekHeader() {
    return (
      <thead>
        <tr id="weekdays">
          {moment.weekdaysShort().map(wd => <th key={wd} id={wd}>
            <abbr title={wd}>{wd}</abbr>
          </th>
          ) }
        </tr>
      </thead>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.prefix = (classes, passThrough) => prefixClasses(this.context.cssPrefix, classes, passThrough);
    const { preselectedDate } = this.props;

    this.state = {
      isOpen: false,
      preselectedDate: preselectedDate ? moment(preselectedDate) : null,
      inputDate: preselectedDate ? moment(preselectedDate).format(salesforceDateFormat).toString() : '',
      viewedDate: moment(),
    };
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
   * Callback when the month changes
   * @param  {Object} day day as moment object
   * @return {void}       interacts with component state and callback from props
   */
  onDayChange = (day) => {
    const { onClick, onValidDateChange } = this.props;
    this.setState({
      preselectedDate: day,
      inputDate: moment(day).format(salesforceDateFormat).toString(),
      isInputInvalid: false,
    });

    onClick();
    onValidDateChange(day.format(iso8601DateFormat));
  };

  /**
   * Callback when today reset link is cliecked
   * @return {void} interacts with component state
   */
  onTodayChange = () => this.setState({ viewedDate: moment() });

  /**
   * Callback when the input field changes
   * @param  {String} value input value as string
   * @return {void}         interacts with component state and callback from props
   */
  onInputFieldChange = (value) => {
    const { onValidDateChange } = this.props;
    const newDate = moment(value, salesforceDateFormat);

    if (moment(value, salesforceDateFormat, true).isValid()) {
      this.setState({
        viewedDate: newDate,
        preselectedDate: newDate,
        inputDate: value,
        isInputInvalid: false,
      });

      onValidDateChange(newDate.format(iso8601DateFormat));
    } else {
      this.setState({
        inputDate: value,
        isInputInvalid: true,
      });
    }
  }

  /**
   * Get all weeks touched by the current month and mark days within it.
   * @return {Array} all visible days organized by week
   */
  getMonthDays() {
    const { viewedDate } = this.state;

    // Construct range consisting of all days in month and another range consisting
    // of all days of all weeks which the month is in
    const firstDay = moment(viewedDate).startOf('month');
    const lastDay = moment(viewedDate).endOf('month');
    const firstDayFirstWeek = moment(firstDay).startOf('week');
    const lastDayLastWeek = moment(lastDay).endOf('week');

    // Create two ranges, one spanning all weeks touched by the current month,
    // and one spanning only the month
    const monthRange = moment.range(firstDay, lastDay);
    const fullWeekRange = moment.range(firstDayFirstWeek, lastDayLastWeek);

    // Return filled week bins
    return fullWeekRange.toArray('days').reduce((acc, val) => {
      if (moment(val).day() % 7 === 0) { acc.push([]); }
      acc[acc.length - 1].push([moment(val), moment(val).within(monthRange)]);
      return acc;
    }, [[]]).filter(bin => bin.length > 0);
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
    return moment.range(prevYears, nextYears).toArray('years').map((momentYear) => {
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
      <div className={this.prefix('shrink-none')}>
        <label className={this.prefix('assistive-text')} htmlFor="select-01">Pick a Year</label>
        <div className={this.prefix('select_container')}>
          <select
            value={viewedDate.year()}
            className={this.prefix('select')}
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
    const today = this.props.translations.today;
    return (
      <tbody>
        {this.getMonthDays().map((week, weekIndex) => this.renderWeek(week, weekIndex))}
        <tr>
          <td colSpan="7" role="gridcell">
            <a
              onClick={this.onTodayChange}
              className={this.prefix(['show--inline-block', 'p-bottom--x-small'])}
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
    const { preselectedDate } = this.state;
    const classes = {
      [this.prefix('is-today')]: day.isSame(moment(), 'day'),
      [this.prefix('disabled-text')]: !inRange,
      [this.prefix('is-selected')]: day.isSame(preselectedDate, 'day'),
    };

    return (
      <td key={dayIndex} className={classnames(classes)} headers={day.day()}>
        <span className={this.prefix('day')} onClick={() => this.onDayChange(day)}>
          {day.date()}
        </span>
      </td>
    );
  }

  render() {
    const {
      isOpen,
      onClick,
      translations: {
        inputFieldLabel,
        inputFieldError
      },
    } = this.props;
    const { viewedDate, inputDate, isInputInvalid } = this.state;
    const error = isInputInvalid ? inputFieldError : undefined;

    return (
      <div>
        <Input
          id="date-input"
          label={inputFieldLabel}
          placeholder={salesforceDateFormat}
          iconRight="monthlyview"
          error={error}
          value={inputDate}
          onClick={onClick}
          onChange={e => this.onInputFieldChange(e.target.value)}
          required={this.isRequired}
        />
        {isOpen && (
          <div className={this.prefix(['datepicker', 'dropdown', 'dropdown--left'])}>
            <div className={this.prefix(['datepicker__filter', 'grid'])}>
              <div className={this.prefix(['datepicker__filter--month', 'grid', 'grid--align-spread', 'grow'])}>
                <div className={this.prefix('align-middle')}>
                  <Button icon onClick={() => this.onMonthChange(-1)} icon-container>
                    <ButtonIcon position="left" sprite="utility" icon="left" />
                  </Button>
                </div>
                <h2 id="month" className={this.prefix('align-middle')}>
                  {viewedDate.format('MMMM')}
                </h2>
                <div className={this.prefix('align-middle')}>
                  <Button icon onClick={() => this.onMonthChange(1)} icon-container>
                    <ButtonIcon position="right" sprite="utility" icon="right" />
                  </Button>
                </div>
              </div>
              {this.renderYearPicker()}
            </div>
            <table className={this.prefix('datepicker__month')} role="grid">
              {Datepicker.renderWeekHeader()}
              {this.renderMonth()}
            </table>
          </div>
        )}
      </div>
    );
  }
}

Datepicker.contextTypes = { cssPrefix: PropTypes.string };

Datepicker.defaultProps = {
  isOpen: false,
  isRequired: false,
  yearSpan: 2,
  preselectedDate: null,
  translations: {
    inputFieldError: `Invalid date, please use the following format: ${salesforceDateFormat}`,
    inputFieldLabel: 'Date',
    today: 'Today',
  },
};

Datepicker.propTypes = {
  /**
   * Whether the datepicker is open or closed
   */
  isOpen: PropTypes.bool,
  /**
   * Whether input is required
   */
  isRequired: PropTypes.bool,
  /**
   * Callback function if the input is clicked or a day is selected
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Callback function once a valid date has been selected or input
   */
  onValidDateChange: PropTypes.func.isRequired,
  /**
   * Optional preselected date
   */
  preselectedDate: PropTypes.string,
  /**
   * Optional translations, default to english
   */
  translations: PropTypes.shape({
    inputFieldError: PropTypes.string.isRequired,
    inputFieldLabel: PropTypes.string.isRequired,
    today: PropTypes.string.isRequired,
  }),
  /**
   * How many years to show before and after the current year
   */
  yearSpan: PropTypes.number,
};

export default Datepicker;
