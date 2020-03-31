# React LDS ![Travis](https://travis-ci.org/propertybase/react-lds.svg?branch=master)

`react-lds` provides React components for the [Salesforce Lightning Design System](http://lightningdesignsystem.com/).

## Installation

To install the stable version with [npm](http://npmjs.com/), run:

``` bash
npm install --save react react-dom moment moment-timezone moment-range
```

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

Head over to the [Storybook Docs](https://react-lds.github.io/react-lds) to see a list of available components and their usage as well as interactive sample implementations of each component.

### ES Modules

By default, react-lds transpiles to commonJS modules. You can import ES modules directly by importing components from `react-lds/es`. This enables tree-shaking when using Webpack or similiar bundlers.

``` js
// CommonJS import (Supported browsers: IE11+, last 2 versions)
import { Badge } from 'react-lds';
// ES import (Supported browsers: last 2 versions)
import { Badge } from 'react-lds/es';
```

⚠ Do not mix imports from `react-lds` and `react-lds/es` in your codebase. This will duplicate code.

### Context

In order to use ReactLDS, you will have to provide `assetBasePath` via the [React Context](https://facebook.github.io/react/docs/context.html).

``` js
import { Children, Component } from 'react';
import PropTypes from 'prop-types';

class AssetPathProvider extends Component {
  getChildContext() {
    return {
      assetBasePath: 'assets/',
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

AssetPathProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

AssetPathProvider.childContextTypes = {
  assetBasePath: PropTypes.string,
};
```

## Development

`yarn install` and `yarn start`. Add or modify stories in `./stories` Happy hacking!

### Scaffold components

New components can be scaffolded with [hygen](https://hygen.io) templates. To add a component, run `npx hygen component new --name Foo`.

### Developing while embedded into a react project

`npm link` in this folder. After you changed stuff, run `npm build` to update
the files inside the `./dist` folder, because that's the entry point for
external react applications.

In your react app: `npm link react-lds`.

### Publish

- Open a new pull request from `/release/{version}`
- Adjust version in `package.json`
- Write `CHANGELOG.md`
- Merge into master and add a new tag. Travis will do the rest
