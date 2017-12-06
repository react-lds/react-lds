# React LDS ![Travis](https://travis-ci.org/propertybase/react-lds.svg?branch=master)

`react-lds` provides React components for the [Salesforce Lightning Design System](http://lightningdesignsystem.com/).

## Installation

To install the stable version with [npm](http://npmjs.com/), run:

``` bash
npm install react-lds --save
```

## Usage

`react-lds` exports components as modules. You can consume these via `import` in your own React components.

``` js
import React from 'react';
import { Badge } from 'react-lds';

const HelloWorld = props => (
  <Badge theme="warning" label={props.message} />
);

```

Head over to the [Storybook Docs](https://propertybase.github.io/react-lds) to see a list of available components and their usage as well as interactive sample implementations of each component.

### Context

In order to use ReactLDS, you will have to provide `assetBasePath` via the [React Context](https://facebook.github.io/react/docs/context.html).

``` js
import { Children, Component } from 'react';
import PropTypes from 'prop-types';

class AssetPathProvider extends Component {
  getChildContext() {
    return {
      assetBasePath: '',
    };
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

Page.childContextTypes = {
  assetBasePath: PropTypes.string,
};
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

`yarn install` and `yarn start`. Add or modify stories in `./stories` Happy hacking!

## Developing while embedded into a react project

`npm link` in this folder. After you changed stuff, run `npm build` to update
the files inside the `./dist` folder, because that's the entry point for
external react applications.

In your react app: `npm link react-lds`.

## Publish

- Open a new pull request from `/release/{version}`
- Adjust version in `package.json`
- Write `CHANGELOG.md`
- Merge into master and add a new tag. Travis will do the rest
