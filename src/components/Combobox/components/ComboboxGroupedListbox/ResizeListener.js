import { Component } from 'react';
import PropTypes from 'prop-types';
import { withThrottle } from '../../utils/withThrottle';

class RawResizeListener extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    throttleFn: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const { callback, throttleFn } = this.props;
    this.cb = throttleFn(callback);
  }

  componentDidMount() {
    window.addEventListener('resize', this.cb);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.cb);
  }

  render() {
    return null;
  }
}

export const ResizeListener = withThrottle(RawResizeListener);
