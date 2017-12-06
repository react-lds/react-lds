import React from 'react';
import moment from 'moment-timezone';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number, boolean, object } from '@storybook/addon-knobs';
import { DatepickerRaw as Datepicker } from '../src';

const stories = storiesOf('Datepicker', module);

stories
  .add('Default', () => (
    <div style={{ height: '22rem' }}>
      <Datepicker
        disabled={boolean('Disabled', false)}
        initialDate={text('InitialDate', moment().add(1, 'days').format('YYYY-MM-DD').toString())}
        locale={text('Locale', 'en')}
        timezone={text('Timezone', 'Europe/Berlin')}
        onChange={action()}
        yearSpan={number('YearSpan', 2)}
        open={boolean('Open', true)}
        required={boolean('Required', false)}
        translations={object('Translations', {
          inputFieldError: '',
          inputFieldLabel: 'Date',
          today: 'Today',
        })}
      />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ height: '22rem' }}>
      <Datepicker
        date={text('Date', moment().add(1, 'days').format('YYYY-MM-DD').toString())}
        disabled={boolean('Disabled', false)}
        locale={text('Locale', 'en')}
        timezone={text('Timezone', 'Europe/Berlin')}
        onChange={action()}
        yearSpan={number('YearSpan', 2)}
        required={boolean('Required', false)}
        translations={object('Translations', {
          inputFieldError: '',
          inputFieldLabel: 'Date',
          today: 'Today',
        })}
      />
    </div>
  ));
