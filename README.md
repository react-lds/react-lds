# React LDS ![Travis](https://travis-ci.org/propertybase/react-lds.svg?branch=master)

`react-lds` provides React components for the [Salesforce Lightning Design System](http://lightningdesignsystem.com/).

## Installation

To install the stable version with [npm](http://npmjs.com/), run:

``` bash

# Install the libraries' peerDependencies
npm install react react-dom --save

# Install the library
npm install react-lds --save
```

## Usage

`react-lds` exports components as CommonJS modules. You can consume these via `import`/`require` in your own React components.

``` js
import React from 'react';
import { Badge } from 'react-lds';

const HelloWorld = props => (
  <Badge theme="warning" label={props.message} />
);

```

Head over to the [Docs](https://propertybase.github.io/react-lds) to see a list of available components and their usage as well as interactive sample implementations of each component.

### Context

In order to use React LDS, you will have to provide `assetBasePath` via the [React Context](https://facebook.github.io/react/docs/context.html).

``` js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Page should be high in your component hierarchy
// in order to be able to provide context
class Page extends Component {
  getChildContext() {
    return {
      assetBasePath: '',
    };
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

Page.childContextTypes = {
  assetBasePath: PropTypes.string,
};
```

For a detailed sample integration, check the [source of the docs](https://github.com/propertybase/react-lds/tree/master/docs/src/app).

### Decorators

The Lightning Design System enables you to modify components with different styles and [themes](https://www.lightningdesignsystem.com/components/utilities/themes/). Components can either be modified via **Flavors** (`slds-component--${flavor}`), **Variations** (`slds-component slds-${variation}`) or **Themes** (`slds-component slds-theme--${theme}`).

This library uses Higher Order Components (HoC) to enhance components with these modifiers, reducing the complexity of the components considerably. The different modifiers can be used as follows:

#### Themes

Themeable components have a `theme`-prop that allows you to set a [LDS Theme](https://www.lightningdesignsystem.com/components/utilities/themes/) on a component.

``` js
import React from 'react';
import { Badge } from 'react-lds';

const AlertBadge = props => (
  <Badge theme="alert" label={props.alert} />;
);

const StripedAlertBadge = props => (
  <Badge theme="alert texture" label={props.alert} />;
);
```

You can set all existing themes on a themeable component. To set `theme--alert-texture`, pass `texture` in your theme-prop.

#### Flavors

Flavors are alternate component-styles that are implemented via `--${modifiers}` in LDS. In order to use these in `react-lds`, pass them as a named prop.

``` js
import React from 'react';
import { Avatar } from 'react-lds';

// Circle is a flavor and will expand to `slds-avatar--circle`
const Client = props => (
  <Avatar circle src="#src" />
);
```

#### Variations

Variations are alternate component-styles that are implemented in LDS via `component slds-${variation}`. They pretty much work like flavors, so in order to use them, pass a named prop to the variationable component.

``` js
import React from 'react';
import { Grid, Column } from 'react-lds';

// Wrap is a variation, pull-padded is a flavor. There is no difference in usage
const GridSystem = props => (
  <Grid pull-padded wrap>
    {props.children}
  </Grid>
);
```

### Interactivity

Some components need a certain level of interactivity to be usable as React components. In order to achieve this, these components keep a minimal internal state and provide ways to hook into fired events:

 - `<Datepicker />`
 - `<Lookup />`
 - `<DropDownMenu />`
 - `<Modal />`
 - `<PickList />`
 - `<Tab />`

## Development

`yarn install` and `npm start`. Happy hacking!

You can change the port with the `PORT=` environment variable. Hot reloading
is setup to reload whenever a file was changed.

For component skeletons, check out the Wiki.

## Developing while embedded into a react project

`npm link` in this folder. After you changed stuff, run `npm build` to update
the files inside the `dist` folder, because that's the entry point for
external react applications.

In your react app: `npm link react-lds`.

## Publish

- Open a new pull request from `/release/{version}`
- Adjust version in `package.json`
- Write `CHANGELOG.md`
- Merge into master and add a new tag. Travis will do the rest
