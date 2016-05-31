# Lightning Design System Components for React

## Development

To get a hot reloading local dev environment running:

1. `npm install`
2. Link npm module locally with `npm link`
3. Start watch task for lds components with `npm run watch`
4. Open a new terminal and `cd misc/demo`
5. In the `misc/demo` folder run
    - `npm install`
    - `npm link react-lds` to connect local npm module via symlinks
    - `webpack && npm start` to **compile demo styles** and run **webpack dev server**
