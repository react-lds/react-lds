import React, { PropTypes } from 'react';
import { parse } from 'react-docgen';
import CodeBlock from './CodeBlock';

require('./github.css');

const CodeExample = ({ title, description, code, component }) => {
  const docs = component ? parse(code) : {};

  return (
    <CodeBlock
      title={title}
      description={description || docs.description}
    >
      {code}
    </CodeBlock>
  );
};

CodeExample.propTypes = {
  children: PropTypes.node,
  code: PropTypes.string.isRequired,
  component: PropTypes.bool,
  description: PropTypes.string,
  exampleBlockStyle: React.PropTypes.object,
  layoutSideBySide: PropTypes.bool,
  title: PropTypes.string,
};

CodeExample.defaultProps = {
  component: true,
};

CodeExample.contextTypes = {
  muiTheme: PropTypes.object,
};


export default CodeExample;
