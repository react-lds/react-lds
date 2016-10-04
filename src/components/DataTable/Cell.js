import React from 'react';

import { variationable } from '../../decorators';
import { prefixClasses, uniqueId } from '../../utils';
import { IconSVG } from '../../';

export const Cell = (props, { cssPrefix }) => {
  const {
    children,
    className,
    resizable,
    resizableAssistiveText,
    scope,
    sortable,
    sortDirection,
    sortAssistiveText,
    title,
    truncate,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = [
    { truncate: !!truncate },
    { 'is-resizable': scope === 'col' && !!resizable },
    { 'is-sorted--asc': !!sortable && sortDirection === 'asc' },
  ];

  const getTitle = () => {
    let text = null;

    if (title) {
      text = title;
    } else if (typeof children === 'string') {
      text = children;
    } else if (React.isValidElement(children) && typeof children.props.children === 'string') {
      text = children.props.children;
    }

    return text;
  };

  const inputId = uniqueId('resize-handle-');
  const cellTitle = getTitle();
  const isHeader = scope === 'col' || scope === 'row';
  const CellElement = isHeader ? 'th' : 'td';
  const cellScope = isHeader ? scope : null;

  const cellContent = (key) => {
    if ((!!resizable || !!sortable) && typeof children === 'string') {
      return (<span key={key}>{children}</span>);
    }

    return children;
  };

  const resizeHandle = (key) => {
    if (resizable) {
      return (
        <div key={key} className={prefix('resizable')}>
          <label className={prefix('assistive-text')} htmlFor={inputId}>{resizableAssistiveText}</label>
          <input
            className={prefix(['resizable__input', 'assistive-text'])}
            type="range"
            min="20"
            max="1000"
            id={inputId}
          />
          <span className={prefix('resizable__handle')}>
            <span className={prefix('resizable__divider')} />
          </span>
        </div>
      );
    }

    return null;
  };

  const sortIcon = (key) => {
    if (!!sortable && isHeader) {
      return (
        <div key={key} className={prefix('icon_container')} title={sortAssistiveText}>
          <IconSVG
            className={prefix(['is-sortable__icon', 'icon-text-default'])}
            icon={sortDirection === 'asc' ? 'arrowup' : 'arrowdown'}
            size="x-small"
            sprite="utility"
          />
        </div>
      );
    }

    return null;
  };

  const assistiveText = (key) => {
    if (!!sortable && isHeader) {
      return (<span key={key} className={prefix('assistive-text')}>{cellTitle}</span>);
    }

    return null;
  };

  const wrapChildren = (content) => {
    if (!!sortable && isHeader) {
      return <a className={prefix(['th__action', 'text-link--reset'])}>{content}</a>;
    }

    return content;
  };

  const childArray = [];
  childArray.push(cellContent(1));
  childArray.push(resizeHandle(2));
  childArray.push(sortIcon(3));
  childArray.push(assistiveText(4));

  const wrappedChildren = wrapChildren(childArray);

  return (
    <CellElement
      {...rest}
      className={prefix(sldsClasses, className)}
      scope={cellScope}
      title={cellTitle}
    >
      {wrappedChildren}
    </CellElement>
  );
};

Cell.variations = [
  'cell-wrap',
  'cell-shrink',
];

Cell.defaultProps = {
  resizableAssistiveText: 'Resize Cell',
  sortAssistiveText: 'Sort Column',
  sortDirection: 'asc',
};

Cell.contextTypes = { cssPrefix: React.PropTypes.string };

Cell.propTypes = {
  /**
   * cell content
   */
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * makes the cell resizable
   */
  resizable: React.PropTypes.bool,
  /**
   * assistiveText for resize handler
   */
  resizableAssistiveText: React.PropTypes.string,
  /**
   * only `th` cells have a scope. Header cells have a col scope, and leading body cells can have a row scope
   */
  scope: React.PropTypes.oneOf(['col', 'row']),
  /**
   * renders a sortable cell
   */
  sortable: React.PropTypes.bool,
  /**
   * assistive text for the sort icon
   */
  sortAssistiveText: React.PropTypes.string,
  /**
   * sortDirection
   */
  sortDirection: React.PropTypes.oneOf(['asc', 'desc']),
  /**
   * overrides the cell's title attribute
   */
  title: React.PropTypes.string,
  /**
   * truncates the cell content
   */
  truncate: React.PropTypes.bool,
};

export default variationable(Cell);
