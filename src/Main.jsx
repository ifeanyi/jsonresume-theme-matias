"use strict";
const React = require('react');
const Resume = require('./Resume.jsx');

class Main extends React.Component {
  render() {
    const {title, style, data} = this.props;

    return (
      <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <title>{title}</title>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
        <style type="text/css" media="all">{style}</style>
      </head>
      <body>
        <div>
          <Resume data={data} />
        </div>
      </body>
      </html>
    );
  }
}

module.exports = Main;
