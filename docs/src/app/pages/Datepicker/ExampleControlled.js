import React from 'react';
import moment from 'moment-timezone';
import { Button, ButtonGroup, Datepicker, Grid } from 'react-lds';

class ExampleControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().add(1, 'days').format('YYYY-MM-DD').toString(),
    };
  }

  onClear = () => {
    this.setState({ date: null });
  }

  onSetDate = () => {
    this.setState({
      date: moment().add(5, 'days').format('YYYY-MM-DD').toString(),
    });
  }

  onChange = (value, isValid) => {
    /* eslint-disable no-console */
    console.log(value, isValid);
    this.setState({ date: value });
  }

  render() {
    const { date } = this.state;

    return (
      <Grid align-center>
        <div className="slds-p-right--medium slds-p-top--x-small">
          <ButtonGroup className="slds-p-top--medium">
            <Button neutral onClick={this.onClear}>Clear date</Button>
            <Button neutral onClick={this.onSetDate}>Set example date</Button>
          </ButtonGroup>
        </div>
        <div>
          <Datepicker
            date={date}
            locale="en"
            timezone="Europe/Berlin"
            onChange={this.onChange}
            open
          />
        </div>
      </Grid>
    );
  }
}

export default ExampleControlled;
