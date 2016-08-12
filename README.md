# Lightning Design System Components for React

## Development

`npm install` and `npm start`. Happy hacking!

You can change the port with the `PORT=` environment variable. Hot reloading
also works whenever a file was changed.

## Styling
Some components needed additional styles. If you use them, also include our
provided `styles.css` inside the `dist` folder.

- `<Email />` Component from Docked-Composer

## Develop and embed into a react project
`npm link` in this folder. After you changed stuff, run `npm build` to update
the files inside the `build` folder, because that's the entry point for
external react applications.

In your react app: `npm link react-lds`.

## Publish

- Adjust version in `package.json`
- Write `CHANGELOG.md`
- Build package and publish it

    ```sh
    npm run prebuild && npm run build
    npm publish
    ```
