import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';
import omit from 'lodash/omit';

import { Grid, Column, ControlledMenu, IconButton } from '../../';

// https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#is-it-safe
const propTypes = {
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
   * title headline. Must be one or more instances of MenuItem/MenuSubHeader
   */
  titleMenu: PropTypes.node,
  /**
   * top Buttons or ButtonGroup(s)
   */
  topButtons: PropTypes.node,
};

export class ObjectHomeRaw extends Component {
  static propTypes = propTypes;

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

  toggleMenu = () => this.setState(prevState => ({ menuIsOpen: !prevState.menuIsOpen }));

  handleClickOutside() {
    this.setState({ menuIsOpen: false });
  }

  render() {
    const { bottomButtons, className, info, recordType, title, titleMenu, topButtons } = this.props;
    const rest = omit(this.props, Object.keys(propTypes));

    const sldsClasses = [
      'slds-page-header',
      className,
    ];

    const titleClasses = [
      { 'slds-type-focus': !!titleMenu },
      'slds-no-space'
    ];

    return (
      <div {...rest} className={cx(sldsClasses)} role="banner">
        <Grid>
          <Column className="slds-has-flexi-truncate">
            <p className="slds-text-title_caps">{recordType}</p>
            <Grid>
              <Grid className={cx(titleClasses)}>
                <h1
                  onClick={titleMenu && this.toggleMenu}
                  className="slds-page-header__title slds-truncate"
                  title={title}
                >
                  {title}
                </h1>
                {titleMenu && (
                  <ControlledMenu
                    button={<IconButton
                      container
                      icon="down"
                      sprite="utility"
                      onClick={this.toggleMenu}
                    />}
                    isOpen={this.state.menuIsOpen}
                  >
                    {titleMenu}
                  </ControlledMenu>
                )}
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

export default enhanceWithClickOutside(ObjectHomeRaw);
