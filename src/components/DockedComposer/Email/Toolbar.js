import React from 'react';

import { prefixClasses } from '../../../utils';
import { Button, ButtonIcon, ButtonGroup, Grid } from '../../../';

// At some point, the toolbar should be configurable and also support fonts and
// font sizes.

const Toolbar = (props, { cssPrefix }) => {
  const { disableTextAlign, buttonGroupLeft, buttonGroupRight, className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = [
    'docked-composer__toolbar',
    'shrink-none',
    'grid',
    'grid--align-spread',
  ];

  const renderButtonGroupAlign = () => {
    if (disableTextAlign) {
      return null;
    }

    return (
      <ButtonGroup>
        <Button icon icon-border-filled className="ql-align" value="center">
          <ButtonIcon sprite="utility" icon="center_align_text" />
        </Button>
        <Button icon icon-border-filled className="ql-align" value="right">
          <ButtonIcon sprite="utility" icon="right_align_text" />
        </Button>
      </ButtonGroup>
    );
  };

  return (
    <div
      {...rest}
      className={prefix(sldsClasses, className)}
    >
      <Grid>
        {buttonGroupLeft ? <ButtonGroup>{buttonGroupLeft}</ButtonGroup> : null}
        <ButtonGroup>
          <Button icon icon-border-filled className="ql-bold">
            <ButtonIcon sprite="utility" icon="bold" />
          </Button>
          <Button icon icon-border-filled className="ql-italic">
            <ButtonIcon sprite="utility" icon="italic" />
          </Button>
          <Button icon icon-border-filled className="ql-underline">
            <ButtonIcon sprite="utility" icon="underline" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button icon icon-border-filled className="ql-list" value="ordered">
            <ButtonIcon sprite="utility" icon="richtextnumberedlist" />
          </Button>
          <Button icon icon-border-filled className="ql-list" value="bullet">
            <ButtonIcon sprite="utility" icon="richtextbulletedlist" />
          </Button>
        </ButtonGroup>
        {renderButtonGroupAlign()}
        {buttonGroupRight ? <ButtonGroup>{buttonGroupRight}</ButtonGroup> : null}
      </Grid>
    </div>
  );
};

Toolbar.contextTypes = { cssPrefix: React.PropTypes.string };

Toolbar.propTypes = {
  /**
   * if true, text centering and left-align buttons won't be displayed
   */
  disableTextAlign: React.PropTypes.bool,
  /**
   * optional ButtonGroup content on the left side
   */
  buttonGroupLeft: React.PropTypes.node,
  /**
   * optional ButtonGroup content on the right side
   */
  buttonGroupRight: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
};

export default Toolbar;
