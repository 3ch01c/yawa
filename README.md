# yawa

Yet another web app. It's just a skeleton with all the things I normally use. Maybe one day I'll explain here why I use the things I use, but not today.

## Quick start
Install Docker and docker-compose then use the provided `docker-compose.yml` to get going with a development environment.
```
docker-compose up
```

## Installation
This guide assumes you're using a fresh install on [Ubuntu 16.04.2 Server 64-bit]().

Install [nodejs](https://nodejs.org).
```
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```
Build and run the app.
```
$ npm i
$ npm run build
$ npm start
```
Browse to [http://localhost:3000](http://localhost:3000) to view the page.

## Development

If you're developing, you probably want to automatically rebuild and restart the app when changes occur:
```
$ npm i
$ npm run watch
```

## Credits
Shout out [@bengourley](https://github.com/bengourley) for inspiring this project with [A Simple Website in Node.js - 2016 Edition](http://www.clock.co.uk/blog/a-simple-website-in-node-js-2016-edition).
