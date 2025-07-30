/** @jest-environment jsdom */
const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const App = require('./App');

test('renders heading and link', () => {
  render(React.createElement(App));
  expect(screen.getByRole('heading', { name: 'Båttilsyn' })).toBeInTheDocument();
  const link = screen.getByRole('link', { name: 'nettsiden' });
  expect(link).toHaveAttribute('href', 'pages/index.html');
});
