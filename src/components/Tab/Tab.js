import React from 'react';

import prefixable from './../../decorators/prefixable';

export class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: this.props.tabs[0].id };

    this.setActiveTab = this.setActiveTab.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  setActiveTab(id) {
    this.setState({ activeTab: id });
  }

  renderHeader() {
    return this.props.tabs.map((tab, index) => {
      const boundClick = this.setActiveTab.bind(this, tab.id);

      return (
        <li
          key={tab.id}
          className={this.props.prefix([
            `tabs--${this.props.variation}__item`,
            'text-heading--label',
            { active: this.state.activeTab === tab.id },
          ])}
          title={tab.title}
          role="presentation"
          onClick={boundClick}
        >
          <a
            className={this.props.prefix([`tabs--${this.props.variation}__link`])}
            role="tab"
            tabIndex={index}
            aria-selected={this.state.activeTab === tab.id}
            aria-controls={tab.id}
            id={`${tab.id}__item`}
          >
            {tab.title}
          </a>
        </li>
      );
    });
  }

  renderBody() {
    return this.props.tabs.map((tab) =>
      <div
        key={tab.id}
        id={tab.id}
        className={this.props.prefix([
          `tabs--${this.props.variation}__content`,
          { show: this.state.activeTab === tab.id },
          { hide: this.state.activeTab !== tab.id },
        ])}
        role="tabpanel"
        aria-labelledby={`${tab.id}__item`}
      >
        {tab.content}
      </div>
    );
  }

  render() {
    return (
      <div className={this.props.prefix([`tabs--${this.props.variation}`])}>
        <ul className={this.props.prefix([`tabs--${this.props.variation}__nav`])} role="tablist">
          {this.renderHeader()}
        </ul>
        {this.renderBody()}
      </div>
    );
  }
}

Tab.propTypes = {
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * scoped has a border around the tabs
   */
  variation: React.PropTypes.oneOf(['default', 'scoped']),
  /**
   * Array with tab contents
   */
  tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    content: React.PropTypes.node.isRequired,
  })).isRequired,
};

Tab.defaultProps = {
  variation: 'default',
};

export default prefixable(Tab);
