import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import { prefixClasses } from '../../utils';
import { Grid, Column, DropdownMenu } from '../../index';

export class ObjectHome extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { menuIsOpen: false };
    this.prefix = (classes, passThrough) => prefixClasses(this.context.cssPrefix, classes, passThrough);
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
      <div className={this.prefix('page-header', this.props.className)} role="banner">
        <Grid>
          <Column className={this.prefix('has-flexi-truncate')}>
            <p className={this.prefix('text-heading--label')}>{this.props.recordType}</p>
            <Grid>
              <Grid className={this.prefix(['type-focus', 'no-space'])}>
                <h1
                  onClick={this.openMenu}
                  className={this.prefix(['page-header__title', 'truncate'])}
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
          <Column className={this.prefix(['no-flex', 'grid', 'align-top'])}>
            {this.props.topButtons}
          </Column>
        </Grid>
        <Grid>
          <Column className={this.prefix(['align-bottom'])}>
            <p className={this.prefix(['page-header__info', 'text-body--small'])}>{this.props.info}</p>
          </Column>
          <Column className={this.prefix(['align-bottom', 'no-flex', 'grid'])}>{this.props.bottomButtons}</Column>
        </Grid>
      </div>
    );
  }
}

ObjectHome.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

ObjectHome.propTypes = {
  /**
   * bottom Buttons or ButtonGroup(s)
   */
  bottomButtons: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * info that is displayed below the title
   */
  info: React.PropTypes.string,
  /**
   * record type header above the title
   */
  recordType: React.PropTypes.string.isRequired,
  /**
   * title
   */
  title: React.PropTypes.string.isRequired,
  /**
   * dropdown header menu that also get's triggered when a user clicks on the
   * title headline. Must be one or more instances of DropdownMenuList
   */
  titleMenu: React.PropTypes.node,
  /**
   * top Buttons or ButtonGroup(s)
   */
  topButtons: React.PropTypes.node,
};

export default enhanceWithClickOutside(ObjectHome);
