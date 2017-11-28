import React from 'react';

import HeadCell from './HeadCell';

export default props => <HeadCell key={props.dataKey} {...props} />; // eslint-disable-line react/prop-types
