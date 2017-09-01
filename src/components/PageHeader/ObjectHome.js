import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';
import omit from 'lodash.omit';

import { Grid, Column, Menu } from '../../';

export class ObjectHome extends React.Component {
  static propTypes = {
    /**
     * bottom Buttons or ButtonGroup(s)
     */
    bottomButtons: PropTypes.node,
    /**
     * class name
     */
    className: PropTypes.string,
    /**
     * info that is displayed below the title
     */
    info: PropTypes.string,
    /**
     * record type header above the title
     */
    recordType: PropTypes.string.isRequired,
    /**
     * title
     */
    title: PropTypes.string.isRequired,
    /**
     * dropdown header menu that also get's triggered when a user clicks on the
     * title headline. Must be one or more instances of MenuDropdownList
     */
    titleMenu: PropTypes.node,
    /**
     * top Buttons or ButtonGroup(s)
     */
    topButtons: PropTypes.node,
  };

  static defaultProps = {
    bottomButtons: null,
    className: null,
    info: null,
    titleMenu: null,
    topButtons: null,
  }

  constructor(props, context) {
    super(props, context);
    this.state = { menuIsOpen: false };
  }

  openMenu = () => {
    this.setState({ menuIsOpen: true });
  }

  handleClickOutside() {
    this.setState({ menuIsOpen: false });
  }

  render() {
    const { bottomButtons, className, info, recordType, title, titleMenu, topButtons } = this.props;
    const rest = omit(this.props, Object.keys(ObjectHome.propTypes));

    const sldsClasses = [
      'slds-page-header',
      className,
    ];

    return (
      <div {...rest} className={cx(sldsClasses)} role="banner">
        <Grid>
          <Column className="slds-has-flexi-truncate">
            <p className="slds-text-title_caps">{recordType}</p>
            <Grid>
              <Grid className="slds-type-focus slds-no-space">
                <h1
                  onClick={this.openMenu}
                  className="slds-page-header__title slds-truncate"
                  title={title}
                >
                  {title}
                </h1>
                <Menu
                  button={{ sprite: 'utility', icon: 'down', noBorder: true }}
                  position="top-right"
                  isOpen={this.state.menuIsOpen}
                >
                  {titleMenu}
                </Menu>
              </Grid>
            </Grid>
          </Column>
          <Column className="slds-no-flex slds-grid slds-align-top">
            {topButtons}
          </Column>
        </Grid>
        <Grid>
          <Column className="slds-align-bottom">
            <p className="slds-page-header__info slds-text-body_small">{info}</p>
          </Column>
          <Column className="slds-align-bottom slds-no-flex slds-grid">{bottomButtons}</Column>
        </Grid>
      </div>
    );
  }
}

export default enhanceWithClickOutside(ObjectHome);
