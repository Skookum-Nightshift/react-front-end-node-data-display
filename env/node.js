/** @flow */
require('es6-promise').polyfill();
require('isomorphic-fetch');
var debug = require('debug')('app startup');

import express from 'express';
import React from 'react';
import Router from 'react-router';
import {Resolver} from 'react-resolver';
import routes from '../routes';
import {resources} from './webpack';
import cookie from 'react-cookie';

import {readFileSync as read} from 'fs';
import {join} from 'path';

var tmpl = o => read('./index.html', 'utf8')
  .replace('†react†', o.html)
  .replace('†__resolver__†', JSON.stringify(o.data))
  .replace('†head†', resources());

var app = express();

app.use('/cdn', express.static(join(process.cwd(), 'dist')));
app.use('/public', express.static(join(process.cwd(), 'public')));

app.get('*', function(req, res) {

   if (req.url !== '/' && req.url.slice(-1) === '/') {
    return res.redirect(301, req.url.substring(0, req.url.length - 1));
  }

  var router = Router.create({
    routes: routes,
    location: req.url,
    onAbort(redirect) {
      res.writeHead(303, {Location: redirect.to});
      res.end();
    },
    onError(err) {
      debug('Routing Error');
      debug(err);
    },
  });

  router.run((Handler, state) => {
    var isNotFound = state.routes.some(function(route) {
      return route.isNotFound;
    });

    var status = isNotFound ? 404 : 200;
    cookie.plugToRequest(req, res);
    return (
      Resolver.renderToString(<Handler />)
        .then((o) => {
          res.status(status).send(tmpl({html: o.toString(), data: o.data}));
        })
    );
  });
});

debug('app server starting on 4000');
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  debug('React-docs listening at http://%s:%s', host, port);
});
