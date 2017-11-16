import React from 'react';
import moment from 'moment-timezone';
import { Datepicker } from 'react-lds';

const ExampleDisabledDatepicker = () => (
  <Datepicker
    initialDate={moment().add(1, 'days').format('YYYY-MM-DD').toString()}
    locale="en"
    timezone="Europe/Berlin"
    onChange={() => {}}
    disabled
  />
);

export default ExampleDisabledDatepicker;
