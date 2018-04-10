import React from 'react';
import moment from 'moment-timezone';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number, boolean, object } from '@storybook/addon-knobs';
import { Datepicker, DatepickerRaw } from '../src';

const stories = storiesOf('Datepicker', module);

stories
  .add('Default', () => (
    <div style={{ height: '22rem' }}>
      <DatepickerRaw
        disabled={boolean('Disabled', false)}
        initialDate={text('InitialDate', moment().add(1, 'days').format('YYYY-MM-DD').toString())}
        locale={text('Locale', 'en')}
        onChange={action()}
        open={boolean('Open', true)}
        required={boolean('Required', false)}
        timezone={text('Timezone', 'Europe/Berlin')}
        translations={object('Translations', {
          inputFieldError: '',
          inputFieldLabel: 'Date',
          today: 'Today',
        })}
        yearSpan={number('YearSpan', 2)}
      />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ height: '22rem' }}>
      <DatepickerRaw
        date={text('Date', moment().add(1, 'days').format('YYYY-MM-DD').toString())}
        disabled={boolean('Disabled', false)}
        locale={text('Locale', 'en')}
        onChange={action()}
        required={boolean('Required', false)}
        timezone={text('Timezone', 'Europe/Berlin')}
        translations={object('Translations', {
          inputFieldError: '',
          inputFieldLabel: 'Date',
          today: 'Today',
        })}
        yearSpan={number('YearSpan', 2)}
      />
    </div>
  ))
  .add('Close on outside click', () => (
    <div style={{ height: '22rem' }}>
      <Datepicker
        disabled={boolean('Disabled', false)}
        initialDate={text('InitialDate', moment().add(1, 'days').format('YYYY-MM-DD').toString())}
        locale={text('Locale', 'en')}
        onChange={action()}
        open={boolean('Open', true)}
        required={boolean('Required', false)}
        timezone={text('Timezone', 'Europe/Berlin')}
        translations={object('Translations', {
          inputFieldError: '',
          inputFieldLabel: 'Date',
          today: 'Today',
        })}
        yearSpan={number('YearSpan', 2)}
      />
    </div>
  ));
