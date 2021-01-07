# protonmail-archive-all

Allows to move all emails from inbox to archives using protonmail-api.

## Getting started

- Clone the repository
```
git clone https://github.com/beamop/protonmail-archive-all.git
```
- Install dependencies
```sh
npm install
```
- Update ProtonMail creds
```js
// index.js
const pm = await ProtonMail.connect({
    username: '<your-email>',
    password: '<your-password>'
})
```
- Run it
```sh
node index.js
```

## Acknowledgements
Justin Kalland ([protonmail-api](https://github.com/justinkalland/protonmail-api))