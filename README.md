# LAWYERS' SHOP

## A showcase project for a Recruitment challenge.

### User Stories:

1. Login/Logout: User able to login with password, good security is advantage, and user able to logout.
2. List shopping items => List all items in a grid view. Personal note: Use the "Photograph aesthetic", Fetch from Database, use lazy loaded react.
3. Cart => View Items in cart, should be able to add item in cart and remove.

### Things to Improve:
1. Better Component and server testing. Very minimal and Redux state based at version 0.1.0
2. Products accessed from database, instead of file system.
3. Checkout - Demo Payment gateway.

## Script Details

### Install Script

> npm install

Installs dependencies.

### Development Script

> npm start

Starts the Dev build.
Concurrently start the server and the single page app or client. Client must have the proxy(in package.json) set to server's
port

### Build Script

.env file > NODE_ENV=production

To build the client:
> npm run build

Build script used by Heroku:
> npm heroku-postbuild

### Test Script

> npm test

Tests the client-side App.

## Notes: