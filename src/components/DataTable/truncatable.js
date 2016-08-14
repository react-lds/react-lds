import React from 'react';

const truncatable = (Cell) => {
  const TruncatableCell = (props) => {
    let children = props.children;

    if (props.truncate) {
      children = <div className={props.prefix(['truncate'])}>{props.children}</div>;
    }

    return <Cell {...props}>{children}</Cell>;
  };

  TruncatableCell.propTypes = Object.assign({}, Cell.propTypes, {
    prefix: React.PropTypes.func.isRequired,
    truncate: React.PropTypes.bool,
  });

  if (Cell.variations) {
    TruncatableCell.variations = Cell.variations;
  }

  return TruncatableCell;
};

export {
  truncatable as default,
};
