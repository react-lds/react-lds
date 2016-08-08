import React from 'react';

import prefixable from './../../../decorators/prefixable';
import { Button, ButtonIcon } from './../../Button';
import { ButtonGroup } from './../../ButtonGroup';
import { Grid } from './../../Grid';

// At some point, the toolbar should be configurable and also support fonts and
// font sizes.
const Toolbar = ({ prefix }) =>
  <div
    className={prefix(['docked-composer__toolbar', 'shrink-none', 'grid', 'grid--align-spread'])}
  >
    <Grid>
      <ButtonGroup>
        <Button icon variation="icon-border-filled" className="ql-bold">
          <ButtonIcon sprite="utility" icon="bold" />
        </Button>
        <Button icon variation="icon-border-filled" className="ql-italic">
          <ButtonIcon sprite="utility" icon="italic" />
        </Button>
        <Button icon variation="icon-border-filled" className="ql-underline">
          <ButtonIcon sprite="utility" icon="underline" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon variation="icon-border-filled" className="ql-list" value="ordered">
          <ButtonIcon sprite="utility" icon="richtextnumberedlist" />
        </Button>
        <Button icon variation="icon-border-filled" className="ql-list" value="bullet">
          <ButtonIcon sprite="utility" icon="richtextbulletedlist" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon variation="icon-border-filled" className="ql-align" value="center">
          <ButtonIcon sprite="utility" icon="center_align_text" />
        </Button>
        <Button icon variation="icon-border-filled" className="ql-align" value="right">
          <ButtonIcon sprite="utility" icon="right_align_text" />
        </Button>
      </ButtonGroup>
    </Grid>
  </div>;

Toolbar.propTypes = {
  /**
   * prefixable function
   */
  prefix: React.PropTypes.func,
};

export default prefixable(Toolbar);
