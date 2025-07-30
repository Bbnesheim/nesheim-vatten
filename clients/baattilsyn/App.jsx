const React = require('react');

function App() {
  return React.createElement(
    'main',
    null,
    React.createElement('h1', null, 'Båttilsyn'),
    React.createElement(
      'p',
      null,
      'Se ',
      React.createElement('a', { href: 'pages/index.html' }, 'nettsiden'),
      '.'
    )
  );
}

module.exports = App;
