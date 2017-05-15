import React from 'react';
import moment from 'moment-timezone';
import { Datepicker } from 'react-lds';

const ExampleDatepicker = () => (
  <Datepicker
    initialDate={moment().add(1, 'days').format('YYYY-MM-DD').toString()}
    locale="en"
    timezone="Europe/Berlin"
    onChange={() => {}}
    open
  />
);

export default ExampleDatepicker;
