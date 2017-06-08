import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

class Tab extends React.Component {
  static defaultProps = {
    className: null,
    variation: 'default'
  }

  static propTypes = {
    /**
     * class name
     */
    className: PropTypes.string,
    /**
     * array of tabs
     */
    tabs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })).isRequired,
    /**
     * scoped has a border around the tab
     */
    variation: PropTypes.oneOf(['default', 'scoped']),
  };

  constructor(props, context) {
    super(props, context);
    this.state = { activeTab: this.props.tabs[0].id };
  }

  setActiveTab(id) {
    this.setState({ activeTab: id });
  }

  renderHeader() {
    const { tabs, variation } = this.props;
    const { activeTab } = this.state;

    return tabs.map((tab, index) => {
      const boundClick = this.setActiveTab.bind(this, tab.id);
      const headerClasses = [
        `slds-tabs--${variation}__item`,
        'slds-text-title--caps',
        { 'slds-active': activeTab === tab.id },
      ];

      return (
        <li
          key={tab.id}
          className={cx(headerClasses)}
          title={tab.title}
          role="presentation"
          onClick={boundClick}
        >
          <a
            className={`slds-tabs--${variation}__link`}
            role="tab"
            tabIndex={index}
            aria-selected={activeTab === tab.id}
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
    const { tabs, variation } = this.props;
    const { activeTab } = this.state;

    return tabs.map((tab) => {
      const bodyClasses = [
        `slds-tabs--${variation}__content`,
        { 'slds-show': activeTab === tab.id },
        { 'slds-hide': activeTab !== tab.id },
      ];

      return (
        <div
          key={tab.id}
          id={tab.id}
          className={cx(bodyClasses)}
          role="tabpanel"
          aria-labelledby={`${tab.id}__item`}
        >
          {tab.content}
        </div>
      );
    });
  }

  render() {
    const { className, variation } = this.props;
    const rest = omit(this.props, Object.keys(Tab.propTypes));

    const sldsClasses = [
      `slds-tabs--${variation}`,
      className
    ];

    return (
      <div {...rest} className={cx(sldsClasses)}>
        <ul className={`slds-tabs--${this.props.variation}__nav`} role="tablist">
          {this.renderHeader()}
        </ul>
        {this.renderBody()}
      </div>
    );
  }
}

export default Tab;
