import React from 'react';
import { uniqueId } from '../../utils';

function assistiveLabel(prefix, title, inputId) {
  return <label className={prefix(['assistive-text'])} htmlFor={inputId}>{title}</label>;
}

function resizeHandle(prefix, assistiveText, inputId) {
  return (
    <div className={prefix(['resizable'])}>
      {assistiveLabel(prefix, assistiveText, inputId)}
      <input
        className={prefix(['resizable__input', 'assistive-text'])}
        type="range"
        min="20"
        max="1000"
        id={inputId}
      />
      <span className={prefix(['resizable__handle'])}>
        <span className={prefix(['resizable__divider'])}></span>
      </span>
    </div>
  );
}

const resizable = (Cell) => {
  class ResizeableCell extends React.Component {
    constructor(props) {
      super(props);
      this.inputId = uniqueId('resize-handle-');
    }

    render() {
      const newProps = Object.assign({}, this.props);
      const existingSlds = this.props.sldsClasses || [];
      const sldsClasses = [];
      const {
        prefix,
        scope,
        resizableAssistiveText = 'click and drag to resize',
      } = this.props;

      let children = this.props.children;
      let element;

      if (typeof children === 'string') {
        children = <span>{children}</span>;
      }

      newProps.sldsClasses = [...new Set(
        sldsClasses.concat(existingSlds)
      )];

      if (scope === 'col' && this.props['is-resizable']) {
        sldsClasses.push('is-resizable');
        element = (
          <Cell {...newProps}>
            {children}
            {resizeHandle(prefix, resizableAssistiveText, this.inputId)}
          </Cell>
        );
      } else {
        element = (
          <Cell {...newProps}>
            {children}
          </Cell>
        );
      }

      return element;
    }
  }

  ResizeableCell.propTypes = Object.assign({}, Cell.propTypes, {
    scope: React.PropTypes.oneOf(['col', 'row']),
    prefix: React.PropTypes.func.isRequired,
    resizableAssistiveText: React.PropTypes.string,
    'is-resizable': React.PropTypes.bool,
  });

  if (Cell.variations) {
    ResizeableCell.variations = Cell.variations;
  }

  return ResizeableCell;
};

export {
  resizable as default,
};
