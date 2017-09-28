import React from 'react';
import { select } from '@storybook/addon-knobs';
import { THEMES } from '../../src/utils';

export function getThemes() {
  return select('Theme', THEMES, 'default');
}

export function withPadding(story) {
  return (
    <div className="slds-m-around--medium">
      {story()}
    </div>
  );
}
