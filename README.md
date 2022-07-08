# React Firebase Boilerplate
A boilerplate ReactJS application (create-react-app) with an ExpressJS server and Firebase authentication.

## Development
`npm run watch`

This will run the ExpressJS server and ReactJS application separately and reload each one independantly when changes are made.

Server Port: `process.env.SVR_PORT` or `3001`

ReactJS Port: `3000`

## Production
`npm run start`

This will run the ReactJS build script and serve the files via an ExpressJS server in a Docker container.


Port: `process.env.PROD_PORT` or `80`

## .env variables
Some `.env` variables that need to be defined in the root of the project:

- `SVR_PORT` - `3001` by default
- `PROD_PORT` - `80` by default
- `NODE_ENV` - `production` or `development`
- `DB_FILENAME` - `development_sqlite.db` by default
- `GOOGLE_WEB_CLIENT_ID` - Need to generate an OAuth credential in Google Cloud

Also you need to set the `GOOGLE_WEB_CLIENT_ID` in `client/src/util/constants.js`.
