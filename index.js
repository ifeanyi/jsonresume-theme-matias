"use strict";
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const template = require('lodash.template');
const less = require('less');
require('babel/register')({
  only: /src/,
  extensions: ['.jsx']
});

const Main = React.createFactory(require('./src/Main.jsx'));

exports.render = function render(resume) {
  const styleLess = fs.readFileSync(__dirname + '/style.less', 'utf-8');
  return less.render(styleLess)
    .then((output) => {
      return '<!doctype html>' + ReactDOMServer.renderToStaticMarkup(new Main({
        title: resume.basics.name,
        style: output.css.replace(/\n/g,''),
        data: resume
      }));
    }, e => console.error(e));
};
