import React from 'react';
import { IconSVG } from '../../index';

function assistiveText(prefix, title) {
  return <span className={prefix(['assistive-text'])}>{title}</span>;
}

function sortableIcon(prefix, title, direction) {
  const icon = direction === 'asc' ? 'arrowup' : 'arrowdown';

  return (
    <div className={prefix(['icon_container'])} title={title}>
      <IconSVG
        sprite="utility"
        icon={icon}
        size="x-small"
        sldsClasses={['is-sortable__icon', 'icon-text-default']}
      />
    </div>
  );
}

function tableHeaderAction(prefix, childrenArray) {
  return React.createElement(
    'a',
    { className: prefix(['th__action', 'text-link--reset']) },
    ...childrenArray
  );
}

const sortable = (Cell) => {
  const SortableCell = (props) => {
    const newProps = Object.assign({}, props);
    const existingSlds = props.sldsClasses || [];
    const sldsClasses = [];
    const childrenArray = [];
    const {
      prefix,
      scope,
      children,
      sortableAssistiveText = 'Sort Column',
      sortDirection = 'asc',
    } = props;

    if (typeof children === 'string') {
      childrenArray.push(<span>{children}</span>);
    } else {
      childrenArray.push(children);
    }

    if (scope === 'col' && props['is-sortable']) {
      sldsClasses.push('is-sortable');
      childrenArray.unshift(assistiveText(prefix, sortableAssistiveText));
      childrenArray.push(sortableIcon(prefix, sortableAssistiveText, sortDirection));
      newProps.children = tableHeaderAction(prefix, childrenArray);
    }

    newProps.sldsClasses = [...new Set(
      sldsClasses.concat(existingSlds)
    )];

    return <Cell {...newProps} />;
  };

  SortableCell.propTypes = Object.assign({}, Cell.propTypes, {
    scope: React.PropTypes.oneOf(['col', 'row']),
    prefix: React.PropTypes.func,
    sortableAssistiveText: React.PropTypes.string,
    sortDirection: React.PropTypes.string,
    'is-sortable': React.PropTypes.bool,
  });

  if (Cell.variations) {
    SortableCell.variations = Cell.variations;
  }

  return SortableCell;
};

export {
  sortable as default,
};
