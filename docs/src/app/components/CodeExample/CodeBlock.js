import React, { Component, PropTypes } from 'react';
import MarkdownElement from '../MarkdownElement';
import CodeBlockTitle from './CodeBlockTitle';

const styles = {
  root: {
    background: '#f8f8f8',
  },
  markdown: {
    overflow: 'auto',
    maxHeight: 1400,
    marginTop: 0,
    marginBottom: 0,
  },
  markdownRetracted: {
    maxHeight: 0,
  },
  description: {
    background: '#ffffff',
    overflow: 'auto',
    padding: '10px 20px 0',
    marginTop: 0,
    marginBottom: 0,
  },
  codeBlockTitle: {
    cursor: 'pointer',
  },
};

class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { expand: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      expand: !this.state.expand,
    });
  }

  render() {
    const text = `\`\`\`js
${this.props.children}
    \`\`\``;

    const descriptionStyle = styles.description;
    let codeStyle = Object.assign({}, styles.markdown, styles.markdownRetracted);
    let tooltip = 'Show source';

    if (this.state.expand) {
      codeStyle = styles.markdown;
      tooltip = 'Hide source';
    }

    return (
      <div style={styles.root}>
        <div onClick={this.handleClick} style={styles.codeBlockTitle}>
          <CodeBlockTitle title={this.props.title} tooltip={tooltip} />
        </div>
        <MarkdownElement style={codeStyle} text={text} />
        <div className="slds-m-bottom--medium">
          <MarkdownElement style={descriptionStyle} text={this.props.description} />
        </div>
      </div>
    );
  }
}

CodeBlock.propTypes = {
  children: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};


export default CodeBlock;
