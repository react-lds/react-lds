import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonIcon } from 'react-lds';
import classnames from 'classnames';

import moment from 'moment';
import 'moment-range';

import { prefixClasses } from '../../utils';

export class Datepicker extends React.Component {
  static contextTypes = { cssPrefix: PropTypes.string };

  static propTypes = {
    /**
    * Optional preselected date
    */
    selectedDate: PropTypes.string,
    /**
    * Callback function once day has been changed
    */
    onSelectDate: PropTypes.func.isRequired,
    /**
    * How many years to show before and after the current year
    */
    yearSpan: PropTypes.number,
    /**
    * Optional translations, default to english
    */
    translations: PropTypes.shape({
      today: PropTypes.string,
    }),
  };

  static defaultProps = {
    yearSpan: 2,
    translations: {
      today: 'Today',
    },
  };

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

    this.state = {
      selectedDate: this.props.selectedDate ? moment(this.props.selectedDate) : null,
      viewedDate: moment(),
    };

    this.viewYear = (e) => {
      this.setState({ viewedDate: this.state.viewedDate.set('year', e.target.value) });
    };
    this.viewMonth = (relativeMonth) => {
      this.setState({ viewedDate: this.state.viewedDate.add(relativeMonth, 'month') });
    };
    this.selectDay = (day) => {
      this.setState({ selectedDate: day });
      this.props.onSelectDate(day.format('YYYY-MM-DD'));
    };
    this.resetViewToToday = () => this.setState({ viewedDate: moment() });
  }

  getMonthDays() {
    // Construct range consisting of all days in month and another range consisting
    // of all days of all weeks which the month is in
    const firstDay = moment(this.state.viewedDate).startOf('month');
    const lastDay = moment(this.state.viewedDate).endOf('month');
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

  renderYearOptions() {
    const prevYears = moment(this.state.viewedDate).subtract(this.props.yearSpan, 'years');
    const nextYears = moment(this.state.viewedDate).add(this.props.yearSpan, 'years');
    return moment.range(prevYears, nextYears).toArray('years').map((momentYear) => {
      const year = moment(momentYear).year();
      return <option key={year} value={year}>{year}</option>;
    });
  }

  renderYearPicker() {
    return (
      <div className={this.prefix('shrink-none')}>
        <label className={this.prefix('assistive-text')} htmlFor="select-01">Pick a Year</label>
        <div className={this.prefix('select_container')}>
          <select
            value={this.state.viewedDate.year()}
            className={this.prefix('select')}
            onChange={this.viewYear}
          >
            {this.renderYearOptions()}
          </select>
        </div>
      </div>
    );
  }

  renderMonth() {
    return (
      <tbody>
        {this.getMonthDays().map((week, weekIndex) => this.renderWeek(week, weekIndex))}
        <tr>
          <td colSpan="7" role="gridcell">
            <a
              onClick={this.resetViewToToday}
              className={this.prefix(['show--inline-block', 'p-bottom--x-small'])}
            >
              {this.props.translations.today}
            </a>
          </td>
        </tr>
      </tbody>
    );
  }

  renderWeek(week, weekIndex) {
    return (
      <tr key={weekIndex}>
        {week.map(([day, inRange], dayIndex) => this.renderDay(day, inRange, dayIndex))}
      </tr>
    );
  }

  renderDay(day, inRange, dayIndex) {
    const classes = {
      [this.prefix('is-today')]: day.isSame(moment(), 'day'),
      [this.prefix('disabled-text')]: !inRange,
      [this.prefix('is-selected')]: day.isSame(this.state.selectedDate, 'day'),
    };
    return (
      <td key={dayIndex} className={classnames(classes)} headers={day.day()}>
        <span className={this.prefix('day')} onClick={() => this.selectDay(day)}>
          {day.date()}
        </span>
      </td>
    );
  }

  render() {
    return (
      <div className={this.prefix(['datepicker', 'dropdown', 'dropdown--left'])}>
        <div className={this.prefix(['datepicker__filter', 'grid'])}>
          <div className={this.prefix(['datepicker__filter--month', 'grid', 'grid--align-spread', 'grow'])}>
            <div className={this.prefix('align-middle')}>
              <Button icon onClick={() => this.viewMonth(-1)} icon-container >
                <ButtonIcon position="left" sprite="utility" icon="left" />
              </Button>
            </div>
            <h2 id="month" className={this.prefix('align-middle')}>
              {this.state.viewedDate.format('MMMM')}
            </h2>
            <div className={this.prefix('align-middle')}>
              <Button icon onClick={() => this.viewMonth(1)} icon-container>
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
    );
  }
}

export default Datepicker;
