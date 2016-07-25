# Lightning Design System Components for React

## Development

To get a hot reloading local dev environment running, please [read the installation guide](docs/README.md) in the `docs` folder

## Publish

- Adjust version in `package.json`
- Write `CHANGELOG.md`
- Build package and publish it
    ```sh
    npm run prebuild && npm run build
    cd build
    npm publish
    ```

## Credits

The module structure and build scripts are copied from [material-ui](https://github.com/callemall/material-ui)
