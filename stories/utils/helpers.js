import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { select } from '@storybook/addon-knobs';
import { THEMES } from '../../src/utils';

const SIZES = [
  'x-small',
  'small',
  'medium',
  'large',
];

export function getThemes() {
  return select('Theme', THEMES, 'shade');
}

export function getSizes() {
  return select('Size', SIZES, 'medium');
}

export class Context extends Component {
  getChildContext() {
    return {
      assetBasePath: '/',
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

Context.childContextTypes = {
  assetBasePath: PropTypes.string.isRequired,
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export function withContext(story) {
  return <Context>{story()}</Context>;
}

export function withSpacing(story) {
  return (
    <div className="slds-m-around--medium">
      {story()}
    </div>
  );
}
