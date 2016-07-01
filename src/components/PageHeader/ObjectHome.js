import React from 'react';

import prefixable from './../../decorators/prefixable';
import enhanceWithClickOutside from 'react-click-outside';

import { Grid, Column, DropdownMenu } from 'react-lds';

export class ObjectHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuIsOpen: false };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState({ menuIsOpen: true });
  }

  handleClickOutside() {
    this.setState({ menuIsOpen: false });
  }

  render() {
    return (
      <div className={this.props.prefix(['page-header'])} role="banner">
        <Grid>
          <Column className={this.props.prefix(['has-flexi-truncate'])}>
            <p className={this.props.prefix(['text-heading--label'])}>{this.props.recordType}</p>
            <Grid>
              <Grid className={this.props.prefix(['type-focus', 'no-space'])}>
                <h1
                  onClick={this.openMenu}
                  className={this.props.prefix(['page-header__title', 'truncate'])}
                  title={this.props.title}
                >
                  {this.props.title}
                </h1>
                <DropdownMenu
                  button={{ sprite: 'utility', icon: 'down', noBorder: true }}
                  position="top-right"
                  isOpen={this.state.menuIsOpen}
                >
                  {this.props.titleMenu}
                </DropdownMenu>
              </Grid>
            </Grid>
          </Column>
          <Column className={this.props.prefix(['no-flex', 'grid', 'align-top'])}>
            {this.props.topButtons}
          </Column>
        </Grid>
        <Grid>
          <Column className={this.props.prefix(['align-bottom'])}>
            <p className={`${this.props.prefix(['text-body--small'])} page-header__info`}>
              {this.props.info}
            </p>
          </Column>
          <Column className={this.props.prefix(['align-bottom', 'no-flex', 'grid'])}>{this.props.bottomButtons}</Column>
        </Grid>
      </div>
    );
  }
}

ObjectHome.propTypes = {
  /**
   * prefix HOC function
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * The title
   */
  title: React.PropTypes.string.isRequired,
  /**
   * Dropdown header menu that get's also triggered whena user clicks on the
   * title headline. Must be one or more instances of DropdownMenuList
   */
  titleMenu: React.PropTypes.node,
  /**
   * Record Type Header above the title
   */
  recordType: React.PropTypes.string.isRequired,
  /**
   * Top Buttons or ButtonGroup
   */
  topButtons: React.PropTypes.node,
  /**
   * Info that is displayed below the title
   */
  info: React.PropTypes.string,
  /**
   * Bototm Buttons or ButtonGroup(s)
   */
  bottomButtons: React.PropTypes.node,
};

export default prefixable(enhanceWithClickOutside(ObjectHome));
